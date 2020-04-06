import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarbonFpPage } from './carbon-fp.page';

const routes: Routes = [
  {
    path: '',
    component: CarbonFpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarbonFpPageRoutingModule {}
