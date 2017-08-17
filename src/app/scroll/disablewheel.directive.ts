import { style } from '@angular/animations';
import { Directive, ElementRef, Renderer, Input, HostListener, OnInit } from '@angular/core';

// 禁用鼠标滚动
@Directive({
    selector: '[disWheel]'
})
export class disWheelDirective {
    constructor(private el: ElementRef, private renderer: Renderer) { }

    @HostListener('window:onload') dis() {
        window.onmousewheel = () => {
            false;
        }
        document.onmousewheel = () => {
            false;
        }
    }
    //加event 兼容firefox ie  
    @HostListener('window:mousewheel', ['$event']) disScrollA(event: any) {
        this.scrollFunc(event);
    }

    @HostListener('window:DOMMouseScroll', ['$event']) disScrollB(event: any) {
        this.scrollFunc(event);
    }

    public scrollFunc(event) {
        event = event || window.event;
        if (event.preventDefault) {
            // Firefox  
            event.preventDefault();
            event.stopPropagation();
        } else {
            // IE  
            event.cancelBubble = true;
            event.returnValue = false;
        }
        return false;
    }
}
