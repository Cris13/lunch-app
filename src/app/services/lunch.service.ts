import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ORDERS } from '../model/order-mock';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LunchService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]>{
    //return this.http.get<Order[]>('http://localhost:8080/orders',httpOptions).pipe(catchError(this.handleError('getOrders', [])));
    return of([])
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}