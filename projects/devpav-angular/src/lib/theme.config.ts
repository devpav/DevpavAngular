export interface Theme {
  name: string;
  properties: { [id: string]: string };
}

export const light: Theme = {
  name: 'light',

  properties: {
    'ngx-devpav-default-color': '#fff',

    'ngx-devpav-primary-color': '#fff',
    'ngx-devpav-warning-color': '#fff',
    'ngx-devpav-accent-color': '#fff',

    'ngx-devpav-background': '#fff',
    'ngx-devpav-default-font-color': '#000',

    'ngx-devpav-form-input-border': '1px solid #e8e8e8'
  }
};

export const dark: Theme = {
  name: 'dark',

  properties: {
    'ngx-devpav-default-color': '#252e3a',

    'ngx-devpav-primary-color': '#fff',
    'ngx-devpav-warning-color': '#fff',
    'ngx-devpav-accent-color': '#fff',

    'ngx-devpav-background': '#1f2935',
    'ngx-devpav-default-font-color': '#ffffff'
    ,
    'ngx-devpav-form-input-border': 'none'
  }
};
