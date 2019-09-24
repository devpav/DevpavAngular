import {Injectable} from '@angular/core';
import {dark, light, Theme} from '../theme.config';

@Injectable({
  providedIn: 'root'
})
export class NgxDevpavThemeService {

  private map = new Map<string, Theme>();

  constructor() {
    this.map.set(light.name, light);
    this.map.set(dark.name, dark);
  }

  registerTheme(theme: Theme) {
    if (!theme) {
      throw Error('Theme must be not undefined or null');
    }
    if (!theme.name) {
      throw Error('Theme\'s name must be not undefined or null');
    }
    if (!theme.name) {
      throw Error('Theme with the same name already exists');
    }

    this.map.set(theme.name, theme);
    return this;
  }

  unregisterTheme(nameTheme: string) {
    if (nameTheme === light.name) {
      return;
    }
    if (nameTheme === dark.name) {
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

    const functionSetPropertyCSS = (k: string) => document.documentElement.style.setProperty(`--${k}`, theme.properties[k]);

    Object.keys(theme.properties)
      .forEach(functionSetPropertyCSS);
  }

}
