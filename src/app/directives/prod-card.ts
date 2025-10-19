import { Directive  , ElementRef} from '@angular/core';

@Directive({
  selector: '[appProdCard]'
})
export class ProdCard {

  constructor(ele:ElementRef) {
    ele.nativeElement.style.borderRadius = '15px';
    ele.nativeElement.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
  }

}
