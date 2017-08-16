import { style } from '@angular/animations';
import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';

// Directive decorator
@Directive({
  selector: '[scrollCheck]'
})
// Directive class
export class ScrollCkDirective {
  scrolltop: any;
  constructor(private el: ElementRef, private renderer: Renderer) { }
  @HostListener('window:scroll') scrollCheck() {
    this.changeScroll();
  }
  private changeScroll() {
    this.scrolltop = document.body.scrollTop;
    // console.log(this.renderer.selectRootElement(this.el.nativeElement.querySelector('#ku')).offsetTop);
    if (this.scrolltop >= 300 && this.scrolltop <= 740) {
    //   console.log('kuangjia');
      this.renderer.setElementClass(this.el.nativeElement.querySelector('#kuangjia'), 'kuangjia1', true);
      this.renderer.setElementClass(this.el.nativeElement.querySelector('#kuangjia'), 'kuangjia2', false);
    } else if (this.scrolltop >= 1322 && this.scrolltop <= 1333) {
    //   console.log('fengge');
    } else if (this.scrolltop >= 2005 && this.scrolltop <= 2016) {
    //   console.log('ku');
    } else {
      this.renderer.setElementClass(this.el.nativeElement.querySelector('#kuangjia'), 'kuangjia1', false);
      this.renderer.setElementClass(this.el.nativeElement.querySelector('#kuangjia'), 'kuangjia2', true);
    }
  }


}
