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

    @Input('toTop') target: any;
    @HostListener('click') clickCheck() {
        this.Scrollto();
    }//解决click针对ele  不是dom就行  或者  下面的 清除target后能继续得值？

    @HostListener('window:scroll') scrollCheck() {
        this.Scrollch();
    }

    public Scrollch() {
        console.log(document.body.scrollTop);
        this.scrolltop = document.body.scrollTop;
    }
    public Scrollto() {
        console.log(this.target);
        if (this.target == 'Top') {
            this.timer = setInterval(() => {
                document.body.scrollTop = document.body.scrollTop - 10;
                if (document.body.scrollTop == 0) {
                    clearInterval(this.timer);
                    document.body.scrollTop = this.scrolltop;
                }
            }, 1);
            this.target = '';
        }
    }
}
