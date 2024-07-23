import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'myDate',
  standalone: true
})
export class MyDatePipe implements PipeTransform {

  transform(value: any, formatType: string): string {
    const seperator = formatType[formatType.search(/[-/]/g)];
    // format the date
    let val = moment(value)
      .format(formatType)
      .toString()
      .split(seperator)
      .map(v => v.length > 2 ? v : parseInt(v))
      .join(seperator);

    return moment(value).format(formatType);
  }

}
