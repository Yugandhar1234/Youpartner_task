import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { Iemployee } from '../logic/logic.component';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ShareService {
  vertical:MatSnackBarVerticalPosition='top'
  behaviour = new ReplaySubject<any>(this.isActive())
  API: string = 'http://localhost:3000/users'
  constructor(private http: HttpClient,private snack:MatSnackBar) { }
  openSnackbar(message:string,action?:string){
    return this.snack.open(message,action,{
      duration:2000,
      verticalPosition:this.vertical
    })
  }
  register(data: any) {
    debugger
    return this.http.post(this.API, data);
  }
  login(key: any) {
    //debugger
    return this.http.get(`http://localhost:3000/users/${key}`);
  }
  getAll() {
    return this.http.get(this.API);
  }
  updateUser(user: any) {
    return this.http.put(this.API, user);
  }
  isActive() {
    // debugger
    let store = localStorage.getItem('user');
    let s = store && JSON.parse(store)
    return s;

  }
  employeeInfo(employee:any){
    return this.http.post('http://localhost:3000/employee',employee)
  }
  employeeUpdate(employee:any,id:number){
    return this.http.put(`http://localhost:3000/employee/${id}`,employee)
  }
  getALLEmployee(){
    return this.http.get<Iemployee[]>('http://localhost:3000/employee')
  }
  deleteEmployee(id:number){
    
    return this.http.delete(`http://localhost:3000/employee/${id}`)
  }
  // movies//
  movieApi:string='https://api.themoviedb.org/3';
  movieAPIKEY:string='08cc33bd5ae3a747598ce2ad84376e66';

  weekTrendingMovies():Observable<any>{
    let params =new HttpParams()
    params.set("api_key",this.movieAPIKEY);
    let headers=new HttpHeaders({
      //"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cC"
    })
    return this.http.get(`${this.movieApi}/trending/all/week`,
    {params:new HttpParams().append("api_key",this.movieAPIKEY)})
    // return this.http.get(`${this.movieApi}/trending/all/week?api_key=${this.movieAPIKEY}`)
  }
  dayTrendingMovies():Observable<any>{
    return this.http.get(`${this.movieApi}/trending/movie/day?api_key=${this.movieAPIKEY}`)
  }
  getMoviesBySearch(search:any):Observable<any>{
    //https://api.themoviedb.org/3/search/movie?api_key=08cc33bd5ae3a747598ce2ad84376e66&query
    return this.http.get<any>(`${this.movieApi}/search/movie?api_key=${this.movieAPIKEY}&query=${search}`)
  }
  getMovieById(id:any):Observable<any>{
    //https://api.themoviedb.org/3/search/movie?api_key=08cc33bd5ae3a747598ce2ad84376e66&query
    return this.http.get<any>(`${this.movieApi}/search/movie/${id}?api_key=${this.movieAPIKEY}`)
  }

  // movieTicket API
  getMovieTicket(){
    return this.http.get('http://localhost:3000/moviesTickets');
  }


  //todos
  addTodos(data:any){
    debugger
    return this.http.post('http://localhost:3000/todos',data);
  }
  getAllTodos(){
    debugger
    return this.http.get('http://localhost:3000/todos');
  }
  updateTodos(data:any){
    debugger
    return this.http.put('http://localhost:3000/todos/'+data.id,data);
  }
  deleteTodos(id:any){
    debugger
    return this.http.delete('http://localhost:3000/todos/'+id);
  }

  //Server side pagination
  getAllCandidates(){
    return this.http.get<any>("https://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCandidates");
  }
}
