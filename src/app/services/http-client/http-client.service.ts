import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private http: HttpClient) {}

  get<T>(url: string, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.get<T>(url, options);
  }

  post<T>(url: string, data: any, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.post<T>(url, data, options);
  }

  patch<T>(url: string, data: any, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.patch<T>(url, data, options);
  }

  put<T>(url: string, data: any, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.put<T>(url, data, options);
  }

  delete<T>(url: string, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.delete<T>(url, options);
  }
}
