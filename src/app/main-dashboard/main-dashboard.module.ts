import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { TasksComponent } from './tasks/tasks.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { AccountsComponent } from './accounts/accounts.component';

@NgModule({
  declarations: [HomeComponent,MessagesComponent,ProjectsComponent, AnalyticsComponent, TasksComponent, CalendarComponent, LayoutsComponent, AccountsComponent],
  imports: [
    CommonModule
  ]
})
export class MainDashboardModule { }
