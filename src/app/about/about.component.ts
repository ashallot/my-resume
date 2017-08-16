import { zState } from './about.animations';
import { Component, OnInit } from '@angular/core';
import { fadeIn } from "../animations/fade-in";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fadeIn, zState]
})
export class AboutComponent implements OnInit {
  z1State: any;
  z2State: any;
  z3State: any;
  z4State: any;

  target:any;
  constructor() { }

  ngOnInit() {
  }

  public goto(loc: string): void {
    console.log('com:'+loc);
    this.target = loc;
    // window.location.hash = loc;
  }

  public zover(n) {
    switch (n) {
      case 1: this.z1State = 'active'; break;
      case 2: this.z2State = 'active'; break;
      case 3: this.z3State = 'active'; break;
      case 4: this.z4State = 'active'; break;
      default: break;
    }
  }

  public zleave() {
    this.z1State = '';
    this.z2State = '';
    this.z3State = '';
    this.z4State = '';
  }
}
