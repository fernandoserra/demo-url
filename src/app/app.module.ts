import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { InfoComponent } from './Components/info/info.component';
import { TopNavbarComponent } from './Components/top-navbar/top-navbar.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    InfoComponent,
    TopNavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
