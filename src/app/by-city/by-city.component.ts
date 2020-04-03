import { Component, OnInit, ViewChild,ElementRef  } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { City } from '../city';
import { LocalService } from '../local.service';
import { GoogleLogService } from '../google-log.service';
import { element } from 'protractor';

@Component({
  selector: 'app-by-city',
  templateUrl: './by-city.component.html',
  styleUrls: ['./by-city.component.css']
})
export class ByCityComponent implements OnInit {
  cityDetails:City[] =[];
  loacalArr:any[]=[];
  data:any;
  error:boolean = false;
  @ViewChild("search") searchInput: ElementRef;
  id:number;
  HomeTown:string;
  alredy = [];
  alredyText;
  Bshow:boolean;

  
  constructor(private activeRouter:ActivatedRoute, private router:Router, private weather:LocalService, private log:GoogleLogService) { }
  b1():void{
    document.getElementById(`BcityList`).style.background="white";
    document.getElementById(`BbyCity`).style.background="darkgray";
  }
  b2():void{
    document.getElementById(`BcityList`).style.background="darkgray";
    document.getElementById(`BbyCity`).style.background="white";
  }
  searchCity(city):void{
    if(city.trim() != ""){
      let checkCityFromList = this.alredy.find(element => element.name.toLowerCase() == city.toLowerCase())
      checkCityFromList ? this.alredyText = ' in list' : this.alredyText = 'add';
      console.log(`list: ${checkCityFromList}`);
      this.cityDetails = [];
      this.id = Math.random() ;
      this.weather.getByCity(city).subscribe(ele => {
        this.data = ele;
        this.cityDetails.push({name:this.data.name, country:this.data.sys.country, temp: this.data.main.temp, icon:this.data.weather[0].icon});
      })
      this.error = false;
      this.searchInput.nativeElement.value = "";
     
      }
    
  else{
  this.error = true;
      }
      
    }
    saveCity():void{
      this.loacalArr.push({id:this.id,name:this.data.name, country:this.data.sys.country, temp: this.data.main.temp, icon:this.data.weather[0].icon});
      this.weather.saveObjToStorage(this.loacalArr);
      console.log(`saved`);
      this.alredy.push({name:this.data.name,id:this.id});
      this.weather.saveObjToStorage1(this.alredy);
      console.log(`enter to alredyArr`);
      
      
      
      }
      logout(){
        this.log.googleLogoout().then(res => {
          this.router.navigate([''])
        }).catch(err => console.log(err))
      }
     
    
  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('object'))){
      this.loacalArr =  JSON.parse(localStorage.getItem('object'))
    }
    if(this.router.navigate([`byCity/`],)){
      document.getElementById(`BcityList`).style.background="#ffffff00";
      document.getElementById(`BbyCity`).style.background="white";
     }
     if(JSON.parse(localStorage.getItem('object3'))){
      this.HomeTown = JSON.parse(localStorage.getItem('object3'))
    }
    if(JSON.parse(localStorage.getItem('object1'))){
      this.alredy =  JSON.parse(localStorage.getItem('object1'))
      console.log(`alredy: ${this.alredy}`);
      
    }
   
  }
    
  }
  
  
  


