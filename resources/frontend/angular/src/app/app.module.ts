import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


// Forms module
import { FormsModule } from '@angular/forms';

// Components

import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { RedComponent } from './components/red/red.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    RedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    GoogleMapsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
