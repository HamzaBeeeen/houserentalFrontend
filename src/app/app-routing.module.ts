import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { IndexComponent } from './components/index/index.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { ExploreComponent } from './components/explore/explore.component';
import { DetailsRoutingModule } from './components/details/details-routing.module';
const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'property/:id', loadChildren: () => import('./components/details/details.component').then(m => m.DetailsComponent) },
  { path: 'explore', component: ExploreComponent },
  { path: 'details', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DetailsRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  