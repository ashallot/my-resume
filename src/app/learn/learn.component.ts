import { Component, OnInit } from '@angular/core';
import { fadeIn } from "../animations/fade-in";

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css'],
  animations: [fadeIn]
})
export class LearnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
