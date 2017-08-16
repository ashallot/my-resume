import { RouterModule } from '@angular/router';
import { LearnComponent } from "./learn.component";
export const learnRoutes = [
    {
        path:'',
        redirectTo:'learn',
        pathMatch:'full'
    },
    {
        path:'learn',
        component:LearnComponent
    }
];