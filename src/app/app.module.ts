import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxDevpavFormInputModule, NgxDevpavSelectModule, NgxDevpavThemeModule} from 'projects/devpav-angular/src/public-api';
import {NgxDevpavChipModule} from '../../projects/devpav-angular/src/lib/ngx-devpav-chip/ngx-devpav-chip.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDevpavSelectModule,
    NgxDevpavThemeModule.forRoot(),
    NgxDevpavFormInputModule,
    NgxDevpavChipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
