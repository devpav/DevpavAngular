import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  NgxDevpavFormInputModule,
  NgxDevpavSelectModule,
  NgxDevpavThemeModule
} from 'projects/devpav-angular/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDevpavSelectModule,
    NgxDevpavThemeModule.forRoot(),
    NgxDevpavFormInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
