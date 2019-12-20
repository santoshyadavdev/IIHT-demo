import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(name: string, gender: string): string {
    return gender === 'Male' ? `Mr. ${name}` : name;
  }

}
