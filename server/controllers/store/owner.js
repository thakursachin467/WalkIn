const _ = require('lodash');
const log = require('log4js').getLogger("owners");
const Store= require('../../models/Store/owner');


exports.allStores =(request,response,next)=>{
        Store.getOwners({},(err,result)=>{
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

exports.store=(request,response,next)=>{
    const storeId= request.params.storeId;
    const filter= {
        _id:storeId
    };
    Store.getOwner(filter,(err,result)=>{
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