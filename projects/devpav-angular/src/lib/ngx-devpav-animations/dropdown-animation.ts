import {animate, state, style, transition, trigger} from '@angular/animations';

export function dropdownAnimation(seconds: number, overflow: number = 0) {
  return trigger('triggerDropdown', [
    state('close', style({
      overflow: 'hidden',
      opacity: overflow,
      height: '0px'
    })),
    state('open', style({
      overflow: 'inherit',
      opacity: 1,
      height: '*'
    })),
    transition('close <=> open', animate(`${seconds}s ease-in-out`))
  ]);
}

export function dropdownSelectorAnimation(seconds: number, overflow: number = 0) {
  return trigger('triggerDropdown', [
    state('close', style({
      opacity: overflow,
      height: '0px',
      overflowY: 'hidden'
    })),
    state('open', style({
      opacity: 1,
      height: 'fit-content',
      overflowY: 'scroll !important'
    })),
    transition('close <=> open', animate(`${seconds}s ease-in-out`))
  ]);
}
