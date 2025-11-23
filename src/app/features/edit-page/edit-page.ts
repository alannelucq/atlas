import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { Field, form } from "@angular/forms/signals";

@Component({
  selector: "app-edit-page",
  imports: [FormsModule, RouterLink, Field],
  template: `
    <header>
      <a role="link" routerLink="" class="back-link">Back to home</a>
    </header>

    <section>
      <input
        class="title-input"
        [field]="pageForm.title"
        (blur)="saveTitle()"
        (keydown.enter)="saveTitle()"
        placeholder="Enter your title"
        aria-label="Title"
      />

      <textarea
        class="content-input"
        [field]="pageForm.content"
        (blur)="saveContent()"
        placeholder="Type something..."
        aria-label="Content"
      ></textarea>
    </section>
  `,
  host: {role: 'main'},
  styles: `
      :host {
          display: grid;
          gap: var(--size-6);
          max-width: var(--size-content-3);
          margin: 0 auto;
          padding: var(--size-6);
      }

      section {
          display: grid;
          gap: var(--size-5);
      }

      .title-input {
          font-size: var(--font-size-8);
          font-weight: var(--font-weight-7);
          line-height: var(--font-lineheight-1);
          border: none;
          background: transparent;
          padding: 0;
          margin: 0;
          width: 100%;
          color: var(--gray-9);
          font-family: inherit;

          &::placeholder {
              color: var(--gray-5);
          }

          &:focus {
              outline: none;
          }
      }

      .content-input {
          border: none;
          background: transparent;
          padding: 0;
          font-size: var(--font-size-2);
          line-height: var(--font-lineheight-4);
          color: var(--gray-8);
          font-family: inherit;
          resize: none;
          min-height: 200px;

          &::placeholder {
              color: var(--gray-5);
          }

          &:focus {
              outline: none;
          }
      }
  `
})
export default class EditPage {
  protected pageForm = form(signal({title: '', content: ''}))

  protected saveTitle() {
    console.log('Saving title: ', this.pageForm.title().value());
  }

  protected saveContent() {
    console.log('Saving content:', this.pageForm.content().value());
  }
}
