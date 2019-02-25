import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';

import { Occurrence } from './occurrence';

@Injectable({ providedIn: 'root' })
export class MapService {

  private url: string = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getOccurrences(): Observable<Occurrence[]> {

    return this.http.get<Occurrence[]>(this.url+"/occurrences")
      .pipe(
        catchError(this.handleError('getOccurrences', []))
      );
  }

  getAddress(address:string) {
    return this.http.get<any[]>('https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key=AIzaSyDSURwYZ2U5-APuW0HOcoBO0bYGN--fcks')
                .pipe(catchError(this.handleError('getAddress', [])));
}


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error("MEU SACO "+error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
