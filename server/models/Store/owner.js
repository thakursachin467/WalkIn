const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const ObjectId= Schema.ObjectId;
const Sentry= require('@sentry/node');


const OwnerSchema= new Schema({
   location:{
       latitude:{
           type: String
       },
       longitude:{
           type: String
       }
   },
    name:{
       type: String
    }
});

const Owner= mongoose.model('owners',OwnerSchema);


exports.getOwner=(filter,callback)=>{
  Owner.findOne(filter).lean().exec(callback);
};

exports.getOwners =(filter,callback)=>{
  Owner.find(filter).lean().exec(callback);
};

exports.addOwner = (userData,callback)=>{
    const newOwner= Owner(userData);
    newOwner.save(callback);
};

exports.editOwner= ({filter,update,options={upsert:true,new:true}},callback)=>{
    Owner.findOneAndUpdate(filter,update,options).lean().exec(callback);

};