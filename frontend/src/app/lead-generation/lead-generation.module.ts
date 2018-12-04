import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadGenerationComponent } from './lead-generation.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: LeadGenerationComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeadGenerationComponent]
})
export class LeadGenerationModule { }
