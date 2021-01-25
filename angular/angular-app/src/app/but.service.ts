import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { But } from './encje/but';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ButService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  findAll(): Observable<But[]> {
    return this.http.get<But[]>('http://localhost:8080/obuwie').pipe(catchError(this.handleError<But[]>()))
  }

  findModel(id: number): Observable<But> {
    return this.http.get<But>('http://localhost:8080/model?id=' + id).pipe(catchError(this.handleError<But>()))
  }

  update(but: But): Observable<But> { //put nie działał dlatego użyłem post
    return this.http.post<But>('http://localhost:8080/but', but, this.httpOptions).pipe(catchError(this.handleError<But>()))
  }

  delete(id: number): Observable<But> {
    return this.http.delete<But>('http://localhost:8080/usun?id=' + id, this.httpOptions).pipe(catchError(this.handleError<But>()))
  }

  addBut(but: But): Observable<But> {
    return this.http.post<But>('http://localhost:8080/obuwie', but, this.httpOptions).pipe(catchError(this.handleError<But>()))
  }

  private handleError<T>(operation = 'operation', result?: T) { // z tutoriala angulara
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}