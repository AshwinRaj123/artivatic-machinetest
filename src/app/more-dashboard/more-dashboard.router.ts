import { HelpComponent } from './help/help.component';
import { LibraryComponent } from './library/library.component';
import { PaymentsComponent } from './payments/payments.component';
import { MoreDashboardComponent } from './more-dashboard.component';
import {Route} from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';

export const MoreRoutes : Route[] = [
    {
        path:'',
        component:MoreDashboardComponent,
        children:[
            {path:'payments',component: PaymentsComponent},
            {path:'directory',component:DirectoryComponent},
            {path:'library',component:LibraryComponent},
            {path:'help',component:HelpComponent}
        ]
    }
]