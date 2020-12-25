import {animate, state, style, transition, trigger} from '@angular/animations';

export const dropdownAnimation = (seconds: number) => trigger('triggerDropdown', [
  state('close', style({
    overflow: 'hidden',
    opacity: 0,
    height: '0px'
  })),
  state('open', style({
    overflow: 'inherit',
    opacity: 1,
    height: '*'
  })),
  transition('close <=> open', animate(`${seconds}s ease-in-out`))
]);
