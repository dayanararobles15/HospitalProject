import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/ambulance/src/environments/environment';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CrudUserService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/users`)
  }
  deleteUser(id:string):Observable<any> {
    return this.http.delete(`${environment.API_URL}/users/${id}`)
  }

  addUser(user:Partial<UserModel>):Observable<any> {
    return this.http.post(`${environment.API_URL}/users`,user)
  }

  getUser(id:string):Observable<any> {
    return this.http.get(`${environment.API_URL}/users/${id}`)
  }

  updateUser(id:string, user:Partial<UserModel>):Observable<any> {
    return this.http.put(`${environment.API_URL}/users/${id}`,user)
  }
  
}
