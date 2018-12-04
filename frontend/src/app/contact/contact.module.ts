import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {ContactService} from '../services/contact.service';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent
  }
];
@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(routes)
    ],
    declarations: [ContactComponent],
    providers: [ContactService]
})
export class ContactModule { }
