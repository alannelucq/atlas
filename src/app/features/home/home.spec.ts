import { TestBed } from '@angular/core/testing';
import { page } from 'vitest/browser';
import { expect, test } from "vitest";

import Home from './home';
import { provideRouter } from "@angular/router";

class HomeTester {
  readonly fixture = TestBed.createComponent(Home);
  readonly root = page.elementLocator(this.fixture.nativeElement);
  readonly title = page.getByRole('heading', {name: /Atlas Project/});
  readonly kanbanLink = page.getByRole('link', {name: /Open Kanban Board/});
  readonly createPageLink = page.getByRole('link', {name: /Create new page/});
}

describe('Home', () => {
  test('should have default elements', async () => {
    TestBed.configureTestingModule({providers: [provideRouter([])]});
    const tester = new HomeTester();
    expect(tester.title).toBeVisible();
    expect(tester.kanbanLink).toHaveAttribute('routerLink', 'kanban');
    expect(tester.createPageLink).toHaveAttribute('routerLink', 'edit-page');
  });
})
