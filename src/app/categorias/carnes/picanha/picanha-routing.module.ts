import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicanhaPage } from './picanha.page';

const routes: Routes = [
  {
    path: '',
    component: PicanhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PicanhaPageRoutingModule {}
