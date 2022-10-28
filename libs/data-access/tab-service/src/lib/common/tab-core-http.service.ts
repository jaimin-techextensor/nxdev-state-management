import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class TabCoreHttpService {
  constructor(private httpClient: HttpClient) { }

  get(
    url: string,
    reqHeader?: HttpHeaders
  ) {
    return this.httpClient
      .get(url, { headers: reqHeader })
      .pipe(map((res: any) => {
        return res;
      }),
        catchError(this.errorHandler));
  }

  post(
    url: string,
    data: any,
    reqHeader?: HttpHeaders
  ) {
    return this.httpClient
      .post<any>(url, data, { headers: reqHeader })
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError(this.errorHandler)
      );
  }

  delete(
    url: string,
    id?: any
  ) {
    return this.httpClient
      .delete(url, id)
      .pipe(map((res: any) => {
        return res;
      }),
        catchError(this.errorHandler)
      );
  }

  errorHandler = (error: HttpErrorResponse) => {
    if (error.status == 401) {
      sessionStorage.clear();
    }
    return throwError(error);
  }
}
