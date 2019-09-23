import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDevpavIconComponent} from './ngx-devpav-icon/ngx-devpav-icon.component';
import {NgxDevpavIconService} from './ngx-devpav-icon.service';

@NgModule({
  declarations: [NgxDevpavIconComponent],
  exports: [
    NgxDevpavIconComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NgxDevpavIconModule {

  constructor(private ngxDevpavIconService: NgxDevpavIconService) {
    this.ngxDevpavIconService.setIcon('arrow-up',
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">' +
      '<path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/>' +
      '</svg>'
    );
    this.ngxDevpavIconService.setIcon('arrow-down',
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">' +
      '<path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/>' +
      '</svg>'
    );
    console.log(ngxDevpavIconService.getIcons());
  }

}
