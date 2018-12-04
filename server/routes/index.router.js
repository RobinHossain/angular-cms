const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlContact = require('../controllers/contact.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/contact_submit', ctrlContact.submitForm);
router.post('/contact_message_submit', ctrlContact.submitContactMessage);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/contacts', jwtHelper.verifyJwtToken, ctrlContact.contactData);
router.get('/interests', ctrlContact.getInterest);

module.exports = router;



