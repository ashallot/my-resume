import { RouterModule } from '@angular/router';
import { AchievementComponent } from "./achievement.component";
export const achievementRoutes = [
    {
        path:'',
        redirectTo:'achievement',
        pathMatch:'full'
    },
    {
        path:'achievement',
        component:AchievementComponent
    }
];