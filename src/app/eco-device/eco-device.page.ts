import { Component, OnInit } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';
import { DeviceList } from './device.model'

@Component({
  selector: 'app-eco-device',
  templateUrl: './eco-device.page.html',
  styleUrls: ['./eco-device.page.scss'],
})
export class EcoDevicePage implements OnInit {

  deviceId:string
  deviceName:string
  deviceCost:string
  deviceLink:string
  deviceData:DeviceList[] = []

  constructor(public data: DataService,router: Router) { 
    data.getNativeMessages().subscribe(data => {
      this.getData(data)
         })
  }

  ngOnInit() {
  }

  onBuy(link){
    window.open(link, '_system', 'location=yes')
  }
getData(data){
  //this.deviceData=data
  for(var index in data){
    this.deviceData.push({
      deviceId: data[index].deviceId,
      deviceName: data[index].deviceName,
      deviceLink: data[index].deviceLink,
      deviceCost: data[index].deviceCost

    })

  }

}
}
