import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';

// Directive decorator
@Directive({
    selector: '[scrollDur]'
})
// Directive class
export class scrollDurDirective {
    scrolltopA: any;
    scrolltopB: any;
    height: any;

    timer: any;

    time:number = 0;
    clicker:any;

    count: number;// + down  - up
    counts: number = 0;
    constructor(private el: ElementRef, private renderer: Renderer) { }
    @Input('scrollDur') duration: any;

    @HostListener('click') clickCheck() {//0.5秒响应一次点击事件
        if(this.time == 0){
            this.time = 10;
            this.clicker = setInterval(()=>{
                this.time --;
                if (this.time == 0) {
                    clearInterval(this.clicker);
                }
            },30)
            this.Scrolldur();
        }
    }

    @HostListener('window:scroll') scrollCheck() {
        this.Scrollch();
    }

    public Scrollch() {
        this.scrolltopA = document.body.scrollTop;
        this.scrolltopB = document.documentElement.scrollTop;
    }
    public Scrolldur() {


        this.count = Math.round(document.body.scrollTop/583);//第count+1页
        this.counts = Math.round(document.body.scrollHeight/583 - 1);//总counts+1页      页面高度583 (除去头)
        if (this.duration == 'pre' && this.count > 0) {
            this.count = this.count - 1;
            this.timer = setInterval(() => {
                document.body.scrollTop = document.body.scrollTop - 11;
                if (document.body.scrollTop == (583 * this.count)) {
                    // console.log('第'+(this.count+1)+'页');
                    clearInterval(this.timer);
                }
            }, 1);
        } else if (this.duration == 'next' && this.count <= (this.counts - 1)) {
            this.count = this.count + 1;
            this.timer = setInterval(() => {
                document.body.scrollTop = document.body.scrollTop + 11;
                if (document.body.scrollTop == (583 * this.count)) {
                    // console.log('第'+(this.count+1)+'页');
                    clearInterval(this.timer);
                }
            }, 1);
        }




        // if (this.scrolltopB == 0){
        //   if (this.duration == 'pre') {
        //     this.timer = setInterval(() => {
        //       if (document.body.scrollTop >= 570) {
        //         console.log('in-if' + this.scrolltopA);
        //         clearInterval(this.timer);
        //         document.body.scrollTop = this.scrolltopA;
        //       }
        //       document.body.scrollTop = document.body.scrollTop + 10;
        //       // console.log('out-if:'+this.scrolltopA);
        //     }, 30);
        //   } else if (this.duration == 'next') {
        //     this.timer = setInterval(() => {
        //       document.body.scrollTop = document.body.scrollTop + 19;
        //       if (document.body.scrollTop >= 1330) {
        //         clearInterval(this.timer);
        //       }
        //     }, 8);
        //   }
        // }else if (this.scrolltopA == 0){
        // }
    }
}
