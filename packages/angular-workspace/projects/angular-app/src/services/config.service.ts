import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

export const ALLOWED_ENDPOINTS = [
  'capsules',
  'company',
  'cores',
  'crew',
  'dragons',
  'history',
  'landpads',
  'launches',
  'launchpads',
  'payloads',
  'roadster',
  'rockets',
  'ships',
  'starlink'
] as const;

export type AllowedEndpoint = typeof ALLOWED_ENDPOINTS[number]; // transform to union

export interface IConfiguration {
  api: {
    baseUrl: string;
    version: string;
    // availableEndpoints: string[]
  }
}

@Injectable({providedIn: 'root'})
export class ConfigService {
  private http = inject(HttpClient);
  
  config: IConfiguration = {
    api: { // quick defiinition based on snooping aronund docs
      baseUrl: 'https://api.spacexdata.com',
      version: 'v4' // or latest so it handles by default to newest...
    }
  };
}
