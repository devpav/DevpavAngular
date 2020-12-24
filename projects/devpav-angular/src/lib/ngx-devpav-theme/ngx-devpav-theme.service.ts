import {Injectable} from '@angular/core';
import {dark, light, NgxStyleElement, Theme} from '../theme.config';

@Injectable({
  providedIn: 'root'
})
export class NgxDevpavThemeService {

  private map = new Map<string, Theme>();

  constructor() {
    this.map.set(light.id, light);
    this.map.set(dark.id, dark);
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

    this.map.set(theme.id, theme);

    return this;
  }

  unregister(nameTheme: string) {
    if (nameTheme === light.id) {
      return;
    }
    if (nameTheme === dark.id) {
      return;
    }

    this.map.delete(nameTheme);
  }

  getList(): Theme[] {
    const themes: Theme[] = Array.from(this.map.values());
    return themes.map(theme => ({...theme}));
  }

  applyTheme(theme: Theme) {
    const themeRegister = this.map.get(theme.id);

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
