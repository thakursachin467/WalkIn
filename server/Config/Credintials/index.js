let Keys= require('./Keys');
if(process.env.ENVIRONMENT==='production'){
    Keys= process.env;
}

module.exports= Keys;