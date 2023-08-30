import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinguicaPage } from './linguica.page';

const routes: Routes = [
  {
    path: '',
    component: LinguicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinguicaPageRoutingModule {}
