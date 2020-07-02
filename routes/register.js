const express = require('express');
const router = express.Router();

const { Client, Authentication } = require('../db/models');
const ConfirmationEmail = require('../mails/ConfirmationEmail');
const validateAuthentication = require('../validations/validateAuthentication');

/**
 * Submit new authentication
 */
router.post('/register', validateAuthentication, async function(req, res, next) {
  // Check if client has already been registered
  let client = await Client.findOne({ where: {email: req.body.email} });

  if(client) await client.update(req.body);  // If so update client values
  else client = await Client.create(req.body); // ...else, insert a new client
  
  await Authentication.create({ ...req.body, returnOn: null, clientId: client.id });

  // Send confirmation mail
  const mail = new ConfirmationEmail();
  mail.data = { firstName, brand, model, collectOn } = req.body;
  mail.send(req.body.email);

  res.json({success: true});
});

module.exports = router;