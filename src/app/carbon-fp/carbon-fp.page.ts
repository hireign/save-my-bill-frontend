import { Component, OnInit } from '@angular/core';
import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-carbon-fp',
  templateUrl: './carbon-fp.page.html',
  styleUrls: ['./carbon-fp.page.scss'],
})
export class CarbonFpPage implements OnInit {

  constructor(public alertController: AlertController) { }
  userName:any
  userMail:any
  mailBody:any

  ngOnInit() {
  }

  onSubmit(){
    if(!this.userMail||!this.userName||!this.mailBody){
      this.fillDetails()
    }else {
this.onStatus()
    }

  }

  async onStatus() {
    const alert = await this.alertController.create({
      header: 'Submitted',
      buttons: ['OK']
    });
    await alert.present();
  }

  async fillDetails() {
    const alert = await this.alertController.create({
      header: 'Fill all Details',
      buttons: ['OK']
    });
    await alert.present();
  }
}
