import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  Querytrending = '';
  Querytag = '';
  Querycountry: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.Querytrending = data['trending'];
      this.Querytag = data['tag'];
    });
  }

  ngOnInit(): void {}
}
