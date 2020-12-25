import {Component} from '@angular/core';
import {NgxDevpavThemeService} from '../../projects/devpav-angular/src/lib/ngx-devpav-theme/ngx-devpav-theme.service';
import {dark, light} from 'projects/devpav-angular/src/lib/theme.config';
import {NgxDevpavIconService} from '../../projects/devpav-angular/src/lib/ngx-devpav-icon/ngx-devpav-icon.service';

@Component({
  selector: 'devpav-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  debounce = 1000;

  inputParagraph = {
    name: 'Inputs',
    description: '' +
      '<ngx-devpav-form-input ph="Text" (inputValue)="valueInput($event)" [debounce]="1000"></ngx-devpav-form-input>' +
      '<ngx-devpav-form-input ph="Number" type="number" [debounce]="debounce"></ngx-devpav-form-input>' +
      '<ngx-devpav-form-input ph="Datetime" type="date" [debounce]="debounce"></ngx-devpav-form-input>'
  };

  avatarParagraph = {
    name: 'Image Avatar',
    description: '' +
      '<ngx-devpav-avatar [ngxSize]="180" ngxSrc="..."></ngx-devpav-avatar>' +
      '<ngx-devpav-avatar [ngxSize]="140" ngxSrc="..."></ngx-devpav-avatar>' +
      '<ngx-devpav-avatar [ngxSize]="100" ngxSrc="..."></ngx-devpav-avatar>' +
      '<ngx-devpav-avatar [ngxSize]="60" ngxSrc="..."></ngx-devpav-avatar>' +
      ''
  };

  panelSectionParagraph = {
    name: 'Section panel',
    description: '<ngx-devpav-panel-section>\n' +
      '          <ngx-devpav-panel-header>\n' +
      '            <div style="width: 100%; height: 100px;">Header</div>\n' +
      '          </ngx-devpav-panel-header>\n' +
      '          <ngx-devpav-panel-content>\n' +
      '            <div style="width: 100%; height: 100px;">Content</div>\n' +
      '          </ngx-devpav-panel-content>\n' +
      '          <ngx-devpav-panel-footer>\n' +
      '            <div style="width: 100%; height: 100px;">Footer</div>\n' +
      '          </ngx-devpav-panel-footer>\n' +
      '        </ngx-devpav-panel-section>'
  };

  emptyPanelParagraph = {
    name: 'Empty panel',
    description: '<ngx-devpav-panel>\n' +
      '        <div style="width: 100%; height: 100px;"></div>\n' +
      '      </ngx-devpav-panel>'
  };

  iconParagraph = {
    name: 'Icons',
    description: '<ngx-devpav-icon name="idea"></ngx-devpav-icon>'
  };

  buttonParagraph = {
    name: 'Buttons',
    description: '          <ngx-devpav-button ngxColor="DEFAULT" title="Default button"></ngx-devpav-button>\n' +
      '          <ngx-devpav-button ngxColor="WARNING" title="Warning button"></ngx-devpav-button>\n' +
      '          <ngx-devpav-button ngxColor="PRIMARY" title="Primary button"></ngx-devpav-button>\n' +
      '          <ngx-devpav-button ngxColor="ACCENT" title="Accent button"></ngx-devpav-button>'
  };

  defaultChipsParagraph = {
    name: 'Default Chips',
    description: '<ngx-devpav-chip value="Default chip"></ngx-devpav-chip>'
  };

  closeableChipsParagraph = {
    name: 'Closeable Chips',
    description: '<ngx-devpav-chip value="Default chip" closeable="true"></ngx-devpav-chip>'
  };

  constructor(private themeService: NgxDevpavThemeService, private ngxDevpavIconService: NgxDevpavIconService) {
    this.themeService.applyTheme(light);
    this.ngxDevpavIconService.setIcon('calendar', '' +
      '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">' +
      '<path d="M0 0h24v24H0z" fill="none"/>' +
      '<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 ' +
      '2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>' +
      '<path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>' +
      '');
  }

  setLight() {
    this.themeService.applyTheme(light);
  }

  setDark() {
    this.themeService.applyTheme(dark);
  }

  valueInput($event: string) {
    this.title = $event;
  }

  valueDebounce($event: string) {
    this.debounce = +$event;
  }
}
