import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routingComponent } from './app-routing.module';
import {FormsModule } from '@angular/forms';
import { TopBilledComponent } from './Components/Shared/top-billed/top-billed.component';
import { RecommendedComponent } from './components/shared/recommended/recommended.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PaginationComponent } from './components/shared/pagination/pagination.component';
import { GenreNavComponent } from './Components/Shared/genre-nav/genre-nav.component';
import { ReviewsComponent } from './Components/Shared/reviews/reviews.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { HeaderComponent } from './Components/Shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    TopBilledComponent,
    RecommendedComponent,
    FooterComponent,
    PaginationComponent,
    GenreNavComponent,
    ReviewsComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
