const express = require('express');
const router = express.Router();
const user= require('../../controllers/user/user');


router
    .route('/login')
    .post(user.LoginUser);

router
    .route('/signup')
    .post(user.AddUser);



module.exports= router;
