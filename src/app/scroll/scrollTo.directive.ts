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
    console.log(document.body.scrollTop);
    this.scrolltop = document.body.scrollTop;
  }
  public Scrollto() {
    console.log(this.target);
    if (this.target == 'kuangjia') {
      this.timer = setInterval(() => {
        document.body.scrollTop = document.body.scrollTop + 10;
        if (document.body.scrollTop >= 710) {
          clearInterval(this.timer);
          this.target = undefined;
          document.body.scrollTop = this.scrolltop;
        }
      }, 1);
    } else if (this.target == 'fengge') {
      this.timer = setInterval(() => {
        document.body.scrollTop = document.body.scrollTop + 19;
        if (document.body.scrollTop >= 1330) {
          clearInterval(this.timer);
          this.target = undefined;
        }
      }, 1);
    } else if (this.target == 'ku') {
      this.timer = setInterval(() => {
        document.body.scrollTop = document.body.scrollTop + 28.1;
        if (document.body.scrollTop >= 2000) {
          clearInterval(this.timer);
          this.target = undefined;
        }
      }, 1);
    }
  }
}
