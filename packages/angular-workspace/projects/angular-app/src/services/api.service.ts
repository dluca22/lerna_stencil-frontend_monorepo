import { Injectable, isDevMode } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// import { ConfigService } from './config.service';
import { AllowedEndpoint, ConfigService } from './config.service';

// const headers = new HttpHeaders({
//   'Content-Type':'application/json; charset=utf-8',
//   'Authorization': 'WUT test-token'
// });

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json; charset=utf-8',
//     'Authorization': 'WUT test-token'
//   })
// }

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  get $config () {
    return this.configService.config;
  }

  get apiUrl(){
    return [this.$config.api.baseUrl, this.$config.api.version].join('/');
  }

  $headers = new HttpHeaders({
    'Content-Type':'application/json; charset=utf-8',
  });
  $options;

  constructor(
    private configService: ConfigService,
    private http: HttpClient,
  ) {
    console.log('@@@ API SERVICE CONSTRUCTOR @@@')
    // if (this.$config['token']){
    //   this.$headers = this.$headers.set('Authorization', 'WUT ' + this.$config['token']);
    // }
    this.$options = {
      headers: this.$headers
    }
  }

  private formatErrors(error: any) {
    if(isDevMode()){
      console.log("error in http call", error)
    }
    return throwError(() => new Error(error.error));
  }

  get(path: AllowedEndpoint, queryString:string = '',  options?: any, params: HttpParams = new HttpParams()): Observable<any> { 
    
    return this.http.get([this.apiUrl, path].join('/') + queryString, options || { headers: this.$options.headers })
      .pipe(catchError(this.formatErrors));
  }

}