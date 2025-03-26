import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TuiButtonModule, TuiRootModule} from '@taiga-ui/core';
import { AppComponent } from './app.component';
//import {TuiButtonModule} from '@taiga-ui/experimental';
import { BreezeLoginComponent } from './breeze-login/breeze-login.component';
import { FormsModule } from '@angular/forms';
import { BreezeAuthService } from './services/breeze-auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
const config: SocketIoConfig = { url: "http://localhost:5000", options: {} };
@NgModule({
  declarations: [
    AppComponent,BreezeLoginComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    BrowserAnimationsModule,
    TuiRootModule, // Has to go after BrowserAnimationsModule
    TuiButtonModule,
    HttpClientModule, SocketIoModule.forRoot(config)
  ],
  providers: [BreezeAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
