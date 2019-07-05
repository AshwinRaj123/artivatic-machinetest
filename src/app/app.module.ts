import { MoreDashboardModule } from './more-dashboard/more-dashboard.module';
import { MainDashboardModule } from './main-dashboard/main-dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { MenuComponent } from './menu/menu.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';

import { RouterModule } from '@angular/router';
import { routes } from './app.router';
import { NoPageComponent } from './no-page/no-page.component';
import { FooterComponent } from './footer/footer.component';
import { MoreDashboardComponent } from './more-dashboard/more-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    MenuComponent,
    MainDashboardComponent,
    NoPageComponent,
    FooterComponent,
    MoreDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainDashboardModule,
    MoreDashboardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
