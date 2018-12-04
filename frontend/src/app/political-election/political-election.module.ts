import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliticalElectionComponent } from './political-election.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: PoliticalElectionComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PoliticalElectionComponent]
})
export class PoliticalElectionModule { }
