import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _baseUrl: string = 'https://dummyjson.com/';

  constructor(private _http: HttpClient) {}

  public get<T>(endpoint: string, params?: HttpParams) {}

  public post<T>(endpoint: string, body: any) {}

  public delete<T>(endpoint: string) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-type': 'application/json',
    });
  }

  private handleError(error: HttpErrorResponse): never {
    console.error('API Error:', error);
    throw error;
  }
}
