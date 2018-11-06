import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HotelsComponent } from './hotels/hotels/hotels.component';
import { HotelsDetailsComponent } from './hotels/hotels-details/hotels-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HotelEventsComponent } from './home/hotel-events/hotel-events.component';

const routes:Routes=[
  {path:'',component:HomeComponent },
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'hotels',component:HotelsComponent },
  {path:'hotels/events',component:HotelEventsComponent},
  {path:'hotels/:hotelId',component:HotelsDetailsComponent },
  {path:'**',component:NotFoundComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
