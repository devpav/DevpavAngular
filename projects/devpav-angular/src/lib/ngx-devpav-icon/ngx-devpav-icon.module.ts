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
    this.ngxDevpavIconService.setIcon('done',
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">' +
      '<path fill="none" d="M0 0h24v24H0z"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>' +
      '</svg>'
    );
    this.ngxDevpavIconService.setIcon('remove',
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">' +
      '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>' +
      '<path d="M0 0h24v24H0z" fill="none"/>' +
      '</svg>'
    );
    this.ngxDevpavIconService.setIcon('idea',
      '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">' +
      '<g><rect fill="none" height="24" width="24" x="0"/>' +
      '<path d="M17,8H7c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V10C19,8.9,18.1,8,17,8z M13,20.5h-2V19h2V20.5z M13,18h-2 c0-1.5-2.5-3-2.5-5c0-1.93,1.57-3.5,3.5-3.5c1.93,0,3.5,1.57,3.5,3.5C15.5,15,13,16.5,13,18z M18,6.5H6v0C6,5.67,6.67,5,7.5,5h9 C17.33,5,18,5.67,18,6.5L18,6.5z M17,3.5H7v0C7,2.67,7.67,2,8.5,2h7C16.33,2,17,2.67,17,3.5L17,3.5z"/></g></svg>'
    );
    this.ngxDevpavIconService.setIcon('event', '' +
      '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>');
  }

}
