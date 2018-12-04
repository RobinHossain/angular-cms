import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagazinesComponent } from './magazines.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: MagazinesComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MagazinesComponent]
})
export class MagazinesModule { }
