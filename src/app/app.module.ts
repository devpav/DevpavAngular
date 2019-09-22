import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxDevpavSelectModule} from '../../projects/devpav-angular/src/lib/ngx-devpav-select/ngx-devpav-select.module';
import {NgxDevpavThemeModule} from '../../projects/devpav-angular/src/lib/ngx-devpav-theme/ngx-devpav-theme.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDevpavSelectModule,
    NgxDevpavThemeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
