const _ = require('lodash');
const bcrypt= require('bcryptjs');
const jwt= require('jsonwebtoken');
const log = require('log4js').getLogger("users");
const User= require('../../models/Customers/User');

exports.LoginUser=(request,response,next)=>{

};


exports.AddUser=(request,response,next)=>{

};


exports.getUsers=(request,response,next)=>{
    const storeId= _.get(request,'params.storeid');
    const filter ={
        subscribed: storeId
    };
    User.findUsers(filter,(err,result)=>{

    });
};