import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubPageComponent } from './sub-page.component';

const routes: Routes = [{
  path: '', component: SubPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubPageRoutingModule { }
