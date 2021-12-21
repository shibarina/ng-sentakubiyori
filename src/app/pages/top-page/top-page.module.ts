import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopPageRoutingModule } from './top-page-routing.module';
import { TopPageComponent } from './top-page.component';
import { SubPageModule } from '../sub-page/sub-page.module';


@NgModule({
  declarations: [
    TopPageComponent
  ],
  imports: [
    CommonModule,
    TopPageRoutingModule,
    SubPageModule
  ]
})
export class TopPageModule { }
