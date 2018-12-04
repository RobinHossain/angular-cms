import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  reCaptchaSiteKey;

  contactData: Contact = {
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

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http: HttpClient) { }


  contactSubmit(formData: Contact) {
    return this.http.post(environment.apiBaseUrl + '/contact_submit', formData , this.noAuthHeader);
  }


  contactMessageSubmit(formData: Contact) {
    return this.http.post(environment.apiBaseUrl + '/contact_message_submit', formData , this.noAuthHeader);
  }

    getInterestData() {
        return this.http.get(environment.apiBaseUrl + '/interests');
    }

  getReCaptchaKey() {
    return environment.reCaptchaSiteKey;
  }
}
