import {Injectable} from '@angular/core';
import {dark, light, NgxStyleElement, Theme} from '../theme.config';

@Injectable({
  providedIn: 'root'
})
export class NgxDevpavThemeService {

  private themeStore: { [key: string]: Theme } = {};

  constructor() {
    this.themeStore[light.id] = light;
    this.themeStore[dark.id] = dark;
  }

  private functionSetPropertyCSS = (styleElement: NgxStyleElement) => {
    Object.keys(styleElement.styles).forEach(key => {
      document.documentElement.style.setProperty(`--${key}`, styleElement.styles[key]);
    });
  }

  register(theme: Theme) {
    if (!theme) {
      throw Error('Theme must be not undefined or null');
    }
    if (!theme.id) {
      throw Error('Theme\'s name must be not undefined or null');
    }

    this.themeStore[theme.id] = theme;

    return this;
  }

  unregister(nameTheme: string) {
    if (nameTheme === light.id) {
      return;
    }
    if (nameTheme === dark.id) {
      return;
    }

    delete this.themeStore[nameTheme];
  }

  getList(): Theme[] {
    const values = Object.keys(this.themeStore).map(it => this.themeStore[it]);
    const themes: Theme[] = Array.from(values);
    return themes.map(theme => ({...theme}));
  }

  applyTheme(theme: Theme) {
    const themeRegister = this.themeStore[theme.id];

    if (!themeRegister) {
      throw new Error('Theme with id ' + theme.id + ' not found');
    }

    const ngxStyleElements: NgxStyleElement[] = [];

    Object.keys(theme).filter(key => key !== 'id')
      .map(key => theme[key])
      .forEach(value => {
        ngxStyleElements.push(value);
      });

    ngxStyleElements.forEach(element => {
      if (Array.isArray(element)) {
        element.forEach(it => this.functionSetPropertyCSS(it));
      } else {
        this.functionSetPropertyCSS(element);
      }
    });
  }

}
