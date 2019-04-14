const express = require('express');
const router = express.Router();
const Notification= require('../../controllers/Webhooks/Notification');


router
    .route('/sendSms')
    .post(Notification.SendSms);

module.exports= router;