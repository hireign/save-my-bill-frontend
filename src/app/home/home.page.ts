import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

test:any
sample:string[]=[]
myname:any
netZero="netZero"
smartHome="smartHome"
ecoDevice="ecoDevice"
carbonFP="carbonFP"
router:Router

  constructor(public data: DataService,router: Router) {
this.router=router
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }


  

  onClick(value){

    if (value==this.netZero){
      console.log(value)
      this.router.navigateByUrl("net-zero")
    }
    if("2"==value){
      this.router.navigateByUrl("eco-device")
      
    }
    if("3"==value){
      this.router.navigateByUrl("smart-home")
    }
    if("4"==value){
      this.router.navigateByUrl("carbon-fp")
    }
    /*
    this.data.getNativeMessages().subscribe(data => {
    this.displayData(data)
       })
       */
  }




}
