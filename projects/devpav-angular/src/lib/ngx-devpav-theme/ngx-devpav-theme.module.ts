import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDevpavThemeService} from './ngx-devpav-theme.service';
import {Theme} from '../theme.config';

export interface NgxThemeOptions {
  themes: Theme[];
  active: Theme;
}

const ngxThemeFactory = (ngxThemeOption: NgxThemeOptions): NgxDevpavThemeService => {
  const ngxDevpavThemeService = new NgxDevpavThemeService();

  if (ngxThemeOption.themes) {
    ngxThemeOption.themes.forEach(ngxDevpavThemeService.register);
  }

  ngxDevpavThemeService.applyTheme(ngxThemeOption.active);

  return (ngxDevpavThemeService);
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    NgxDevpavThemeService
  ]
})
export class NgxDevpavThemeModule {

  static forRoot(options: NgxThemeOptions): ModuleWithProviders {
    return {
      ngModule: NgxDevpavThemeModule,
      providers: [
        {
          provide: NgxDevpavThemeService,
          useFactory: ngxThemeFactory
        }
      ]
    };
  }

}
