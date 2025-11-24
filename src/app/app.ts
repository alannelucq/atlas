import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <main>
      <router-outlet/>

    </main>
  `,
  styles: `
      :host {
          margin: auto;
          max-width: 1000px;

          ::ng-deep main > :nth-child(2) {
              display: grid;
              gap: var(--size-6);
              max-width: 1000px;
              margin: 0 auto;
              padding: var(--size-6);
          }
      }
  `
})
export class App {
}
