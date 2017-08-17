import { style } from '@angular/animations';
import { Directive, ElementRef, Renderer, Input, HostListener, OnInit } from '@angular/core';

// Directive decorator
@Directive({
    selector: '[disWheel]'
})
// Directive class
export class disWheelDirective {
    constructor(private el: ElementRef, private renderer: Renderer) { }

    @HostListener('window:onload') dis() {
        window.onmousewheel = ()=>{
            false;
        }
        document.onmousewheel = ()=>{
            false;
        }
    }

    @HostListener('window:mousewheel') disScrollA() {
        this.scrollFunc();
    }

    @HostListener('window:DOMMouseScroll') disScrollB() {
        this.scrollFunc();
    }

    public scrollFunc() {
        let evt =  window.event;  
        if(evt.preventDefault) {  
        // Firefox  
          evt.preventDefault();  
          evt.stopPropagation();  
        } else {  
          // IE  
          evt.cancelBubble=true;  
          evt.returnValue = false;  
      }  
      return false;  
    }
}
