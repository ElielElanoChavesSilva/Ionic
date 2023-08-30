import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CervejaPage } from './cerveja.page';

const routes: Routes = [
  {
    path: '',
    component: CervejaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CervejaPageRoutingModule {}
