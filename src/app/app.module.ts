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
import { FyersService } from './services/fyers/fyers.service';
import { FyersHomeComponent } from './fyers-home/fyers-home.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './fyer.login';
import { SymbolComponentComponent } from './symbol-component/symbol-component.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
const config: SocketIoConfig = { url: "http://localhost:5000", options: {} };
@NgModule({
  declarations: [
    AppComponent,BreezeLoginComponent, FyersHomeComponent, AuthCallbackComponent,LoginComponent, SymbolComponentComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    BrowserAnimationsModule,
    TuiRootModule, // Has to go after BrowserAnimationsModule
    TuiButtonModule,
    HttpClientModule, SocketIoModule.forRoot(config),AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule
  ],
  providers: [BreezeAuthService,FyersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
