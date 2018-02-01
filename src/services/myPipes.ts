import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
name: 'filterCategory'      //<-------- lowercase filterCategory we are going to using on html file
})
export class HelloWorld implements PipeTransform {
transform(value, args:string[]) : any {
//         ^-----value here is data to pass, and args is argument we pass

  let menu = [];
    value.forEach(s =>{
      if(s.parent_id == args){
        menu.push(s);
      }
    });

      return menu;

}
}