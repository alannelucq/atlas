import { beforeEach, describe, expect } from "vitest";
import { TestBed, waitForAsync } from "@angular/core/testing";
import { page } from "vitest/browser";

import PageEditor from "./page-editor";
import { provideRouter } from "@angular/router";
import { InMemoryPageGateway, PageGateway } from '../domain/gateways/page.gateway';
import { StubPageBuilder } from '../domain/models/page.model';
import { inputBinding } from "@angular/core";
import { provideQueryClient, QueryClient } from "@tanstack/angular-query-experimental";

class PageTester {
  readonly fixture = TestBed.createComponent(PageEditor, {
    bindings: [inputBinding('id', () => 'xxx')]
  });
  readonly root = page.elementLocator(this.fixture.nativeElement);
  readonly backLink = page.getByRole('link', {name: /Back to home/});
  readonly titleField = page.getByRole('textbox', {name: /Title/});
  readonly contentField = page.getByRole('textbox', {name: /Content/});

  constructor() {
    // Triggers change detection to ensure signal input has value
    TestBed.tick();
  }
}

describe('Page editor', () => {

  let gateway: InMemoryPageGateway;
  
  beforeEach(() => {
    gateway = new InMemoryPageGateway();
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        provideQueryClient(new QueryClient()),
        {provide: PageGateway, useValue: gateway}
      ]
    })
  })

  it('should have default values', () => {
    const tester = new PageTester();
    expect(tester.backLink).toHaveAttribute('routerLink', '');
    expect(tester.titleField).toHaveValue('');
    expect(tester.contentField).toHaveValue('');
  });

  it('should fill form from page', async () => {
    gateway.pageById = {
      'xxx': StubPageBuilder().id('xxx').title('My awesome page').content('Some content').build()
    }
    const tester = new PageTester();

    waitForAsync(() => {
      expect(tester.titleField).toHaveValue('My awesome page');
      expect(tester.contentField).toHaveValue('Some content');
    })
  });
})
