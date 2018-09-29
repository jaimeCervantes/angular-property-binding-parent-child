import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PbPersonListComponent } from './pb-person-list.component';
import { PbPersonComponent } from './pb-person.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations:[
    PbPersonListComponent,
    PbPersonComponent
  ],
  exports: [
    PbPersonListComponent,
    PbPersonComponent
  ]
})
export class PbPersonListModule {}
