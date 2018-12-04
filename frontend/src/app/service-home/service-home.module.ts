import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceHomeComponent } from './service-home.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: ServiceHomeComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServiceHomeComponent]
})
export class ServiceHomeModule { }
