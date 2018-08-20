import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'localMoment'
})
export class LocalMomentPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return moment(value).local().format('MMM DD YYYY, HH:mm:ss');
  }

}
