import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'castle'
})
export class CastlePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch(value) {
      case 0: return 'Neuschwanstein';
      case 1: return 'Hohenschwangau';
      case 2: return 'Nuernberg';
      case 3: return 'Wuerzburg';
      case 4: return 'Rothenburg';
      case 5: return 'Repherion';
      case 6: return 'Eeyolbriggar';
      case 7: return 'Yesnelph';
      case 8: return 'Bergel';
      case 9: return 'Mersetzdeitz';
      case 10: return 'Mingting';
      case 11: return 'Tiantan';
      case 12: return 'Fuying';
      case 13: return 'Honglou';
      case 14: return 'Zhulinxian';
      case 15: return 'Kriemhild';
      case 16: return 'Swanhild';
      case 17: return 'Fadhgridh';
      case 18: return 'Skoegul';
      case 19: return 'Gondul';
      case 20: return '';
      case 21: return '';
      case 22: return '';
      case 23: return '';
      case 24: return 'Himinn';
      case 25: return 'Andlangr';
      case 26: return 'Viblainn';
      case 27: return 'Hljod';
      case 28: return 'Skidbladnir';
      case 29: return 'Mardol';
      case 30: return 'Cyr';
      case 31: return 'Horn';
      case 32: return 'Gefn';
      case 33: return 'Bandis';
      case 34: return 'Neuschwanstein';
      case 35: return 'Hohenschwangau';
      case 36: return 'Nuernberg';
      case 37: return 'Wuerzburg';
      case 38: return 'Rothenburg';
      case 39: return 'Kriemhild';
      case 40: return 'Swanhild';
      case 41: return 'Fadhgridh';
      case 42: return 'Skoegul';
      case 43: return 'Gondul';
      default: return value;
    }
  }

}
