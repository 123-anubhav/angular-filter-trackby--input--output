import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expiryDaysCount',
  standalone: true
})
export class ExpiryDaysCountPipe implements PipeTransform {

  transform(expiryDate: Date): number {

    const today = new Date();
    const expiryDateProduct = new Date(expiryDate).getTime();
    const currentDate = today.getTime();
    const differenceInTime = expiryDateProduct - currentDate;

    // Convert time difference from milliseconds to days
    return Math.ceil(differenceInTime / (1000 * 3600 * 24));
  }

}
