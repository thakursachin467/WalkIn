const _ = require('lodash');
const log = require('log4js').getLogger("webhooks");
const SendSms= require('../../Utils/Notification/Notification');
const Validation = require('../../Utils/Validation/Validation');
const Store= require('../../models/Store/owner');
const User= require('../../models/Customers/User');



exports.SendSms= (request,response,next)=>{
   const Latitude = _.get(request,'body.location.latitude');
   const Logintude=  _.get(request,'body.location.longitude');
   const name= _.get(request,'body.name');
   const phone_number= _.get(request,'body.phone_number');
   const detection_time= _.get(request,'body.detection_time');
   if(!Validation.phoneValidation(phone_number)){
       return  response
           .status(400)
           .send({
               success:false,
               errors:{
                   message:'Please Enter a valid phone number'
               }
           })
   }
   if(_.isEmpty(Latitude) || _.isEmpty(Logintude) || _.isEmpty(phone_number) || _.isEmpty(detection_time)){
     return  response
           .status(400)
           .send({
               success:false,
               errors:{
                   message:'Please fill all the required fields.'
               }
           })
   }

   const location ={
       latitude: Latitude,
       longitude: Logintude
   };
   const filter ={
       location
   };
   const update ={
       location,
       name
   };
   Store.editOwner({filter,update},(err,result)=>{
        if(err){
            log.error(err);
        }
        const ownerId= result._id;
        const filter = {
            phone: phone_number,
            subscribed:ownerId
        };
        User.findUser(filter,(err,result)=>{
            if(err){
                log.error(err);
            }
            log.info(result);
            if(result){
                const update ={
                    $inc:{sms_received:1},
                    $set:{last_detected:detection_time}
                };
                User.editUser({filter,update},(err,result)=>{
                        if(err) {
                            log.error(err);
                        }
                });
            } else{
                const userData= {
                    subscribed: ownerId,
                    sms_received: 1,
                    last_detected: detection_time,
                    phone: phone_number
                };
                User.addUser(userData,(err,result)=>{
                    log.info(result);
                    if(err){
                        log.error(err);
                    }
                });
            }

        })
   });
    SendSms.SendSms(phone_number,(error,responseData)=>{
        if(error){
            log.error(error);
            return response
                .status(400)
                .send({
                    success: false,
                    error: {
                        message:'Something Went Wrong!!'
                    }
                })
        }
        log.info(responseData);
        return response
            .status(200)
            .send({
                success: true,
                data:{
                    message:`Successfully Send Message to ${phone_number}`
                }
            })
    });

};