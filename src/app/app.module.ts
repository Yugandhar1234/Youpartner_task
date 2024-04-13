import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from 'src/material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { ShareModule } from './share/share.module';
import { ModelComponentComponent } from './model-component/model-component.component';
import { QuizzComponent } from './quizz/quizz.component';
import { BnNgIdleService } from 'bn-ng-idle';
import { MoviesComponent } from './movies/movies.component'
import { NgOptimizedImage } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ParticulatMovieComponent } from './particulat-movie/particulat-movie.component';
import { MovieticketComponent } from './movieticket/movieticket.component';
import { MovieBookPayComponent } from './movie-book-pay/movie-book-pay.component';
import { TdsComponent } from './tds/tds.component';
import { ServerPaginationComponent } from './server-pagination/server-pagination.component'
//import { NgChartsConfiguration, NgChartsModule } from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ModelComponentComponent,
    QuizzComponent,
    MoviesComponent,
    SearchComponent,
    ParticulatMovieComponent,
    MovieticketComponent,
    MovieBookPayComponent,
    TdsComponent,
    ServerPaginationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    ToastrModule.forRoot(),
    ShareModule,
    NgOptimizedImage,
    // NgChartsModule,
  ],
  providers: [BnNgIdleService,
    // { provide: NgChartsConfiguration, useValue: { generateColors: false }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
