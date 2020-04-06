import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NetZeroPageRoutingModule } from './net-zero-routing.module';

import { NetZeroPage } from './net-zero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NetZeroPageRoutingModule
  ],
  declarations: [NetZeroPage]
})
export class NetZeroPageModule {}
