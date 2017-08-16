import { RouterModule } from '@angular/router';
import { WayComponent } from "./way.component";
export const wayRoutes = [
    {
        path:'',
        redirectTo:'way',
        pathMatch:'full'
    },
    {
        path:'way',
        component:WayComponent
    }
];