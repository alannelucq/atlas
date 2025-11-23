import { TestBed } from '@angular/core/testing';
import { page } from 'vitest/browser';
import { expect, test } from "vitest";

import Home from './home';
import { provideRouter, Router } from "@angular/router";
import PageEditor from '../page-editor/page-editor';
import { FakeUUIDProvider, UUIDProvider } from '../../core/providers/uuid.provider';

class PageTester {
  readonly fixture = TestBed.createComponent(Home);
  readonly root = page.elementLocator(this.fixture.nativeElement);
  readonly title = page.getByRole('heading', {name: /Atlas Project/});
  readonly kanbanLink = page.getByRole('link', {name: /Open Kanban Board/});
  readonly createPageLink = page.getByRole('link', {name: /Create new page/});
}

describe('Home', () => {
  test('should have default elements', async () => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([{path: 'page/:id', component: PageEditor}]),
        {provide: UUIDProvider, useValue: new FakeUUIDProvider().withUuid('xxx')},
      ]
    });
    const tester = new PageTester();
    const router = TestBed.inject(Router);

    expect(tester.title).toBeVisible();
    expect(tester.kanbanLink).toHaveAttribute('routerLink', 'kanban');

    await tester.createPageLink.click();
    expect(router.url).toBe('/page/xxx');
  });
})

