import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchLine: string, fieldSearch: string): any {
    if (!searchLine || !searchLine.length) {
      return value;
    }
    const filterNotUndefinedFunction = it => !!it[fieldSearch];
    const filterFunction = it => (it[fieldSearch] as string).indexOf(searchLine) !== -1;

    return value
      .filter(filterNotUndefinedFunction)
      .filter(filterFunction);
  }

}
