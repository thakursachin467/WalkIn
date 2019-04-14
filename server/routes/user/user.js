const express = require('express');
const router = express.Router();
const user= require('../../controllers/user/user');

router
    .route('/:storeid')
    .get(user.getUsers);

router
    .route('/sendSms/:userId/:storeId')
    .get(user.sendSms)

module.exports= router;