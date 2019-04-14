const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const ObjectId= Schema.ObjectId;
const Sentry= require('@sentry/node');

const UserSchema= new Schema({
   phone:{
       type: String,
       required: true
   },
    last_detected: {
       type : Date
    },
    subscribed:{
       type:ObjectId,
        ref:'owners'
    },
    sms_received:{
       type: Number
    }

});

const User= mongoose.model('users',UserSchema);

exports.findUser =(filter,callback)=>{
  User.findOne(filter).lean().exec(callback);
};

exports.findUsers =(filter,callback)=>{
  User.find(filter).lean().exec(callback);
};

exports.addUser = (userData,callback)=>{
    const newUser= User(userData);
    newUser.save(callback);
};

exports.editUser= ({filter,update,options={new: true}},callback)=>{
    User.findOneAndUpdate(filter,update,options).lean().exec(callback);

};