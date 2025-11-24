import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { App } from './app';
import { Rockets } from './rockets/rockets';

const routes: Routes = [
  // {
  //   path: '',
  //   component: App,
  // },
  {
    path: 'rockets',
    component: Rockets,
  },
  // {
  //   path: "capsules",
  //   component: Capsules
  // },
  // {
  //   path: "company",
  //   component: Company
  // },
  // {
  //   path: "cores",
  //   component: Cores
  // },
  // {
  //   path: "crew",
  //   component: Crew
  // },
  // {
  //   path: "dragons",
  //   component: Dragons
  // },
  // {
  //   path: "history",
  //   component: FlightHistory
  // },
  // {
  //   path: "landpads",
  //   component: Landpads
  // },
  // {
  //   path: "launches",
  //   component: Launches
  // },
  // {
  //   path: "launchpads",
  //   component: Launchpads
  // },
  // {
  //   path: "payloads",
  //   component: Payloads
  // },
  // {
  //   path: "roadster",
  //   component: Roadster
  // },
  // {
  //   path: "ships",
  //   component: Ships
  // },
  // {
  //   path: "starlink",
  //   component: Starlink
  // },
  // {
  //   path: '',
  //   loadComponent: () => import('./components/home/home-page').then(m => m.HomePage)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
})
export class AppRoutingModule { }
