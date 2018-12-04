import {Contact} from "../models/contact.model";

declare var $:any;
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(private contactService: ContactService) { }


    contact: Contact = {
        firstName: '',
        lastName: '',
        fullName: '',
        title: '',
        companyName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: '',
        businessPhone: '',
        cellPhone: '',
        fax: '',
        message: '',
        email: '',
        captcha: '',
        interest: []
    }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.contactService.contactMessageSubmit(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        } else {
            this.serverErrorMessages = 'Something went wrong !';
        }
      }
    );
  }

  resetForm(form: NgForm) {
      this.setAllFunc(this.contact, '');
      form.resetForm();
      this.serverErrorMessages = '';
  }

    setAllFunc(obj, val) {
        Object.keys(obj).forEach(function(k) {
            if (obj[k] === 'interest') {
                obj[k] = [];
            } else{
                obj[k] = val;
            }
        });
    }

  ngAfterViewInit() {
    $('.bxslider').bxSlider({
      auto: '',
      controls: false
    });
  }
}
