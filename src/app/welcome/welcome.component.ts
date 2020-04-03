import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLogService } from '../google-log.service';
import { LocalService } from '../local.service';
import { City } from '../city';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private auth:GoogleLogService, private router:Router,private log:GoogleLogService,private local:LocalService) { }
    mainCity:any;
    arrHt:City[];
    
  loginWithGoogle(){
    this.auth.googleLogin().then(res => {
      this.router.navigate(['cityList']);
    })
    
  }
getMainCity(city){
  if(city!=""){
    this.arrHt = [];
    this.local.getByCity(city).subscribe(ele => {
      this.mainCity = ele;
      this.arrHt.push({id:Math.random(),name:this.mainCity.name, country:this.mainCity.sys.country, temp: this.mainCity.main.temp, icon:this.mainCity.weather[0].icon});
      this.local.saveObjToStoragemainCity(this.arrHt);
      console.log(this.arrHt);
      
    })
  }
  }

  ngOnInit(): void {
  }

}
