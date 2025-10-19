import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ssn2date',
  standalone: true
})
export class Ssn2datePipe implements PipeTransform {

  // 30301141202434
  transform(value :number):Date{
    let ssnString = value.toString();
    let year = parseInt(ssnString.substring(1,3));
    let month = parseInt(ssnString.substring(3,5)); // Months are zero-based in JS Date
    let day = parseInt(ssnString.substring(5,7));
    
    return new Date(2000 + year, month - 1, day); // Adjust year as needed

  }

}
