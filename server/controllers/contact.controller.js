const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const sgMail = require('@sendgrid/mail');
const axios = require('axios');

const Contact = mongoose.model('Contact');
const Interest = mongoose.model('Interest');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports.submitForm = (req, res, next) => {
    let contactData = new Contact();
    contactData.firstName = req.body.firstName || '';
    contactData.lastName = req.body.lastName || '';
    contactData.title = req.body.title || '';
    contactData.companyName = req.body.companyName || '';
    contactData.address1 = req.body.address1 || '';
    contactData.address2 = req.body.address2 || '';
    contactData.city = req.body.city || '';
    contactData.state = req.body.state || '';
    contactData.zipCode = req.body.zipCode || '';
    contactData.businessPhone = req.body.businessPhone || '';
    contactData.cellPhone = req.body.cellPhone || '';
    contactData.fax = req.body.fax || '';
    contactData.email = req.body.email || '';
    contactData.fullName = req.body.fullName || req.body.firstName + ' ' + req.body.lastName;
    contactData.interest = req.body.interest || [];
    contactData.message = req.body.message || '';

    const msgData = {
        to: process.env.SENDGRID_RECIPIENT_TO,
        from: process.env.SENDGRID_RECIPIENT_FROM,
        // from: req.body.email,
        subject: 'You have a new message from Homepage.',
        html: `<strong> ${contactData.fullName} </strong> send a message. <br> <p>${req.body.message}</p>`
    };



      contactData.save((err, doc) => {

        if (!err){
            console.log('message about to send');
            sgMail.send(msgData);
            res.send(doc);

        } else {
          console.log(err);
          if (err.code == 11000)
            res.status(422).send(['Something went wrong !']);
          else
            return next(err);
        }

      });
}

module.exports.submitContactMessage = (req, res, next) => {
    let contactData = new Contact();
    contactData.fullName = req.body.fullName || '';
    contactData.email = req.body.email || '';
    contactData.cellPhone = req.body.cellPhone || '';
    contactData.message = req.body.message || '';


  let nameArr = req.body.fullName.split(/\s+/);
  contactData.firstName = nameArr.slice(0, -1).join(" ");
  contactData.lastName = nameArr.pop();


    const msg = {
        to: process.env.SENDGRID_RECIPIENT_TO,
        from: process.env.SENDGRID_RECIPIENT_FROM,
        // from: req.body.email,
        subject: 'You have a new message from Homepage.',
        html: `<strong> ${contactData.fullName} </strong> send a message. <br> <p>${req.body.message}</p>`
    };


    contactData.save((err, doc) => {
        if (!err){

            console.log('message about to send');
            sgMail.send(msg);
            res.send(doc);

        }

        else {
            if (err.code == 11000)
                res.status(422).send(['Something went wrong !']);
            else
                return next(err);
        }

    });
}


module.exports.contactData = (req, res, next) =>{
  Contact.find(null, null, { limit: 100 },
    (err, contactData) => {
      if(err)console.log(err);
      if (contactData){
        return res.status(200).json({ status: true, data : contactData });
      }
      else {
        return res.status(404).json({ status: false, message: 'User record not found.' });
      }

    }
  );
}


module.exports.getInterest = (req, res, next) =>{
    Interest.find(null, null, { limit: 100 },
    (err, interestData) => {
      if(err)console.log(err);
      if (interestData){
        return res.status(200).json({ status: true, data : interestData });
      }
      else {
        return res.status(404).json({ status: false, message: 'No interest found.' });
      }

    }
  );
}
