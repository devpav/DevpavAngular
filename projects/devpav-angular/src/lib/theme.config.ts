export interface Theme {
  id: string;
  style: ThemeStyle;
}

export interface ThemeStyle {
  'ngx-devpav-default-color': string;

  'ngx-devpav-primary-color': string;
  'ngx-devpav-warning-color': string;
  'ngx-devpav-accent-color': string;

  'ngx-devpav-background': string;
  'ngx-devpav-default-font-color': string;

  'ngx-devpav-form-input-border': string;

  'ngx-devpav-dropdown-item-font-color': string;
  'ngx-devpav-dropdown-item-background-color': string;
  'ngx-devpav-dropdown-item-icon-color-hover': string;
  'ngx-devpav-dropdown-item-icon-color': string;

  'ngx-devpav-dropdown-background-color': string;

  'ngx-devpav-dropdown-item-font-color-hover': string;
  'ngx-devpav-dropdown-item-background-color-hover': string;

  'ngx-devpav-dropdown-scrollbar-thumb-background-color': string;
  'ngx-devpav-dropdown-scrollbar-background-color': string;

  'ngx-devpav-select-panel-arrow-color': string;

}

export const light: Theme = {
  id: 'ngx-devpav-light',

  style: {
    'ngx-devpav-default-color': '#fff',

    'ngx-devpav-primary-color': '#020202',
    'ngx-devpav-warning-color': '#fff',
    'ngx-devpav-accent-color': '#fff',

    'ngx-devpav-background': '#fff',
    'ngx-devpav-default-font-color': '#000',

    'ngx-devpav-form-input-border': '1px solid #e8e8e8',

    'ngx-devpav-dropdown-item-font-color': '#383838',
    'ngx-devpav-dropdown-item-background-color': '#ffffff',
    'ngx-devpav-dropdown-item-icon-color-hover': '#959595',
    'ngx-devpav-dropdown-item-icon-color': '#fafafa',

    'ngx-devpav-dropdown-background-color': '#fff',

    'ngx-devpav-dropdown-item-font-color-hover': '#000000',
    'ngx-devpav-dropdown-item-background-color-hover': '#f9f9f9',

    'ngx-devpav-dropdown-scrollbar-thumb-background-color': '#b4b4b4',
    'ngx-devpav-dropdown-scrollbar-background-color': '#f4f4f4',

    'ngx-devpav-select-panel-arrow-color': '#000000'
  }
};

export const dark: Theme = {
  id: 'ngx-devpav-dark',

  style: {
    'ngx-devpav-default-color': '#252e3a',

    'ngx-devpav-primary-color': '#fff',
    'ngx-devpav-warning-color': '#fff',
    'ngx-devpav-accent-color': '#fff',

    'ngx-devpav-background': '#1f2935',
    'ngx-devpav-default-font-color': '#ffffff'
    ,
    'ngx-devpav-form-input-border': 'none',

    'ngx-devpav-dropdown-item-font-color': '#b3b3b3',
    'ngx-devpav-dropdown-item-background-color': '#252e3a',

    'ngx-devpav-dropdown-item-icon-color': '#1c975b',
    'ngx-devpav-dropdown-item-icon-color-hover': '#24ac4f',

    'ngx-devpav-dropdown-background-color': '#252e3a',

    'ngx-devpav-dropdown-item-font-color-hover': '#fff',
    'ngx-devpav-dropdown-item-background-color-hover': '#1f2935',

    'ngx-devpav-dropdown-scrollbar-background-color': '#252e3a',
    'ngx-devpav-dropdown-scrollbar-thumb-background-color': '#b4b4b4',

    'ngx-devpav-select-panel-arrow-color': '#ffffff'
  }
};
