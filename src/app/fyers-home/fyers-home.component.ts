import { Component } from '@angular/core';
import { FyersService } from '../services/fyers/fyers.service';

import * as Fyers from 'fyers-web-sdk-v3';

import {fyersModel} from "fyers-web-sdk-v3";
import {Config} from "fyers-web-sdk-v3";
import {fyersDataSocket } from "fyers-web-sdk-v3";
import {fyersOrderSocket} from "fyers-web-sdk-v3"
@Component({
  selector: 'app-fyers-home',
  templateUrl: './fyers-home.component.html',
  styleUrls: ['./fyers-home.component.scss']
})
export class FyersHomeComponent {
  fyers : any;
constructor(private fyersService: FyersService){
}

profileData: any;
symbols: any[] = [];
getProfileData(){

  this.fyersService.getProfile().subscribe({
    next: (data) => {
      console.log('Profile Data:', data);
      this.profileData = data;
    },
    error: (error) => {
      console.error('Error fetching profile:', error);
    }
  });

}
getsymbal(){
  this.fyersService.getSymbols().subscribe({
    next: (data) => {
      console.log('Symbol Data:', data);
      this.symbols = data; // Store parsed symbols
    },
    error: (error) => {
      console.error('Error fetching symbols:', error);
    }
  });
}
generalsocketConnect() {
  console.log('socket start')
    const accessToken = localStorage.getItem('access_token');
    var skt= fyersDataSocket.getInstance(accessToken)
    skt.on("connect",function(){
        //skt.subscribe(['NSE:BHARATFORG-EQ' , 'NSE:HDFCBANK-EQ', 'NSE:NIFTY2540316850CE'],false,1)
      //  skt.subscribe(['NSE:NIFTY2540316850CE'],false,1);
        skt.subscribe(['NSE:NIFTYBANK-INDEX'], false,1)
    skt.mode(skt.FullMode,1)
    console.log(skt.isConnected())
    skt.unsubscribe(['NSE:HDFCBANK-EQ'],false,1)
    })

    skt.on("message",function(message : any){
        console.log({"TEST":message})
    })

    skt.on("error",function(message : any){
        console.log("erroris",message)
    })

    skt.on("close",function(){
        console.log("socket closed")
    })
    skt.connect()
    skt.autoreconnect()
}
OrderWebsocketConnection(){
  const accessToken = localStorage.getItem('access_token');
  var skt=new fyersOrderSocket(`JBNCC38398-100:`+accessToken)

  skt.on("error",function (errmsg :any) {
      console.log(errmsg)
  })
  skt.on('general',function (msg:any) {
      console.log("message", msg)
  })
  skt.on('connect',function () {
      skt.subscribe([skt.orderUpdates,skt.tradeUpdates,skt.positionUpdates,skt.edis,skt.pricealerts])
      console.log(skt.isConnected())
  })
  skt.on('close',function () {
      console.log('closed')
  })
  skt.on('orders',function (msg:any) {
      console.log("orders",msg)
  })
  skt.on('trades',function (msg:any) {
      console.log('trades',msg)
  })
  skt.on('positions',function (msg:any) {
      console.log('positions',msg)
  })
  // skt.autoreconnect()
  skt.connect()
}

// get symbal logic

getQuotes(){

  this.fyersService.getQuotes().subscribe({
    next: (data) => {
      console.log('getQuotes Data:', data);
      this.profileData = data;
    },
    error: (error) => {
      console.error('Error fetching profile:', error);
    }
  });

}
}
