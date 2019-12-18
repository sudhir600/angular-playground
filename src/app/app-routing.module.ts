import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { DetailsComponent } from './components/user/details/details.component';
import { ContractComponent } from './components/contract/contract.component';
import { SalesComponent } from './components/sales/sales.component';
import { I18nComponent } from './components/i18n/i18n.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { AjaxComponent } from './components/ajax/ajax.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/details', component: DetailsComponent },
  { path: 'contract', component: ContractComponent },
  { path: 'i18n', component: I18nComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'ajax', component: AjaxComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  DashboardComponent,
  UserComponent,
  DetailsComponent,
  ContractComponent,
  SalesComponent,
  I18nComponent,
  TicketComponent,
  AjaxComponent,
  NotFoundComponent
];
