const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  fullName: {
    type: String
  },
  title: {
    type: String
  },
  companyName: {
    type: String
  },
  address1: {
    type: String
  },
  address2: {
    type: String
  },
  message: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zipCode: {
    type: String
  },
  businessPhone: {
    type: String,
    minlength: [4, 'Phone Number must be atleast 5 character long']
  },
  cellPhone: {
    type: String,
    minlength: [4, 'Phone Number must be atleast 5 character long']
  },
  fax: {
    type: String
  },
  interest: {
    type: Array
  },
  email: {
    type: String,
    required: 'Email can\'t be empty'
  }
});


// Custom validation for email
contactSchema.path('email').validate((val) => {
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
}, 'Invalid e-mail.');


mongoose.model('Contact', contactSchema);
