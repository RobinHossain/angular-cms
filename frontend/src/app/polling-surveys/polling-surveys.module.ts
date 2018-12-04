import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollingSurveysComponent } from './polling-surveys.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: PollingSurveysComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PollingSurveysComponent]
})
export class PollingSurveysModule { }
