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
      main {
          margin: auto;
          max-width: 1000px;
      }
  `
})
export class App {
}
