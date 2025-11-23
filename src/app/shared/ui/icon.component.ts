import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `{{ icon() }}`,
  host: {
    'class': 'material-symbols-outlined',
    '[attr.aria-hidden]': 'ariaHidden()'
  }
})
export default class Icon {
  icon = input.required<string>();
  ariaHidden = input<boolean>(true);
}
