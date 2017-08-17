import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { aboutRoutes } from "./about.routes";
import { ScrollCkDirective } from "../scroll/scrollCheck.directive";
import { disWheelDirective } from "../scroll/disablewheel.directive";
// import { scrollToDirective } from "../scroll/scrollTo.directive";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(aboutRoutes)
  ],
  declarations: [
    AboutComponent,
    // scrollToDirective,
    ScrollCkDirective,
    disWheelDirective
  ]
})
export class AboutModule { }
