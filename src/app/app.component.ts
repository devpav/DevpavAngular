import {Component} from '@angular/core';
import {NgxDevpavThemeService} from '../../projects/devpav-angular/src/lib/ngx-devpav-theme/ngx-devpav-theme.service';
import {dark, light} from 'projects/devpav-angular/src/lib/theme.config';

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

  constructor(private themeService: NgxDevpavThemeService) {
    this.themeService.applyTheme(light);
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
