import { Component, OnInit } from '@angular/core';
import { fadeIn } from "../animations/fade-in";

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css'],
  animations: [fadeIn]
})
export class AchievementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
