import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharitiesComponent } from './charities.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: CharitiesComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CharitiesComponent]
})
export class CharitiesModule { }
