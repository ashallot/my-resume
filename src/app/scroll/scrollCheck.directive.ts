import { style } from '@angular/animations';
import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';

// Directive decorator
@Directive({
  selector: '[scrollCheck]'
})
// Directive class
export class ScrollCkDirective {
  scrolltopA: any;//chrome
  scrolltopB: any;//firefox
  constructor(private el: ElementRef, private renderer: Renderer) { }
  @HostListener('window:scroll') scrollCheck() {
    this.changeScroll();
  }
  private changeScroll() {
    this.scrolltopA = document.body.scrollTop;
    this.scrolltopB = document.documentElement.scrollTop;
    if (this.scrolltopB == 0) {
      if (this.scrolltopA >= 300 && this.scrolltopA <= 740) {
        this.renderer.setElementClass(this.el.nativeElement.querySelector('#kuangjia'), 'kuangjia1', true);
        this.renderer.setElementClass(this.el.nativeElement.querySelector('#kuangjia'), 'kuangjia2', false);
      } else if (this.scrolltopA >= 1322 && this.scrolltopA <= 1333) {
        //   console.log('fengge');
      } else if (this.scrolltopA >= 2005 && this.scrolltopA <= 2016) {
        //   console.log('ku');
      } else {
        this.renderer.setElementClass(this.el.nativeElement.querySelector('#kuangjia'), 'kuangjia1', false);
        this.renderer.setElementClass(this.el.nativeElement.querySelector('#kuangjia'), 'kuangjia2', true);
      }
    }else if (this.scrolltopA == 0) {
      if (this.scrolltopB >= 300 && this.scrolltopB <= 740) {
        this.renderer.setElementClass(this.el.nativeElement.querySelector('#kuangjia'), 'kuangjia1', true);
        this.renderer.setElementClass(this.el.nativeElement.querySelector('#kuangjia'), 'kuangjia2', false);
      } else if (this.scrolltopB >= 1322 && this.scrolltopB <= 1333) {
        //   console.log('fengge');
      } else if (this.scrolltopB >= 2005 && this.scrolltopB <= 2016) {
        //   console.log('ku');
      } else {
        this.renderer.setElementClass(this.el.nativeElement.querySelector('#kuangjia'), 'kuangjia1', false);
        this.renderer.setElementClass(this.el.nativeElement.querySelector('#kuangjia'), 'kuangjia2', true);
      }
    }
  }


}
