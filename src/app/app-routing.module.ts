import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HomePageModule} from './home/home.module';
import { from } from 'rxjs';

const routes: Routes = [
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'net-zero',
    loadChildren: () => import('./net-zero/net-zero.module').then( m => m.NetZeroPageModule)
  },
  {
    path: 'smart-home',
    loadChildren: () => import('./smart-home/smart-home.module').then( m => m.SmartHomePageModule)
  },
  {
    path: 'eco-device',
    loadChildren: () => import('./eco-device/eco-device.module').then( m => m.EcoDevicePageModule)
  },
  {
    path: 'carbon-fp',
    loadChildren: () => import('./carbon-fp/carbon-fp.module').then( m => m.CarbonFpPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
