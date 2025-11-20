import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, forkJoin } from 'rxjs';
// import { isArray } from '../tools/utils';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  tz: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
  public ready = false;
  mainInitCalls: Observable<any>[] = [];


  constructor(
    public apiService: ApiService = inject(ApiService)
  ) {
    console.log('@@@ API SERVICE INJECTED @@@');
  }

  // get configuration() {
  //   return this._configuration;
  // }

  load(): void {
    console.log('--- MAIN INIT CALL FOR CONFIG ---');
    this.mainInitCalls = [
      // this.getConfiguration().pipe(catchError((error) => of(error))),
    ];

    forkJoin(this.mainInitCalls).subscribe({
      next: (results) => {
        this.ready = true;
      },
      error: (err) => {
        this.ready = false;
      },
    });
  }

  // INIT
  initDataService() {
    this.ready = true;
  }

  // public createQueryString(params: any = {}): string {
  //   let queryString = Object.keys(params)
  //     .map((key) => {
  //       if (isArray(params[key])) {
  //         return params[key].map((param) => `${key}[]=${param}`).join('&');
  //       } else {
  //         return key + '=' + params[key];
  //       }
  //     })
  //     .join('&');

  //   if (queryString.length) {
  //     queryString = '?' + queryString;
  //   }

  //   return queryString;
  // }

  public getCapsules(): Observable<any> {
    return this.apiService.get('capsules');
  }

  public getCompany(): Observable<any> {
    return this.apiService.get('company');
  }

  public getCores(): Observable<any> {
    return this.apiService.get('cores');
  }

  public getCrew(): Observable<any> {
    return this.apiService.get('crew');
  }

  public getDragons(): Observable<any> {
    return this.apiService.get('dragons');
  }

  public getHistory(): Observable<any> {
    return this.apiService.get('history');
  }

  public getLandpads(): Observable<any> {
    return this.apiService.get('landpads');
  }

  public getLaunches(): Observable<any> {
    return this.apiService.get('launches');
  }

  public getLaunchpads(): Observable<any> {
    return this.apiService.get('launchpads');
  }

  public getPayloads(): Observable<any> {
    return this.apiService.get('payloads');
  }

  public getRoadster(): Observable<any> {
    return this.apiService.get('roadster');
  }

  public getRockets(): Observable<any> {
    return this.apiService.get('rockets');
  }

  public getShips(): Observable<any> {
    return this.apiService.get('ships');
  }

  public getStarlink(): Observable<any> {
    return this.apiService.get('starlink');
  }

}