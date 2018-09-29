import { Component } from '@angular/core';
import { PbPersonComponent } from './pb-person.component';

@Component({
  selector: 'pb-person-list',
  templateUrl: './pb-person-list.component.html'
})

export class PbPersonListComponent {
  private people: Array<Object> = [
    {
      nombre: 'Jaime Cervantes',
      photoURL: 'https://avatars1.githubusercontent.com/u/4156183'
    },
    {
      nombre: 'Pedro Picapiedra',
      photoURL: 'https://avatars1.githubusercontent.com/u/4156183'
    },
    {
      nombre: 'Bruce Lee',
      photoURL: 'https://avatars1.githubusercontent.com/u/4156183'
    }
  ];
  
  title = 'Padre Person list';

  constructor() {

  }

}
