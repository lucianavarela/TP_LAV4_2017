import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class MiHttpService {
  public api: string = "http://gametimeback.herokuapp.com/";
  status: number;

  constructor(public http: HttpClient) { }

  public httpGetP(url: string) {
    return this.http
      .get(url, httpOptions)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public httpPostP(url: string, objeto: any) {
    return this.http.post(url, objeto, httpOptions);
  }

  public httpGetO(url: string): Observable<Response> {
    return this.http.get(url, httpOptions)
      .map((res: Response) => res)
      .catch((err: any) => throwError(err));
  }

  private extractData(res: Response) {
    return res.json() || {};
  }

  private handleError(error: Response | any) {
    return error;
  }

  public updateTokenHeaders(token: string) {
    if (token == '') {
      httpOptions.headers = httpOptions.headers.delete('Authorization');
    } else {
      httpOptions.headers = httpOptions.headers.append('Authorization', token);
    }
  }
}
