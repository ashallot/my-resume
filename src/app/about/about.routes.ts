import { RouterModule } from '@angular/router';
import { AboutComponent } from "./about.component";
export const aboutRoutes = [
    {
        path:'',
        redirectTo:'about',
        pathMatch:'full'
    },
    {
        path:'about',
        component:AboutComponent
    }
];