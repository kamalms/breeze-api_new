import { Component, OnInit } from '@angular/core';
import { BreezeAuthService } from '../services/breeze-auth.service';
import { MarketService } from '../services/market-feeds';

@Component({
  selector: 'app-breeze-login',
  templateUrl: './breeze-login.component.html',
  styleUrls: ['./breeze-login.component.scss'],
  providers:[BreezeAuthService]
})
export class BreezeLoginComponent implements OnInit {
  sessionKeyInput = false;
  sessionKey: string = '';

  constructor(private authService: BreezeAuthService,
    private marketService: MarketService
  ) {}

  openLogin() {
    this.authService.getLoginUrl().subscribe((data: any) => {
      window.open(data.loginUrl, '_blank'); // Opens Breeze login page
      this.sessionKeyInput = true; // Show input field for session key
    });
  }

  submitSessionKey() {
    this.authService.sendSessionKey(this.sessionKey).subscribe(
      (response) => {
        alert("✅ Authentication successful! Market data will start streaming.");
      },
      (error) => {
        alert("❌ Authentication failed. Please try again.");
      }
    );
  }

  getCustomerDetails(){
    this.authService.getCustomerDetails().subscribe(
      (data) => {
        console.log("Customer Details:", data);
      },
      (error) => {
        console.error("Error fetching customer details", error);
      }
    );

  }
  getOptionChain() {
    this.authService.getOptionChain().subscribe(
      (data) => {
        console.log("getOptionChain:", data);
      },
      (error) => {
        console.error("Error fetching getOptionChain details", error);
      }
    );
  }

  connectWebSocket(){
    this.authService.startMarketStream().subscribe(
      (response) => {
        console.log("✅ Market stream started:", response);
      },
      (error) => {
        console.error("❌ Error starting market stream:", error);
      }
    );

  }

  marketData: any;
  ngOnInit() {
    this.marketService.getMarketUpdates().subscribe((data) => {
      console.log("📢 Market Update:", data);
      this.marketData = data;
    });
  }

  historyv2(){
    this.authService.historyv2().subscribe(
      (data) => {
        console.log("historyv2: in angular side", data);
      },
      (error) => {
        console.error("Error fetching getOptionChain details", error);
      }
    );
  }

  getQuotes(){
    this.authService.getQuotes().subscribe(
      (data) => {
        console.log("getQuotes: in angular side", data);
      },
      (error) => {
        console.error("Error fetching getQuotes details", error);
      }
    );
  }
}
