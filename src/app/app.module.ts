import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EditMoviesComponent } from './edit-movies/edit-movies.component';
import { DeleteMoviesComponent } from './delete-movies/delete-movies.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';

import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';

import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent,AddMoviesComponent,DeleteMoviesComponent,
    EditMoviesComponent],

  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
