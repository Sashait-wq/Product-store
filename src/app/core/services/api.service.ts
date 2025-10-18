import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _baseUrl: string = 'https://dummyjson.com/';

  constructor(private _http: HttpClient) {}

  public get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this._http
      .get<T>(this._baseUrl + endpoint, {
        headers: this.getHeaders(),
        params,
      })
      .pipe(catchError((error) => this.handleError(error)));
  }

  public post<T>(endpoint: string, body: any): Observable<T> {
    return this._http
      .post<T>(this._baseUrl + endpoint, body, {
        headers: this.getHeaders(true),
      })
      .pipe(catchError((error) => this.handleError(error)));
  }

  public delete<T>(endpoint: string) {
    this._http
      .delete<T>(this._baseUrl + endpoint)
      .pipe(catchError((error) => this.handleError(error)));
  }

  private getHeaders(isType: boolean = false): HttpHeaders {
    let header = new HttpHeaders({
      Accept: 'application/json',
    });

    if (isType) {
      header = header.set('Content-type', 'application/json');
    }
    return header;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('API Error:', error);
    return throwError(() => error);
  }
}
