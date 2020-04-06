import { Component, OnInit } from '@angular/core';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
import { Platform } from '@ionic/angular';
import {Plugins,AppState} from '@capacitor/core';

@Component({
  selector: 'app-smart-home',
  templateUrl: './smart-home.page.html',
  styleUrls: ['./smart-home.page.scss'],
})
export class SmartHomePage implements OnInit {
  
 App = Plugins;

  constructor(private appLauncher: AppLauncher, private platform: Platform) { }

  options: AppLauncherOptions = {
    
  }

  ngOnInit() {
  }


  async onSelect(value){
    if(value==1){
      //window.open('https://www.fb.com', '_system', 'location=yes')
      if(this.platform.is('ios')) {
        this.options.uri = 'fb://'
      } else {
        this.options.packageName = 'com.google.android.apps.chromecast.app'
      }
      this.appLauncher.canLaunch(this.options)
      .then((canLaunch: boolean) =>{ 
        console.log('Nest is available')
        this.appLauncher.launch(this.options).then(()=>{

        },
(error)=>{console.log(JSON.stringify(error))}
)
    })
      .catch((error: any) => console.error('Nest is not available'));
    }
    if(value==2){
         //window.open('https://www.fb.com', '_system', 'location=yes')
         if(this.platform.is('ios')) {
          this.options.uri = 'fb://'
        } else {
          this.options.packageName = 'com.amazon.dee.app'
        }
        this.appLauncher.canLaunch(this.options)
        .then((canLaunch: boolean) =>{ 
          console.log('Alexa is available')
          this.appLauncher.launch(this.options).then(()=>{
  
          },
  (error)=>{console.log(JSON.stringify(error))}
  )
      })
        .catch((error: any) => console.error('Alexa is not available'));

    }
  }

  

}
