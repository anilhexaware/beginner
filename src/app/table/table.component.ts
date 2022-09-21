import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PrimericaService } from '../primerica.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = tableData;
  prime: any;

  users = [
    { userId: 10, firstName: 'Anil' },
    { userId: 20, firstName: 'Anil2' },
    { userId: 30, firstName: 'Anil3' },
    { userId: 40, firstName: 'Anil4' },
    { userId: 50, firstName: 'Anil5' },
  ];

  constructor(private primerica: PrimericaService) {}

  ngOnInit() {
    this.getRole();
  }

  getRole() {
    this.primerica.getDetails().subscribe((res) => {
      console.log(res);
      this.prime = res;
    });
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const tableData: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
];
