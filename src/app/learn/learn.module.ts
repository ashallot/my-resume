import { learnRoutes } from './learn.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnComponent } from './learn.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(learnRoutes)
  ],
  declarations: [LearnComponent]
})
export class LearnModule { }
