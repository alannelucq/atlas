import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import PageSummaryCard from './home-card/page-summary-card';
import Icon from '../../shared/ui/icon.component';
import { UUIDProvider } from "../../core/providers/uuid.provider";
import { injectLatestPages } from "../domain/query";

@Component({
  selector: 'app-home',
  imports: [RouterLink, PageSummaryCard, Icon],
  template: `
    <header>
      <h1>Atlas Project</h1>
      <p class="text-subtitle">A modern workspace for organizing tasks and ideas</p>
    </header>

    <nav class="actions" aria-label="Main actions">
      <a role="link" class="button-link button-primary" routerLink="kanban">
        <app-icon icon="view_kanban"/>
        Open Kanban Board
      </a>
      <a role="link" class="button-link button-secondary" (click)="navigateToNewPage()">
        <app-icon icon="add"/>
        Create new page
      </a>
    </nav>

    <section class="recent-pages">
      <h2>Recent Pages</h2>
      @for (page of latestPagesQuery.data(); track page.id) {
        <app-home-card [page]="page" [routerLink]="['page', page.id]"/>
      }
    </section>
  `,
  host: {
    role: 'main'
  },
  styles: `
      :host {
          display: grid;
          gap: var(--size-7);
          max-width: var(--size-content-3);
          margin: 0 auto;
          padding: var(--size-6);

          header {
              display: grid;
              gap: var(--size-2);
          }

          .actions {
              display: grid;
              grid-auto-flow: column;
              grid-auto-columns: max-content;
              gap: var(--size-3);
          }

          .recent-pages {
              display: grid;
              gap: var(--size-4);
          }
      }
  `,
})
export default class Home {
  private readonly uuidProvider = inject(UUIDProvider);
  private readonly router = inject(Router);
  protected latestPagesQuery = injectLatestPages();

  async navigateToNewPage() {
    await this.router.navigate(['page', this.uuidProvider.generate()]);
  }
}
