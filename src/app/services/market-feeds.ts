import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";

@Injectable({
  providedIn: "root",
})
export class MarketService {
  constructor(private socket: Socket) {}

  // Listen for stock market updates
  getMarketUpdates() {
    return this.socket.fromEvent("marketUpdate");
  }
}
