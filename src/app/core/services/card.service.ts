import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/Card';

@Injectable()
export class CardService {
  baseURL: string = 'localhost:8080/';

  constructor(private http: HttpClient) {}

  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.baseURL + '/card');
  }
}
