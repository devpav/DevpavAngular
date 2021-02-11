import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDevpavPanelComponent} from './ngx-devpav-panel/ngx-devpav-panel.component';
import {NgxDevpavPanelHeaderComponent} from './ngx-devpav-panel-header/ngx-devpav-panel-header.component';
import {NgxDevpavLayoutModule} from '../ngx-devpav-layout/ngx-devpav-layout.module';
import {NgxDevpavPanelContentComponent} from './ngx-devpav-panel-content/ngx-devpav-panel-content.component';
import {NgxDevpavPanelSectionComponent} from './ngx-devpav-panel-section/ngx-devpav-panel-section.component';
import {NgxDevpavPanelFooterComponent} from './ngx-devpav-panel-footer/ngx-devpav-panel-footer.component';
import { NgxParagraphPanelComponent } from './paragraph-panel/ngx-paragraph-panel.component';


@NgModule({
  declarations: [NgxDevpavPanelComponent, NgxDevpavPanelHeaderComponent, NgxDevpavPanelContentComponent, NgxDevpavPanelSectionComponent, NgxDevpavPanelFooterComponent, NgxParagraphPanelComponent],
  exports: [
    NgxDevpavPanelComponent,
    NgxDevpavPanelHeaderComponent,
    NgxDevpavPanelSectionComponent,
    NgxDevpavPanelContentComponent,
    NgxDevpavPanelFooterComponent,
    NgxParagraphPanelComponent
  ],
  imports: [
    CommonModule,
    NgxDevpavLayoutModule
  ]
})
export class NgxDevpavPanelModule { }
