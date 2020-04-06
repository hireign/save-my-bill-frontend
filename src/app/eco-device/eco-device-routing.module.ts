import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcoDevicePage } from './eco-device.page';

const routes: Routes = [
  {
    path: '',
    component: EcoDevicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcoDevicePageRoutingModule {}
