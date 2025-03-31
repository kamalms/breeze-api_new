import { Component } from '@angular/core';
import * as Fyers from 'fyers-web-sdk-v3';

import {fyersModel} from "fyers-web-sdk-v3"
@Component({
  selector: 'app-login',
  //template: '<button (click)="login()">Login with Fyers</button>',
  templateUrl:'app.login.html'
})
export class LoginComponent {
  fyers:any;
  sessionKey: string = '';
  login() {
    console.log('here ts')
    // Create a new instance of FyersAPI
     this.fyers = new fyersModel();

    // Set your APPID obtained from Fyers (replace "xxx-1xx" with your actual APPID)
    this.fyers.setAppId("JBNCC38398-100");

    // Set the RedirectURL where the authorization code will be sent after the user grants access
    // Make sure your redirectURL matches with your server URL and port
    this.fyers.setRedirectUrl(`https://8ab2-60-243-78-107.ngrok-free.app/auth`);

    var authURL =  this.fyers.generateAuthCode();
// console.log(authURL);

// window.open(generateAuthcodeURL);

  //  const authURL = Fyers.generateAuthCode();
    console.log('Redirecting to:', authURL);
    window.open(authURL); // Open in the same tab


  }

  saveToken(){
    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiJKQk5DQzM4Mzk4IiwidXVpZCI6ImNlMzYwYWRmOTc0YjQwMWZiMGUxMWMxMGEzOTU1MTJkIiwiaXBBZGRyIjoiIiwibm9uY2UiOiIiLCJzY29wZSI6IiIsImRpc3BsYXlfbmFtZSI6IlhNMzM5NzEiLCJvbXMiOiJSMCIsImhzbV9rZXkiOiJiMzgzYjgyZmNhZmE0OTYzYzFlYzNlYmVlZTRmYjU5ZjZlZWE2ZWVlNzE3NmI1YTIyYjhlYmVmNyIsImlzRGRwaUVuYWJsZWQiOiJOIiwiaXNNdGZFbmFibGVkIjoiTiIsImF1ZCI6IltcImQ6MVwiLFwiZDoyXCIsXCJ4OjBcIixcIng6MVwiLFwieDoyXCJdIiwiZXhwIjoxNzQzNDI2ODQzLCJpYXQiOjE3NDMzOTY4NDMsImlzcyI6ImFwaS5sb2dpbi5meWVycy5pbiIsIm5iZiI6MTc0MzM5Njg0Mywic3ViIjoiYXV0aF9jb2RlIn0.TZp--8eAYurNvufFZY0ZaTo8TFYBx1JTYlZuo8sx7To

    if(localStorage.getItem('fyers_auth_code')) {
      localStorage.removeItem('fyers_auth_code');
      localStorage.setItem('fyers_auth_code', this.sessionKey);
    }

    this.fyers = new fyersModel();

    // Set your APPID obtained from Fyers (replace "xxx-1xx" with your actual APPID)
    this.fyers.setAppId("JBNCC38398-100");
    this.fyers.setAccessToken(this.sessionKey);



const token = localStorage.getItem('fyers_auth_code');


// after access token genera access token
this.fyers.generate_access_token(
  {
    "client_id":"JBNCC38398-100"
  ,"secret_key":"0XA2H3AZQ9",
  "auth_code":token}).then((response: any)=>{
console.log("access toek" , response);
localStorage.setItem("access_token",response.access_token);
localStorage.setItem("refresh_token", response.refresh_token);
// this.fyers.get_profile().then((response: any) => {
//   console.log('login time hceck' , response)
// }).catch((error:any) => {
//   console.log(error)
// })

})
  }
}
