import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes=[
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        loadChildren:'./home/home.module#HomeModule'
    },
    {
        path:'learn',
        loadChildren:'./learn/learn.module#LearnModule'
    },
    {
        path:'way',
        loadChildren:'./way/way.module#WayModule'
    },
    {
        path:'achievement',
        loadChildren:'./achievement/achievement.module#AchievementModule'
    },
    {
        path:'about',
        loadChildren:'./about/about.module#AboutModule'
    },
    {
		path:'**',//fallback router must in the last
		loadChildren:'./app.module#AppModule'
    }
];