import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarbonFpPageRoutingModule } from './carbon-fp-routing.module';

import { CarbonFpPage } from './carbon-fp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarbonFpPageRoutingModule
  ],
  declarations: [CarbonFpPage]
})
export class CarbonFpPageModule {}
