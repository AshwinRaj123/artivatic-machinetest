import { MoreRoutes } from './more-dashboard/more-dashboard.router';
import {Routes} from '@angular/router';
import { DashboardRoutes } from './main-dashboard/main-dashboard.router';
import { NoPageRoutes } from './no-page/no-page.routes';

export const routes: Routes = [...DashboardRoutes,...MoreRoutes,...NoPageRoutes];

