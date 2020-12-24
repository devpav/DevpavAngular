import {animate, state, style, transition, trigger} from '@angular/animations';

export const dropdownAnimation = trigger('triggerDropdown', [
  state('close', style({
    overflow: 'hidden',
    opacity: 0.5,
    height: '0px'
  })),
  state('open', style({
    overflow: 'inherit',
    opacity: 1,
    height: '*'
  })),
  transition('close <=> open', animate('0.5s ease-out'))
]);
