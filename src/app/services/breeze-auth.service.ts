import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreezeAuthService {
  private baseUrl = 'http://localhost:5000/api/breeze';
  private routerUrl ="http://localhost:5000/api/market";
  constructor(private http: HttpClient) {}

  getLoginUrl(): Observable<any> {
    console.log('angular app' , this.baseUrl)
    return this.http.get(`${this.baseUrl}/login-url`);
  }


  sendSessionKey(sessionKey: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/set-session`, { sessionKey }, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  getCustomerDetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer-details`);
  }

  getOptionChain(){

    return this.http.get(`${this.baseUrl}/optionChain`);
  }

  historyv2(){

    return this.http.get(`${this.routerUrl}/historyv2`);
  }

  getQuotes(){

    return this.http.get(`${this.routerUrl}/getQuotes`);
  }


  startMarketStream() {
    return this.http.post(
      `${this.routerUrl}/start`, {});
  }
}
