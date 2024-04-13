import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegistersComponent } from './registers/registers.component';
import { AuthGuard } from './share/auth.guard';
import { QuizzComponent } from './quizz/quizz.component';
import { MoviesComponent } from './movies/movies.component';
import { SearchComponent } from './search/search.component';
import { ParticulatMovieComponent } from './particulat-movie/particulat-movie.component';
import { MovieticketComponent } from './movieticket/movieticket.component';
import { MovieBookPayComponent } from './movie-book-pay/movie-book-pay.component';
import { TdsComponent } from './tds/tds.component';
import { ServerPaginationComponent } from './server-pagination/server-pagination.component';

const routes: Routes = [
  
  {path : '', redirectTo : '/login' , pathMatch:'full'},
  {path : 'login', component: LoginComponent},
  {path : 'home', component:HomeComponent},
  {path : 'register', component:RegistersComponent},
  {path : 'login', component : LoginComponent},
  {path : 'home', component : HomeComponent},
  {path :'about' , component :AboutComponent},
  { path: 'basic', loadChildren: () => import('./basic/basic.module').then(m => m.BasicModule),canLoad: [AuthGuard]},
  { path: 'logic', loadChildren: () => import('./logic/logic.module').then(m => m.LogicModule) },
  { path: 'machine', loadChildren: () => import('./machine/machine.module').then(m => m.MachineModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'quizz', component:QuizzComponent },
  { path: 'movies', component:MoviesComponent },
  { path: 'search', component:SearchComponent },
  { path: 'movie/:id', component:ParticulatMovieComponent },
  { path: 'movie-ticket', component:MovieticketComponent },
  { path: 'movie-book', component:MovieBookPayComponent },
  { path: 'todos', component:TdsComponent },
  { path: 'pagination', component:ServerPaginationComponent },
  { path: 'register', loadChildren: () => import('./registers/registers.module').then(m => m.RegistersModule) },
  { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
