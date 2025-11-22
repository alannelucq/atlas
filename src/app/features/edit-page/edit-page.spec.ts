import { describe, expect } from "vitest";
import { TestBed } from "@angular/core/testing";
import { page } from "vitest/browser";

import EditPage from "./edit-page";

class EditPageTester {
  readonly fixture = TestBed.createComponent(EditPage);
  readonly root = page.elementLocator(this.fixture.nativeElement);
  readonly description = page.getByRole('textbox', {name: /Description/});
}

describe('Edit page', () => {
  it('should display description', async () => {
    const tester = new EditPageTester();
    await tester.description.fill('This is awesome');
    expect(tester.root).toHaveTextContent(`Description: This is awesome`);
  })
})
