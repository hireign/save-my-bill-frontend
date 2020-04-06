import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { parse } from 'querystring';
import { DataService, Message } from '../services/data.service';
import {Status} from './status.model';

@Component({
  selector: 'app-net-zero',
  templateUrl: './net-zero.page.html',
  styleUrls: ['./net-zero.page.scss'],
})
export class NetZeroPage implements OnInit {

  search:boolean = false
  calc:boolean = false
  buildId:string
  buildUsed:number
  noofDevices:Number
values=[1]
deviceids=[]
deviceValues=[]
finalvalue:number = 0 
newValue:number
deviceValue:number = 1
deviceClick=0
netValue:number
data:any
reqStatus:Status[]=[]
buildGet:any

  constructor(public alertController: AlertController,_data: DataService) {
   this.data=_data
   }

  ngOnInit() {
  }

  onClickCal(){

  }

  onSearch(){
    this.search=true
    this.calc=false

  }

  onCalculate(){
    this.search=false
    this.calc=true
  }
  clickCalculate(){
    this.finalvalue = 0
    for(var index in this.deviceValues){
      this.finalvalue =  parseFloat(this.deviceValues[index].toString())+ parseFloat(this.finalvalue.toString())
    }
    console.log(this.deviceValues)
    console.log(this.buildUsed)
    console.log(this.finalvalue)
    if(!this.buildId||!this.buildUsed){
      this.fillDetails()
    }else{
      if(this.buildUsed <= this.finalvalue){
        this.statusPos()
      }
      else if(this.buildUsed>this.finalvalue){
        this.statusNeg()
      }
      else{
        this.noStatus()
      }

    }
    
  }

clickGet(){
  this.reqStatus=[]
  if(!this.buildGet){
this.fillDetails()
  }else{
    this.data.getBuildings(this.buildGet).subscribe(data => {
      this.getData(data)
      console.log(data)
         })
  }

}

getData(data){
  for(var index in data){
  this.reqStatus.push({
    name: data[index].name,
    status: data[index].status
  })
}
console.log(this.reqStatus)
}

addDevice(){

  this.deviceids.push(this.deviceClick)
  this.deviceClick += 1
  this.values.push(1)

  
}

async displayResult() {
  const alert = await this.alertController.create({
    header: 'Success',
    buttons: ['OK']
  });
  await alert.present();
}
async fillDetails() {
  const alert = await this.alertController.create({
    header: 'FIll all Details',
    buttons: ['OK']
  });
  await alert.present();
}
async statusPos() {
  const alert = await this.alertController.create({
    header: 'Net Zero Status Achieved',
    buttons: [{
      text: 'OK',
      handler:()=>{
        console.log(this.buildId)
       this.data.postBuildings(this.buildId,true).subscribe(data=> console.log(data))
      }
    }]
  });
  await alert.present();
}
async statusNeg() {
  const alert = await this.alertController.create({
    header: 'Net Zero not Status Achieved',
    buttons: [{
      text: 'OK',
      handler:()=>{
        console.log(this.buildId)
       this.data.postBuildings(this.buildId,false).subscribe(data=> console.log(data))
      }
    }]
  });
  await alert.present();
}
async noStatus() {
  const alert = await this.alertController.create({
    header: 'No Status',
    buttons: ['OK']
  });
  await alert.present();
}
}
