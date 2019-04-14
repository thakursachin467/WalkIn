const _= require('lodash');
exports.phoneValidation =(phone)=>{
    const phone_number = /^\d{10}$/;
    return phone.match(phone_number) ? true : false;
};