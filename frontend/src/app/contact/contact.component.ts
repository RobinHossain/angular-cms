import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import {Contact} from '../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;

  loadAPI: Promise<any>;
  interestData: Array<any>;
  contactInterest: Array<any>;

  constructor(private contactService: ContactService) {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
  }

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

  public resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  ngOnInit() {
      this.contactService.getInterestData().subscribe(
          res => {
              console.log(res['data']);
              this.interestData = res['data'];
          },
          err => {
              console.log(err);
          }
      );
  }

    onChangeCategory(event, cat: any) { // Use appropriate model type instead of any
      if ( cat && cat._id ) {
          this.contact.interest.push(cat._id);
      }
    }

  getRecapCha() {
      return this.contactService.getReCaptchaKey();
  }

  onSubmit(form: NgForm) {
      const formData = form.value;
      formData.interest = this.contact.interest;
    this.contactService.contactSubmit(formData).subscribe(
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


    setAllFunc(obj, val) {
        Object.keys(obj).forEach(function(k) {
            if (obj[k] === 'interest') {
                obj[k] = [];
            } else{
                obj[k] = val;
            }
        });
    }

  resetForm(form: NgForm) {
    // this.contact = {
    //     firstName: '',
    //     lastName: '',
    //     fullName: '',
    //     title: '',
    //     companyName: '',
    //     address1: '',
    //     address2: '',
    //     city: '',
    //     state: '',
    //     zipCode: '',
    //     businessPhone: '',
    //     cellPhone: '',
    //     fax: '',
    //     message: '',
    //     email: '',
    //     captcha: ''
    // };
    this.setAllFunc(this.contact, '');
    form.resetForm();
    this.serverErrorMessages = '';
  }


  public loadScript() {
    let isFound = false;
    const scripts = document.getElementsByTagName('script')
    for (let i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes('loader')) {
        isFound = true;
      }
    }

    if (!isFound) {
      const dynamicScripts = ['https://www.google.com/recaptcha/api.js'];

      for (let i = 0; i < dynamicScripts .length; i++) {
        const node = document.createElement('script');
        node.src = dynamicScripts [i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }

    }
  }

}
