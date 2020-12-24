import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDevpavButtonComponent} from './ngx-devpav-button/ngx-devpav-button.component';


@NgModule({
    declarations: [NgxDevpavButtonComponent],
    exports: [
        NgxDevpavButtonComponent
    ],
    imports: [
        CommonModule
    ]
})
export class NgxDevpavButtonModule { }
