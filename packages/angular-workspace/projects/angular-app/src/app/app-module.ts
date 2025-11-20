import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { ComponentLibraryModule } from 'component-library';
import { CustomComponentsShowcase } from './custom-components-showcase/custom-components-showcase';
import { Rockets } from './rockets/rockets';
@NgModule({
  declarations: [
    App,
    CustomComponentsShowcase,
    Rockets
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
    Rockets
  ]
})
export class AppModule { }
