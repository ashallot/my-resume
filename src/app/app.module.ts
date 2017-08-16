import { LearnModule } from './learn/learn.module';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import 'hammerjs';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appRoutes } from "./app.routes";
import { WayModule } from "./way/way.module";
import { AchievementModule } from "./achievement/achievement.module";
import { AboutModule } from "./about/about.module";
import { toTopDirective } from "./scroll/toTop.directive";

@NgModule({
  declarations: [
    AppComponent,
    toTopDirective
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    HomeModule,
    LearnModule,
    WayModule,
    AchievementModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
