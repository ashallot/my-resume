import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';

// Directive decorator
@Directive({
  selector: '[scrollTo]'
})
// Directive class
export class scrollToDirective {
  scrolltopA: any;
  scrolltopB: any;

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
    this.scrolltopA = document.body.scrollTop;
    this.scrolltopB = document.documentElement.scrollTop;
    // console.log(this.scrolltopA);
  }
  public Scrollto() {
    console.log('To:' + this.target);
    if (this.scrolltopB == 0){
      if (this.target == 'kuangjia') {
        this.timer = setInterval(() => {
          if (document.body.scrollTop >= 570) {
            console.log('in-if' + this.scrolltopA);
            clearInterval(this.timer);
            document.body.scrollTop = this.scrolltopA;
          }
          document.body.scrollTop = document.body.scrollTop + 10;
          // console.log('out-if:'+this.scrolltopA);
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
    }else if (this.scrolltopA == 0){
      if (this.target == 'kuangjia') {
        this.timer = setInterval(() => {
          if (document.documentElement.scrollTop >= 570) {
            console.log('in-if' + this.scrolltopA);
            clearInterval(this.timer);
            document.documentElement.scrollTop = this.scrolltopA;
          }
          document.documentElement.scrollTop = document.documentElement.scrollTop + 10;
          // console.log('out-if:'+this.scrolltopA);
        }, 30);
      } else if (this.target == 'fengge') {
        this.timer = setInterval(() => {
          document.documentElement.scrollTop = document.documentElement.scrollTop + 19;
          if (document.documentElement.scrollTop >= 1330) {
            clearInterval(this.timer);
          }
        }, 8);
      } else if (this.target == 'ku') {
        this.timer = setInterval(() => {
          document.documentElement.scrollTop = document.documentElement.scrollTop + 28.1;
          if (document.documentElement.scrollTop >= 1750) {
            clearInterval(this.timer);
          }
        }, 8);
      }
    }
  }
}
