import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProblemComponent } from './problem/problem.component';
import { CurrentlyAddressComponent } from './currently-address/currently-address.component';
import { SolutionComponent } from './solution/solution.component';


const routes: Routes = [
  {
    path: 'problem',
    component: ProblemComponent
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'currently-address',
    component: CurrentlyAddressComponent
  },
  {
    path: 'solution',
    component: SolutionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
