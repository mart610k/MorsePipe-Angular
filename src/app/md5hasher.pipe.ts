import { Pipe, PipeTransform } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';

@Pipe({
  name: 'md5hasher'
})
export class Md5hasherPipe implements PipeTransform {

  transform(value: string, args: string): string {
    return Md5.hashStr(value).toString();  
  }

}
