import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { ComponentLibraryModule } from 'component-library';
import { CustomComponentsShowcase } from './custom-components-showcase/custom-components-showcase';
import { Rockets } from './rockets/rockets';
import { provideRouter } from '@angular/router';
// import { RoadsterDetails } from './roadster-details/roadster-details';
@NgModule({
  declarations: [
    App,
    CustomComponentsShowcase,
    Rockets,
    // RoadsterDetails
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentLibraryModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App],
  exports: [
    CustomComponentsShowcase,
    Rockets,
    // RoadsterDetails
  ]
})
export class AppModule { }
