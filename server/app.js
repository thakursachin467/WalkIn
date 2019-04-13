require('appmetrics-dash').attach();
require('appmetrics-prometheus').attach();
const log4js = require('log4js');
const express= require('express');
const app = express();
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const Sentry = require('@sentry/node');
const Keys= process.env || require('./Config/Credintials/keys');
const auth= require('./routes/user/Auth');
const PORT= process.env.PORT || 5000;
const appName = require('./../package').name;
const logger = log4js.getLogger(appName);

logger.level = Keys.LOG_LEVEL || 'info';

app.use(log4js.connectLogger(logger, { level: logger.level }));


app.use((request,response,next)=>{
    const authHeader= request.get('Authorization');
    if(authHeader){
        const token= authHeader.split(' ')[1];
        const verification= jwt.verify(token,Keys.SecretOrKey);
        request.userId= verification.userId;
    }
    next()
});


//sentry for error capturing
Sentry.init({ dsn:Keys.Sentrydsn });

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose.connect(Keys.mongoURI)
    .then(()=>console.log(`connection to database success`))
    .catch(((err)=>{
        Sentry.captureException(err);
        logger.info(`connection failed to database ${err}`)
    }));

app.use('/api/auth/',auth);




app.listen(PORT,()=>{
    logger.info(`APPLICATION STARTED ON PORT ${PORT}`);
    logger.info(`App Matric Started on http://localhost:${port}/appmetrics-dash`);
});