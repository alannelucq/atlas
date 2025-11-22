import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <h1>Atlas Project</h1>
    <div class="actions">
      <a role="link" routerLink="kanban">Open Kanban Board</a>
      <a role="link" routerLink="edit-page">+ Create new page</a>
    </div>
  `,
  host: {
    role: 'section'
  },
  styles: `
      .actions {
          display: grid;
          gap: var(--size-2);
          color: var(--blue-6);
    }
  `
})
export default class Home {

}
