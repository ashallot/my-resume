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
    @HostListener('click') clickCheck() {
        this.Scrollto();
    }//在哪一个标签上使用了那个指令，那个标签就会触发该事件

    @HostListener('window:scroll') scrollCheck() {
        this.Scrollch();
    }

    public Scrollch() {
        this.scrolltop = document.body.scrollTop;
    }
    public Scrollto() {
        console.log("dire:"+this.Target);
        if (this.Target == 'Top') {
            this.timer = setInterval(() => {
                document.body.scrollTop = document.body.scrollTop - 20;
                if (document.body.scrollTop == 0) {
                    clearInterval(this.timer);
                    document.body.scrollTop = this.scrolltop;
                }
            }, 1);
        }
    }
}
