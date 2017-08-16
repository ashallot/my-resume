import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WayComponent } from './way.component';
import { wayRoutes } from "./way.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(wayRoutes)
  ],
  declarations: [WayComponent]
})
export class WayModule { }
