import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxDevpavSelectModule} from '../../projects/devpav-angular/src/lib/ngx-devpav-select/ngx-devpav-select.module';
import {NgxDevpavThemeModule} from '../../projects/devpav-angular/src/lib/ngx-devpav-theme/ngx-devpav-theme.module';
import {NgxDevpavFormInputModule} from '../../projects/devpav-angular/src/lib/ngx-devpav-form-input/ngx-devpav-form-input.module';

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
