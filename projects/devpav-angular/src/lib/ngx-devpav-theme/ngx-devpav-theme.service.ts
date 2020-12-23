import {Injectable} from '@angular/core';
import {dark, light, Theme} from '../theme.config';

@Injectable({
  providedIn: 'root'
})
export class NgxDevpavThemeService {

  private map = new Map<string, Theme>();

  constructor() {
    this.map.set(light.id, light);
    this.map.set(dark.id, dark);
  }


  registerTheme(theme: Theme) {
    if (!theme) {
      throw Error('Theme must be not undefined or null');
    }
    if (!theme.id) {
      throw Error('Theme\'s name must be not undefined or null');
    }

    this.map.set(theme.id, theme);

    return this;
  }

  unregisterTheme(nameTheme: string) {
    if (nameTheme === light.id) {
      return;
    }
    if (nameTheme === dark.id) {
      return;
    }

    this.map.delete(nameTheme);
  }

  getListTheme(): Theme[] {
    const themes: Theme[] = Array.from(this.map.values());
    return themes.map(theme => ({...theme}));
  }

  getCloneTheme(nameTheme: string) {
    return { ... this.map.get(nameTheme) };
  }

  setTheme(nameTheme: string) {
    const theme = this.map.get(nameTheme);

    if (!theme) {
      return;
    }

    const functionSetPropertyCSS = (k: string) => document.documentElement.style.setProperty(`--${k}`, theme.style[k]);

    Object.keys(theme.style)
      .forEach(functionSetPropertyCSS);
  }

}
