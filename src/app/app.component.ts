import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'angular-app';

  constructor() { }

  ngOnInit() { }

  ngOnDestroy() { }

  // Return the minimum number of swaps required to sort the array
  minSwaps(intArr: Array<number>) {
    let intArrLen = intArr.length;
    let minMoves = 0;
    let temp = [...intArr];
    // Sort the temporary array; which is a copy from the original integer array
    temp.sort((a: any, b: any) => { return a - b; });
    for (let currIndex = 0; currIndex < intArrLen; currIndex++) {
      // Checking whether the current element is at the right place or not
      if (intArr[currIndex] != temp[currIndex]) {
        minMoves++;
        // Swap the current element with the right index so that intArr[0] to intArr[i] is sorted
        this.swap(intArr, currIndex, this.indexOf(intArr, temp[currIndex]));
      }
    }
    return minMoves;
  }

  swap(intArr: Array<number>, i: number, j: number) {
    let temp = intArr[i];
    intArr[i] = intArr[j];
    intArr[j] = temp;
  }

  indexOf(intArr: Array<number>, element: number) {
    for (let currIndex = 0; currIndex < intArr.length; currIndex++) {
      if (intArr[currIndex] == element) {
        return currIndex;
      }
    }
    return -1;
  }

}
