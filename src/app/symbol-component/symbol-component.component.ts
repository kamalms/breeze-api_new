import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';

@Component({
  selector: 'app-symbol-component',
  templateUrl: './symbol-component.component.html',
  styleUrls: ['./symbol-component.component.scss']
})
export class SymbolComponentComponent implements OnInit {
  symbols: any[] = [];

  constructor(private http: HttpClient) {}
  displayedColumns: string[] = ['exSymbol', 'exchangeName', 'expiryDate', 'minLotSize', 'previousClose'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit() {
    //NSE – Capital Market: include nifty bank nifty
    //BANKNIFTY //NIFTY
    this.http.get<any>('https://public.fyers.in/sym_details/NSE_CM_sym_master.json')
    .subscribe(data => {
      if (data){
        let data23 = Object.values(data)
        this.dataSource.data = data23;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }

    });
    //  this.http.get<any>('https://public.fyers.in/sym_details/NSE_CD_sym_master.json').pipe(
    //   map(response => {
    //     console.log('wherr')
    //     if (response ) {
    //       //return Object.values(response); // ✅ Convert object properties to array

    //       this.dataSource.data = Object.values(response);
    //       this.dataSource.paginator = this.paginator;
    //       this.dataSource.sort = this.sort;
    //     }
    //   //  return [];
    //   })
    //);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
