import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import HomeCard from './home-card/home-card';
import { PageSummary } from "./models/page-summary";
import Icon from '../../shared/ui/icon.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, HomeCard, Icon],
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
      <a role="link" class="button-link button-secondary" routerLink="edit-page">
        <app-icon icon="add"/>
        Create new page
      </a>
    </nav>

    <section class="recent-pages">
      <h2>Recent Pages</h2>
      @for (page of recentPages(); track page.id) {
        <app-home-card [page]="page"/>
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
  `
})
export default class Home {
  recentPages = signal<PageSummary[]>([
    {
      id: '1',
      title: 'Getting Started Guide',
      description: 'Welcome to Atlas! This is a text block where you can write your thoughts and ideas.',
      status: 'In Progress',
      date: 'Today',
      dateTime: '2024-01-15',
      tags: ['documentation', 'guide']
    }
  ]);
}
