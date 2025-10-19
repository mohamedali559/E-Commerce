import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appProdCard]'
})
export class ProdCard {
  @Input() ExternalBgColor: string = 'black';

  constructor(private ele: ElementRef) {
    this.ele = ele;
    this.ele.nativeElement.style.borderRadius = '15px';
    this.ele.nativeElement.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
  }

  @HostListener('mouseover') over() {
    this.ele.nativeElement.style.boxShadow = '0 8px 16px 0 rgba(0, 0, 0, 0.3), 0 12px 40px 0 rgba(0, 0, 0, 0.25)';
    this.ele.nativeElement.style.backgroundColor = this.ExternalBgColor;
  }
  
  @HostListener('mouseout') out() {
    this.ele.nativeElement.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    this.ele.nativeElement.style.backgroundColor = 'white';
  }
}
