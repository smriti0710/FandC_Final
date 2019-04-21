import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import {FooterComponent} from './footer/footer.component'
import {CalendarComponent} from './calendar/calendar.component'
const routes: Routes = [
  {
    path:'home',
    component: AboutUsComponent
  },
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path:'calendar',
    component: CalendarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
