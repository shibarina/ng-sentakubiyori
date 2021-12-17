import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopPageComponent } from './top-page/top-page.component';

const routes: Routes = [
  {
    path: 'top',
    loadChildren: () =>
      import('./top-page/top-page.module').then((m) => m.TopPageModule),
  },{
    path: '', redirectTo: 'top', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
