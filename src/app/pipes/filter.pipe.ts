import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(issues: any[], search: string): any[] {
    if (!issues) {
      return [];
    }
    if (!search) {
      return issues;
    }

    return issues.filter(is => {
      return is.number.toString().includes(search) || is.title.includes(search) || is.user.login.includes(search);
    });
  }

}
