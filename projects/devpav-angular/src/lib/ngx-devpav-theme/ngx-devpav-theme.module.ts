import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Theme} from '../theme.config';
import {NgxDevpavThemeService} from './ngx-devpav-theme.service';

const themeFactory = (themes: Theme[] = []) => (): NgxDevpavThemeService => {
  const devpavAngularThemeService = new NgxDevpavThemeService();

  if (themes) {
    themes.forEach(devpavAngularThemeService.registerTheme);
  }

  return (devpavAngularThemeService);
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class NgxDevpavThemeModule {

  static forRoot(themes?: Theme[]): ModuleWithProviders {
    const functionFactory = themeFactory(themes);

    return {
      ngModule: NgxDevpavThemeModule,
      providers: [
        {
          provide: NgxDevpavThemeService,
          useFactory: functionFactory
        }
      ]
    };
  }


}
