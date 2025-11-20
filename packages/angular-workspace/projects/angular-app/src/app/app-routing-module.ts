import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  //   path: '',
  //   loadComponent: () => import('./components/home/home-page').then(m => m.HomePage)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideHttpClient(),
  ]
})
export class AppRoutingModule { }
