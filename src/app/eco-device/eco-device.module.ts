import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcoDevicePageRoutingModule } from './eco-device-routing.module';

import { EcoDevicePage } from './eco-device.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcoDevicePageRoutingModule
  ],
  declarations: [EcoDevicePage]
})
export class EcoDevicePageModule {}
