import { RouterModule } from '@angular/router';
import { HomeComponent } from "./home.component";
export const homeRoutes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    }
];