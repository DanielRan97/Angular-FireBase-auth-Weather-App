import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { City } from '../city';
import { LocalService } from '../local.service';
import { GoogleLogService } from '../google-log.service';
@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  favCity:any[]=[];
  getFromOB1:any[]=[];
  HomeTown:[]=[];
  constructor(private activeRouter:ActivatedRoute, private router:Router, private weather:LocalService, private log:GoogleLogService) { }
  b1():void{
    document.getElementById(`BcityList`).style.background="white";
    document.getElementById(`BbyCity`).style.background="darkgray";
  }
  b2():void{
    document.getElementById(`BcityList`).style.background="darkgray";
    document.getElementById(`BbyCity`).style.background="white";
  }
  getCity(){
    if(localStorage.getItem('object')){
      this.favCity = JSON.parse(localStorage.getItem('object'));
      console.log(this.favCity)

  }
}
  deleteUser(id){
    for(let i=0; i<this.favCity.length; i++){
      if(this.favCity[i].id==id){
        this.favCity.splice(i,1);
        this.weather.saveObjToStorage(this.favCity);
    }
  }

  for(let i=0; i<this.getFromOB1.length; i++){
    if(this.getFromOB1[i].id==id){
      this.getFromOB1.splice(i,1);
      this.weather.saveObjToStorage1(this.getFromOB1);
    }
}

}
logout(){
  this.log.googleLogoout().then(res => {
    this.router.navigate([''])
  }).catch(err => console.log(err))
}
deleteUser1(){
this.HomeTown = [];
this.weather.saveObjToStoragemainCity(this.HomeTown);

}
  ngOnInit(): void {
    if(this.router.navigate([`cityList/`],)){
      document.getElementById(`BcityList`).style.background="white";
     }
     else{
      document.getElementById(`BbyCity`).style.background="white";
     }
     this.getCity();
     console.log(this.favCity);
     if(JSON.parse(localStorage.getItem('object2'))){
       this.HomeTown = JSON.parse(localStorage.getItem('object2'))
       console.log(this.HomeTown);
     }
     if(JSON.parse(localStorage.getItem('object1'))){
      this.getFromOB1 =  JSON.parse(localStorage.getItem('object1'))
      console.log(`alredy: ${this.getFromOB1}`);
      
    }
   }
   
   
    }
  


