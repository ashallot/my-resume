import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  target: any;


  public goTop(u:string) {
    // console.log(u);
    this.target = u;
  }
}
