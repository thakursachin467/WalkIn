const _ = require('lodash');
const bcrypt= require('bcryptjs');
const jwt= require('jsonwebtoken');
const log = require('log4js').getLogger("users");
const User= require('../../models/Customers/User');
const Notification = require('../../Utils/Notification/Notification');
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
        if(err){
            return response
                .status(400)
                .send({
                    success:false,
                    errors:{
                        message:'Something Went Wrong!'
                    }
                })
        }
        return response
            .status(200)
            .send({
                success: true,
                data:result
            })
    });
};

exports.sendSms=(request,response,next)=>{
  const userId= request.params.userId;
  const storeId= request.params.storeId;
  const filter ={
      _id:userId,
      subscribed: storeId
  };
  User.findUser(filter,(err,result)=>{
        if(err){
            return response
                .status(400)
                .send({
                    success:false,
                    errors:{
                        message:'Something Went Wrong!'
                    }
                })
        }
        const {phone}= result;
      Notification.SendSms(phone,(err,responseData)=>{
          if(err){
              return response
                  .status(400)
                  .send({
                      success:false,
                      errors:{
                          message:'Something Went Wrong!'
                      }
                  })
          }
          const update={
              $inc:{sms_received:1}
          };
          User.editUser({filter,update},(err,result)=>{
              if(err){
                  return response
                      .status(400)
                      .send({
                          success:false,
                          errors:{
                              message:'Something Went Wrong!'
                          }
                      })
              }
              return response
                  .status(200)
                  .send({
                      success:true,
                      data:{
                          message:`Successfully send message to ${result.phone}`
                      }
                  })
          })
      })

  });
};