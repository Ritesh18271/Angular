import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor( private el: ElementRef , private render: Renderer2) {
    el.nativeElement.style.backgroundColor='Blue';
    el.nativeElement.style.color='white';
    el.nativeElement.style.textAlign='center';

    // render.setStyle(el.nativeElement,'backgroundColor', 'Blue'

    // )
  }

}
