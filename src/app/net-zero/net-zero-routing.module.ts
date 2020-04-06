import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetZeroPage } from './net-zero.page';

const routes: Routes = [
  {
    path: '',
    component: NetZeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetZeroPageRoutingModule {}
