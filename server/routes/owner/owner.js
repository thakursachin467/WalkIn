const express = require('express');
const router = express.Router();
const Store= require('../../controllers/store/owner');

router
    .route('/all')
    .get(Store.allStores);

router
    .route('/:storeId')
    .get(Store.store);

module.exports= router;