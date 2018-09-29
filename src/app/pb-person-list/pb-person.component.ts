import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'pb-person',
  templateUrl: './pb-person.component.html' ,
  styles: [
    '.persona {background: LightYellow; padding: 8px; margin-top: 8px}',
    'p {border: 1px solid #ccc; padding: 8px; margin-top: 8px}'
  ]
})
export class PbPersonComponent {
  @Input('person') persona: Object;
}
