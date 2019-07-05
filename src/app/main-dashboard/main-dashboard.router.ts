import { AccountsComponent } from './accounts/accounts.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { Route } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { LayoutsComponent } from './layouts/layouts.component';

export const DashboardRoutes: Route[] = [
    {
        path:'',
        component: MainDashboardComponent,
        children:[
            {path: '', component: HomeComponent },
            {path: 'projects', component: ProjectsComponent},
            {path : 'messages', component: MessagesComponent},
            {path:'analytics', component:AnalyticsComponent},
            {path:'tasks',component:TasksComponent},
            {path:'calendar',component:CalendarComponent},
            {path:'layouts',component:LayoutsComponent},
            {path:'accounts',component:AccountsComponent}
        ]
    }
    
];