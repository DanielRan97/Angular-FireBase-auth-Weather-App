import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByCityComponent } from './by-city/by-city.component';
import { CityListComponent } from './city-list/city-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
{path: 'byCity', component : ByCityComponent,canActivate:[AuthGuard]},
{path: 'cityList', component: CityListComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
