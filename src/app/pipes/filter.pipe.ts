import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, value: string, field: string): any {
    if (items.length === 0 || !value ) {
      return null;
    }
  // debugger;
    return items.filter((i) => {
      if (field === 'select') {
        return items;
      }
      if (field === 'team') {
        const homeTeam = i.homeTeam.toLowerCase().indexOf(value.toLowerCase()) !== -1;
        const awayTeam = i.awayTeam.toLowerCase().indexOf(value.toLowerCase()) !== -1;
        // @ts-ignore
        return (homeTeam + awayTeam);
      } else {
        return i[field].toLowerCase().indexOf(value.toLowerCase()) !== -1;
      }
    });
  }

}
