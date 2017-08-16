import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Target: any;


  public goTop(u:string) {
    console.log('com:'+u);
    this.Target = u;
  }
}
