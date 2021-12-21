import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopPageComponent } from './top-page.component';

const routes: Routes = [
  {
    path: 'sub', component: TopPageComponent,
    loadChildren: () =>
      import('../sub-page/sub-page.module').then((m) => m.SubPageModule),
  },{
      path: '', component: TopPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopPageRoutingModule { }
