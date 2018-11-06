import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { TopRatedHotelsComponent } from './home/top-rated-hotels/top-rated-hotels.component';
import { HotelEventsComponent } from './home/hotel-events/hotel-events.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HotelsComponent } from './hotels/hotels/hotels.component';
import { HotelsDetailsComponent } from './hotels/hotels-details/hotels-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HotelsService } from './services/hotels.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    TopRatedHotelsComponent,
    HotelEventsComponent,
    LoginComponent,
    RegistrationComponent,
    HotelsComponent,
    HotelsDetailsComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
