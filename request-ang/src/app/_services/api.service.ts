import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, map } from 'rxjs/operators';
import { Request } from './../_model/Request';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
const baseUrl = 'http://localhost:8090';
const apiUrl = '/api/v1/requests';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(baseUrl + apiUrl);
  }

  getRequestById(id: number) {
    return this.http.get(baseUrl + apiUrl + id);
  }

  addRequest(req: Request): Observable<Request> {
    req.status = 'Pending';
    console.log(req);
    return this.http.post<Request>(baseUrl + apiUrl + '/', req, httpOptions)
      .pipe(
        catchError(this.handleError('addRequest', req))
      );
    console.log(req);
  }

  updateRequest(id: number, req: Request): Observable<Request> {
    return this.http.put<Request>(baseUrl + apiUrl + '/' + id, req, httpOptions);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
