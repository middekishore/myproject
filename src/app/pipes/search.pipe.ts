import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Student:any,searchname:any): any {
    if(searchname === undefined){
   
      return Student;
    }else{

      return Student.filter(function(names){
      
         return names.name.toLowerCase().includes(searchname.toLowerCase());
      })
    }
  }

}
