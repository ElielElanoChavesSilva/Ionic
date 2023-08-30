import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarvaoPage } from './carvao.page';

const routes: Routes = [
  {
    path: '',
    component: CarvaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarvaoPageRoutingModule {}
