import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradeShowComponent } from './trade-show.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: TradeShowComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TradeShowComponent]
})
export class TradeShowModule { }
