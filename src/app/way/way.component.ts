import { Component, OnInit } from '@angular/core';
import { fadeIn } from "../animations/fade-in";

@Component({
  selector: 'app-way',
  templateUrl: './way.component.html',
  styleUrls: ['./way.component.css'],
  animations: [fadeIn]
})
export class WayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
