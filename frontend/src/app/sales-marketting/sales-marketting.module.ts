import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesMarkettingComponent } from './sales-marketting.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: SalesMarkettingComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalesMarkettingComponent]
})
export class SalesMarkettingModule { }
