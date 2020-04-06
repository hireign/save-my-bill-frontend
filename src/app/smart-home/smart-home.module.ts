import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmartHomePageRoutingModule } from './smart-home-routing.module';

import { SmartHomePage } from './smart-home.page';

import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmartHomePageRoutingModule
  ],
  declarations: [SmartHomePage],
  providers: [
    AppLauncher,
  ]
})
export class SmartHomePageModule {}
