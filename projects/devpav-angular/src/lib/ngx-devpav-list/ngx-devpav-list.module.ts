import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDevpavListComponent} from './ngx-devpav-list/ngx-devpav-list.component';
import {NgxDevpavLayoutModule} from '../ngx-devpav-layout/ngx-devpav-layout.module';
import {NgxDevpavListOptionComponent} from './ngx-devpav-list-option/ngx-devpav-list-option.component';
import {NgxDevpavIconModule} from '../ngx-devpav-icon/ngx-devpav-icon.module';
import {NgxDevpavLoaderModule} from '../ngx-devpav-loader/ngx-devpav-loader.module';
import {NgxDevpavIconListComponent} from './ngx-devpav-icon-list/ngx-devpav-icon-list.component';
import {NgxDevpavIconListOptionComponent} from './ngx-devpav-icon-list-option/ngx-devpav-icon-list-option.component';
import {NgxDevpavAvatarModule} from '../ngx-devpav-avatar/ngx-devpav-avatar.module';


@NgModule({
  declarations: [NgxDevpavListComponent, NgxDevpavListOptionComponent, NgxDevpavIconListComponent, NgxDevpavIconListOptionComponent],
  exports: [
    NgxDevpavListComponent,
    NgxDevpavIconListComponent,
    NgxDevpavIconListOptionComponent
  ],
    imports: [
        CommonModule,
        NgxDevpavLayoutModule,
        NgxDevpavIconModule,
        NgxDevpavLoaderModule,
        NgxDevpavAvatarModule
    ]
})
export class NgxDevpavListModule { }
