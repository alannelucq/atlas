import { Component, signal } from "@angular/core";
import { Field, form } from "@angular/forms/signals";

@Component({
  selector: "app-edit-page",
  imports: [Field],
  template: `
    <div class="field">
      <label for="description">Description</label>
      <input id="description" [field]="pageForm.description"/>
      <p>Description: {{ pageForm.description().value() }}</p>
    </div>
  `
})
export default class EditPage {
  protected pageForm = form(signal({description: ''}));
}
