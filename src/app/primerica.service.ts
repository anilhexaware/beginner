import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrimericaService {
  constructor(private http: HttpClient) {}

  postDetails(body: any) {
    return this.http.post<any>('http://localhost:3000/productList/', body);
  }

  getDetails() {
    return this.http.get<any>('http://localhost:3000/productList/');
  }
}
