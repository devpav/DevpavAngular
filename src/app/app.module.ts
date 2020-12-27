import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxDevpavFormInputModule, NgxDevpavSelectModule, NgxDevpavThemeModule} from 'projects/devpav-angular/src/public-api';
import {NgxDevpavChipModule} from '../../projects/devpav-angular/src/lib/ngx-devpav-chip/ngx-devpav-chip.module';
import {NgxDevpavPanelModule} from '../../projects/devpav-angular/src/lib/ngx-devpav-panel/ngx-devpav-panel.module';
import {NgxDevpavLayoutModule} from '../../projects/devpav-angular/src/lib/ngx-devpav-layout/ngx-devpav-layout.module';
import {NgxDevpavButtonModule} from '../../projects/devpav-angular/src/lib/ngx-devpav-button/ngx-devpav-button.module';
import {FlexNoWrapContainerComponent} from './flex-no-wrap-container/flex-no-wrap-container.component';
import {ButtonPanelComponent} from './button-panel/button-panel.component';
import {ParagraphComponent} from './paragraph/paragraph.component';
import {NgxDevpavIconModule} from '../../projects/devpav-angular/src/lib/ngx-devpav-icon/ngx-devpav-icon.module';
import {XmlPipePipe} from './xml-pipe.pipe';
import {LibDescriptionComponent} from './lib-description/lib-description.component';
import {NgxDevpavAvatarModule} from '../../projects/devpav-angular/src/lib/ngx-devpav-avatar/ngx-devpav-avatar.module';
import {FlexLineComponent} from './flex-line/flex-line.component';
import {NgxDevpavFlopPanelModule} from '../../projects/devpav-angular/src/lib/ngx-devpav-flop-panel/ngx-devpav-flop-panel.module';
import {SchedulePageComponent} from './pages/schedule-page/schedule-page.component';
import {RouterModule} from '@angular/router';
import {NgxDevpavScheduleModule} from '../../projects/devpav-angular/src/lib/ngx-devpav-schedule/ngx-devpav-schedule.module';
import {NgxDevpavCalendarModule} from '../../projects/devpav-angular/src/lib/ngx-devpav-calendar/ngx-devpav-calendar.module';
import {SelectorPageComponent} from './pages/selector-page/selector-page.component';
import {NgxDevpavSelectorModule} from '../../projects/devpav-angular/src/lib/ngx-devpav-selector/ngx-devpav-selector.module';
import {NgxDevpavListModule} from '../../projects/devpav-angular/src/lib/ngx-devpav-list/ngx-devpav-list.module';

@NgModule({
  declarations: [
    AppComponent,
    FlexNoWrapContainerComponent,
    ButtonPanelComponent,
    ParagraphComponent,
    XmlPipePipe,
    LibDescriptionComponent,
    FlexLineComponent,
    SchedulePageComponent,
    SelectorPageComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: 'schedules',
                component: SchedulePageComponent
            },
            {
                path: 'selectors',
                component: SelectorPageComponent
            },
            {
                path: '**',
                redirectTo: 'selectors'
            }
        ]),
        AppRoutingModule,
        NgxDevpavSelectModule,
        NgxDevpavThemeModule,
        NgxDevpavFormInputModule,
        NgxDevpavChipModule,
        NgxDevpavPanelModule,
        NgxDevpavLayoutModule,
        NgxDevpavButtonModule,
        NgxDevpavIconModule,
        NgxDevpavAvatarModule,
        NgxDevpavFlopPanelModule,
        NgxDevpavScheduleModule,
        NgxDevpavCalendarModule,
        NgxDevpavSelectorModule,
        NgxDevpavListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
