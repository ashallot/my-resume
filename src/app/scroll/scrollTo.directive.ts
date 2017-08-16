import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';

// Directive decorator
@Directive({
  selector: '[scrollTo]'
})
// Directive class
export class scrollToDirective {
  scrolltop: any;

  timer: any;
  constructor(private el: ElementRef, private renderer: Renderer) { }
  @Input('scrollTo') target: any;

  @HostListener('click') clickCheck() {
    this.Scrollto();
  }

  @HostListener('window:scroll') scrollCheck() {
    this.Scrollch();
  }

  public Scrollch() {
    this.scrolltop = document.body.scrollTop;
    console.log(this.scrolltop);
  }
  public Scrollto() {
    console.log('To:'+this.target);
    if (this.target == 'kuangjia') {
      this.timer = setInterval(() => {
        if (document.body.scrollTop >= 570) {
          console.log('in-if'+this.scrolltop);
          clearInterval(this.timer);
          document.body.scrollTop = this.scrolltop;
        }
        document.body.scrollTop = document.body.scrollTop + 10;
        // console.log('out-if:'+this.scrolltop);
      }, 30);
    } else if (this.target == 'fengge') {
      this.timer = setInterval(() => {
        document.body.scrollTop = document.body.scrollTop + 19;
        if (document.body.scrollTop >= 1330) {
          clearInterval(this.timer);
        }
      }, 8);
    } else if (this.target == 'ku') {
      this.timer = setInterval(() => {
        document.body.scrollTop = document.body.scrollTop + 28.1;
        if (document.body.scrollTop >= 1750) {
          clearInterval(this.timer);
        }
      }, 8);
    }
  }
}
