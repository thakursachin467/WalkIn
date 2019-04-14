const Nexmo = require('nexmo');
let Keys= require('../../Config/Credintials/index');
const log = require('log4js').getLogger("notification");


exports.SendSms= (to,callback)=>{
    const nexmo = new Nexmo({
        apiKey: Keys.nexmoAPIKey,
        apiSecret: Keys.nexmoAPISecret
    },{debug: true});
    const text= `Hi, Hope you are doing well. Get upto 50% discount on your next visit to our store.`
    const from ='Nexmo';
    nexmo.message.sendSms(from, to, text,callback);
};
