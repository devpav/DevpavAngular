import {Injectable} from '@angular/core';

export interface NgxDevpavIcon {
  width: number;
  height: number;
  fill: string;
}

export interface NgxDevpavIconSvg extends NgxDevpavIcon {
  svg: string;
}

@Injectable({
  providedIn: 'root'
})
export class NgxDevpavIconService {

  private icons = new Map<string, string>();

  constructor() {
  }

  getIcons(): string[] {
    return Array.from(this.icons.keys());
  }

  getIcon(name: string, ngxDevpavIcon: NgxDevpavIcon): string {
    return this.transformSvgIcon(this.icons.get(name), ngxDevpavIcon);
  }

  setIcon(name: string, svg: string): void {
    this.icons.set(name, svg);
  }

  private transformSvgIcon(svg: string, ngxDevpavIcon: NgxDevpavIcon) {
    if (svg) {
      let svgClone = svg + '';
      if (ngxDevpavIcon.width) {
        svgClone = svgClone.replace('width="24"', `width="${ngxDevpavIcon.width}"`);
      }
      if (ngxDevpavIcon.height) {
        svgClone = svgClone.replace('height="24"', `height="${ngxDevpavIcon.height}"`);
      }
      return svgClone;
    }
    return svg;
  }

}
