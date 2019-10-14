import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SudhirComponent } from './sudhir/sudhir.component';
import { UserComponent } from './user/user.component';
import { DetailsComponent } from './user/details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'sudhir', component: SudhirComponent },
  { path: 'ganga', component: UserComponent },
  { path: 'user/details', component: DetailsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DashboardComponent, SudhirComponent, UserComponent, DetailsComponent, NotFoundComponent]