const express = require('express');
const router = express.Router();
const user= require('../../controllers/user/user');

router
    .route('/:storeid')
    .get(user.getUsers);

module.exports= router;