import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Theme} from '../theme.config';
import {DevpavAngularThemeService} from '../devpav-angular.service';

const themeFactory = (themes: Theme[] = []): DevpavAngularThemeService => {
  const devpavAngularThemeService = new DevpavAngularThemeService();

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
    return {
      ngModule: NgxDevpavThemeModule,
      providers: [
        {
          provide: DevpavAngularThemeService,
          useFactory: themeFactory
        }
      ]
    };
  }
}
