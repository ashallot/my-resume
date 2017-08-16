import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementComponent } from './achievement.component';
import { achievementRoutes } from "./achievement.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(achievementRoutes)
  ],
  declarations: [AchievementComponent]
})
export class AchievementModule { }
