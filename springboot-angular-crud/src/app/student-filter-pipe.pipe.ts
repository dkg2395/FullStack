import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './model/student';

@Pipe({
  name: 'studentFilterPipe'
})
export class StudentFilterPipePipe implements PipeTransform {

  transform(list: Student[], searchText: string): any {
    if (!list)
      return [];
    if (!searchText)
      return list;
    searchText = searchText.toLocaleLowerCase();

    list = list.filter(s => {
      return s.name.toLocaleLowerCase().includes(searchText);
    });
    return list;

  }

}
