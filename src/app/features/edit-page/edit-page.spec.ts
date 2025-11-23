import { beforeEach, describe, expect } from "vitest";
import { TestBed } from "@angular/core/testing";
import { page } from "vitest/browser";

import EditPage from "./edit-page";
import { provideRouter } from "@angular/router";

class PageTester {
  readonly fixture = TestBed.createComponent(EditPage);
  readonly root = page.elementLocator(this.fixture.nativeElement);
  readonly backLink = page.getByRole('link', {name: /Back to home/});
  readonly titleField = page.getByRole('textbox', {name: /Title/});
  readonly contentField = page.getByRole('textbox', {name: /Content/});
}

describe('Edit page', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideRouter([])]})
  })

  it('should have default elements', async () => {
    const tester = new PageTester();
    expect(tester.backLink).toHaveAttribute('routerLink', '');
    expect(tester.titleField).toHaveValue('');
    expect(tester.contentField).toHaveValue('');
  });
})
