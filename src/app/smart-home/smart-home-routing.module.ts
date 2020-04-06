import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartHomePage } from './smart-home.page';

const routes: Routes = [
  {
    path: '',
    component: SmartHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartHomePageRoutingModule {}
