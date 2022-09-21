import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthentiateService {
  constructor(private http: HttpClient) {}
  private url = './assets/db.json';

  getuers(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
