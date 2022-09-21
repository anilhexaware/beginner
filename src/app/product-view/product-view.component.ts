import { Component, OnInit } from '@angular/core';
import { PrimericaService } from '../primerica.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
})
export class ProductViewComponent implements OnInit {
  fuel: any;
  constructor(private prime: PrimericaService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.prime.getDetails().subscribe((res) => {
      this.fuel = res;
    });
  }
}
