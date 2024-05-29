import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { IndexComponent } from './components/index/index.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { ExploreComponent } from './components/explore/explore.component';
import { HttpClientModule } from '@angular/common/http';
import { PorpertyServiceService } from './services/porperty-service.service';
import { ProperyDetailsComponent } from './propery-details/propery-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    IndexComponent,
    HomeComponent,
    DetailsComponent,
    ExploreComponent,
    ProperyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [PorpertyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
