import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);
    return value.substr(0, args) + "...";
  }

}
