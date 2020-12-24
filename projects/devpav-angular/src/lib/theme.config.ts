import {chipDark, chipLight} from './ngx-devpav-chip/ngx-devpav-chip/_theme-chip';
import {iconDark, iconLight} from './ngx-devpav-icon/ngx-devpav-icon/_theme-icon';
import {defaultInputLight} from './ngx-devpav-form-input/ngx-devpav-form-input/_theme-input';

export interface Theme {
  id: string;
  html: NgxStyleElement;
  input: NgxStyleElement;
  panel: NgxStyleElement;
  chips: NgxStyleElement[];
  icons: NgxStyleElement[];
  buttons: NgxButtonStyle[];
}

export interface NgxStyleProperties {
  [key: string]: string;
}

export interface NgxStyleElement {
  id: string;
  styles: NgxStyleProperties;
}

// BUTTONS
export interface NgxButtonStyle extends NgxStyleElement {
  id: ButtonType;
  styles: NgxStyleProperties;
}

export type ButtonType = 'DEFAULT' | 'WARNING' | 'PRIMARY' | 'ACCENT';

// LIGHT BUTTON
export const defaultButton: NgxButtonStyle = {
  id: 'DEFAULT',
  styles: {
    'default-ngx-devpav-button-color': 'rgb(0,0,0)',
    'default-ngx-devpav-button-background': '#ffffff',
    'default-ngx-devpav-button-color-hover': 'rgba(0,0,0,0.91)',
    'default-ngx-devpav-button-background-hover': '#fcfbfb',
    'default-ngx-devpav-button-border-color': 'rgba(9,9,9,0.09)'
  }
} as NgxButtonStyle;

export const warningButton: NgxButtonStyle = {
  id: 'WARNING',
  styles: {
    'warning-ngx-devpav-button-color': 'rgb(255,255,255)',
    'warning-ngx-devpav-button-background': '#de5959',
    'warning-ngx-devpav-button-color-hover': '#ffffff',
    'warning-ngx-devpav-button-background-hover': '#b15252',
    'warning-ngx-devpav-button-border-color': 'rgba(236,236,236,0.09)'
  }
} as NgxButtonStyle;

export const primaryButton: NgxButtonStyle = {
  id: 'PRIMARY',
  styles: {
    'primary-ngx-devpav-button-color': 'rgb(255,255,255)',
    'primary-ngx-devpav-button-background': '#5282ff',
    'primary-ngx-devpav-button-color-hover': '#ffffff',
    'primary-ngx-devpav-button-background-hover': '#525bff',
    'primary-ngx-devpav-button-border-color': 'rgba(236,236,236,0.12)'
  }
} as NgxButtonStyle;

export const accentButton: NgxButtonStyle = {
  id: 'ACCENT',
  styles: {
    'accent-ngx-devpav-button-color': 'rgb(255,255,255)',
    'accent-ngx-devpav-button-background': '#d5a139',
    'accent-ngx-devpav-button-color-hover': '#ffffff',
    'accent-ngx-devpav-button-background-hover': '#bb8910',
    'accent-ngx-devpav-button-border-color': 'rgba(236,236,236,0.09)'
  }
} as NgxButtonStyle;

export const htmlLight: NgxStyleElement = {
  id: 'html',
  styles: {
    'ngx-devpav-body-background': '#ffffff',
    'ngx-devpav-font-color': '#000000',
  }
};

export const panelLight: NgxStyleElement = {
  id: 'html',
  styles: {
    'ngx-devpav-panel-background': '#ffffff',
    'ngx-devpav-panel-shadow': '0 4px 24px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.04)',
    'ngx-devpav-panel-border': 'none'
  }
};



export const light: Theme = {
  id: 'ngx-devpav-light',
  html: htmlLight,
  panel: panelLight,
  input: defaultInputLight,
  chips: [
    chipLight
  ],
  icons: [
    iconLight
  ],
  buttons: [
    defaultButton,
    warningButton,
    primaryButton,
    accentButton
  ]
};


export const htmlDark: NgxStyleElement = {
  id: 'html',
  styles: {
    'ngx-devpav-body-background': '#1a1a2e',
    'ngx-devpav-font-color': 'rgba(255,255,255,0.85)',
  }
};

export const defaultButtonDark: NgxButtonStyle = {
  id: 'DEFAULT',
  styles: {
    'default-ngx-devpav-button-color': 'rgba(205,203,203,0.67)',
    'default-ngx-devpav-button-background': '#242442',
    'default-ngx-devpav-button-color-hover': 'rgba(146,65,65,0.91)',
    'default-ngx-devpav-button-background-hover': '#3e3737',
    'default-ngx-devpav-button-border-color': 'rgba(189,189,189,0.09)'
  }
} as NgxButtonStyle;


export const panelDark: NgxStyleElement = {
  id: 'panel',
  styles: {
    'ngx-devpav-panel-background': '#16213e',
    'ngx-devpav-panel-shadow': '0 4px 24px #00000024, 0 2px 8px #00000024',
    'ngx-devpav-panel-border': 'none'
  }
};



export const dark: Theme = {
  id: 'ngx-devpav-dark',
  panel: panelDark,
  html: htmlDark,
  input: defaultInputLight,
  icons: [
    iconDark
  ],
  chips: [
    chipDark
  ],
  buttons: [
    defaultButtonDark
  ]
};
