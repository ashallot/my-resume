import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';

// Directive decorator
@Directive({
    selector: '[toTop]'
})
// Directive class
export class toTopDirective {
    scrolltop: any;

    timer: any;
    constructor(private el: ElementRef, private renderer: Renderer) { }

    @Input('toTop') Target: any;
    @HostListener('click', ['$event']) clickCheck(event:any) {
        this.Scrollto(event);
    }//在哪一个标签上使用了那个指令，那个标签就会触发该事件

    @HostListener('window:scroll', ['$event']) scrollCheck(event:any) {
        this.Scrollch(event);
    }

    public Scrollch(event) {
        // console.log(document.body.scrollTop); 适配Chrome
        // console.log(document.documentElement.scrollTop);  适配firefox
        this.scrolltop = document.body.scrollTop;
    }
    public Scrollto(event) {
        console.log("dire:" + this.Target);
        if (this.Target == 'Top' && document.documentElement.scrollTop == 0) {
            this.timer = setInterval(() => {
                if (document.body.scrollTop === 0) {
                    clearInterval(this.timer);
                    document.body.scrollTop = this.scrolltop;
                }
                document.body.scrollTop = document.body.scrollTop - 20;
                if (document.body.scrollTop <= 20) {
                    document.body.scrollTop = 0;
                }
            }, 8);
        }else if (this.Target == 'Top' && document.body.scrollTop == 0) {
            this.timer = setInterval(() => {
                if (document.documentElement.scrollTop === 0) {
                    clearInterval(this.timer);
                    document.documentElement.scrollTop = this.scrolltop;
                }
                document.documentElement.scrollTop = document.documentElement.scrollTop - 60;
                if (document.documentElement.scrollTop <= 60) {
                    document.documentElement.scrollTop = 0;
                }
            }, 8);
        }

    }
}
