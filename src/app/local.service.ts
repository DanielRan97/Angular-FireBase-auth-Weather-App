import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from './city';
@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private http:HttpClient) { }

  apiUrl:string;

  getByCity(city): Observable<City[]>{
    this.apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=0076221b77ce031daedfba0615745def&units=metric&q=${city}`;
    return this.http.get<City[]>(this.apiUrl)
  }
  saveObjToStorage(obj){
    localStorage.setItem('object', JSON.stringify(obj));
  } 
  saveObjToStorage1(obj1){
    localStorage.setItem('object1', JSON.stringify(obj1));
  } 
  getObjFromStorage(){
    return JSON.parse(localStorage.getItem('object'))
  }
  saveObjToStoragemainCity(obj3){
    localStorage.setItem('object2', JSON.stringify(obj3));
  } 
}

