import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children:[
      {
        path: '',
        loadChildren: '../service-home/service-home.module#ServiceHomeModule'
      },
      {
        path: 'lead_generation',
        loadChildren: '../lead-generation/lead-generation.module#LeadGenerationModule'
      },
      {
        path: 'magazines',
        loadChildren: '../magazines/magazines.module#MagazinesModule'
      },
      {
        path: 'political_election',
        loadChildren: '../political-election/political-election.module#PoliticalElectionModule'
      },
      {
        path: 'polling_surveys',
        loadChildren: '../polling-surveys/polling-surveys.module#PollingSurveysModule'
      },
      {
        path: 'sales_marketting',
        loadChildren: '../sales-marketting/sales-marketting.module#SalesMarkettingModule'
      },
      {
        path: 'trade_show',
        loadChildren: '../trade-show/trade-show.module#TradeShowModule'
      },
      {
        path: 'charities',
        loadChildren: '../charities/charities.module#CharitiesModule'
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServicesComponent]
})
export class ServicesModule { }
