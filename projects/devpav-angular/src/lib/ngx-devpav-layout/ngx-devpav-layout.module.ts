import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDevpavPaddingComponent} from './ngx-devpav-padding/ngx-devpav-padding.component';
import {NgxDevpavMarginComponent} from './ngx-devpav-margin/ngx-devpav-margin.component';
import {NgxDevpavContainerComponent} from './ngx-devpav-container/ngx-devpav-container.component';


@NgModule({
  declarations: [NgxDevpavPaddingComponent, NgxDevpavMarginComponent, NgxDevpavContainerComponent],
    exports: [
        NgxDevpavPaddingComponent,
        NgxDevpavMarginComponent,
        NgxDevpavContainerComponent
    ],
  imports: [
    CommonModule
  ]
})
export class NgxDevpavLayoutModule { }
