import { Component, input } from '@angular/core';
import { PageSummary } from "../../domain/models/page-summary.model";
import { DatePipe } from "@angular/common";
import { LabelByPageStatusPipe } from "../../../shared/pipes/label-by-page-status/label-by-page-status.pipe";

@Component({
  selector: 'app-home-card',
  template: `
    @let _page = page();
    <header>
      <h3>{{ _page.title }}</h3>
      <span class="status-badge">{{ _page.status | labelByPageStatus }}</span>
    </header>
    <p class="text-subtitle">
      {{ _page.description }}
    </p>
    <footer>
      <time [attr.datetime]="_page.lastModifiedAt">
        <span aria-hidden="true">🕐</span> {{ _page.lastModifiedAt | date:'mediumDate' }}
      </time>
      <div class="tags">
        @for (tag of _page.tags; track tag) {
          <span class="tag">{{ tag }}</span>
        }
      </div>
    </footer>
  `,
  host: {role: 'article'},
  imports: [DatePipe, LabelByPageStatusPipe],
  styles: `
      :host {
          background: var(--gray-0);
          border: var(--border-size-1) solid var(--gray-3);
          border-radius: var(--radius-3);
          padding: var(--size-5);
          transition: box-shadow var(--ease-3) var(--speed-2);
          display: grid;
          gap: var(--size-3);
          cursor: pointer;

          &:hover {
              box-shadow: var(--shadow-2);
          }

          header {
              display: grid;
              grid-template-columns: 1fr auto;
              align-items: start;
              gap: var(--size-3);
          }

          footer {
              display: grid;
              grid-auto-flow: column;
              grid-template-columns: auto 1fr;
              align-items: center;
              gap: var(--size-3);
              font-size: var(--font-size-0);
          }

          .tags {
              display: grid;
              grid-auto-flow: column;
              gap: var(--size-2);
              justify-self: end;
          }
      }
  `
})
export default class PageSummaryCard {
  page = input.required<PageSummary>();
}
