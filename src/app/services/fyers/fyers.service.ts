import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Import the Fyers SDK as any (because it lacks TypeScript definitions)
import * as Fyers from 'fyers-web-sdk-v3';
// Import required modules
import { fyersModel } from "fyers-web-sdk-v3"
import { catchError, from, Observable, throwError } from 'rxjs';

import * as Papa from 'papaparse';
@Injectable({
  providedIn: 'root'
})
export class FyersService {
  private fyers: any;
  private baseUrl = 'https://api-t1.fyers.in/api/v3/profile';
  private we = 'https://public.fyers.in/sym_details/NSE_EQ.json';
  private symbolsUrl = 'https://public.fyers.in/sym_details/NSE_FO.csv'; // Change if needed
  fyersLibrary: any;
  constructor(private http: HttpClient) {
    // Initialize Fyers instance once in the constructor
    this.fyers = new Fyers.fyersModel();
    this.fyers.setAppId("JBNCC38398-100"); // Replace with your App ID
  }
  getProfile2(): Promise<any> {
    this.fyers = new fyersModel();
    this.fyers.setAppId("JBNCC38398-100");
    const accessToken = localStorage.getItem('access_token');
    this.fyers.setAccessToken(accessToken);
    return this.fyers.get_profile();
  }
  getProfile(): Observable<any> {
    const accessToken = localStorage.getItem('access_token');

    if (!accessToken) {
      return throwError(() => new Error('No Access Token Found'));
    }

    this.fyers.setAccessToken(accessToken);

    return from(this.fyers.get_profile()).pipe(
      catchError((error) => {
        console.error('Error fetching profile:', error);
        return throwError(() => new Error('Failed to fetch profile'));
      })
    );
  }


getSymbols(): Observable<any[]> {
    return new Observable(observer => {
      this.http.get(this.symbolsUrl, { responseType: 'text' }).subscribe({
        next: (data) => {
          // Parse CSV Data
          Papa.parse(data, {
            header: true, // Treat first row as header
            skipEmptyLines: true,
            complete: (result : any) => {
              observer.next(result.data);
              observer.complete();
            }
          });
        },
        error: (error) => {
          console.error('Error fetching CSV:', error);
          observer.error(error);
        }
      });
    });
  }



  getQuotes(): Observable<any> {
  const accessToken = localStorage.getItem('access_token');

  if (!accessToken) {
    return throwError(() => new Error('No Access Token Found'));
  }

  this.fyers.setAccessToken(accessToken);
console.log('quotes' ,this.fyers)

//   fyers.getQuotes(inp).then((response) => {
//     console.log(response)
// }).catch((error) => {
//     console.log(error)
// })

  return from(this.fyers.getQuotes()).pipe(
    catchError((error) => {
      console.error('Error fetching profile:', error);
      return throwError(() => new Error('Failed to fetch profile'));
    })
  );
}
}
