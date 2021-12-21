import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubPageRoutingModule } from './sub-page-routing.module';
import { SubPageComponent } from './sub-page.component';


@NgModule({
  declarations: [
    SubPageComponent
  ],
  imports: [
    CommonModule,
    SubPageRoutingModule
  ]
})
export class SubPageModule { }
