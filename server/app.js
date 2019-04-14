require('appmetrics-dash').attach({
    url:'/api/appmetrics-dash'
});
require('appmetrics-prometheus').attach();
const log4js = require('log4js');
const express= require('express');
const cors = require('cors')
const app = express();
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const Sentry = require('@sentry/node');
const PORT= process.env.PORT || 5000;
const auth= require('./routes/user/Auth');
const Stores= require('./routes/owner/owner');
const Subscribers= require('./routes/user/user');
const Notification= require('./routes/webhooks/Notification');
const appName = require('./package').name;
const logger = log4js.getLogger(appName);
const Keys= require('./Config/Credintials/index');
const swaggerDoc = require('./swaggerDoc');


logger.level = Keys.LOG_LEVEL || 'info';

app.use(log4js.connectLogger(logger, { level: logger.level }));

app.use(cors());

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
app.use('/api/webhook/',Notification);
app.use('/api/stores/',Stores);
app.use('/api/subscribers/',Subscribers);
swaggerDoc(app);




app.listen(PORT,()=>{
    logger.info(`APPLICATION STARTED ON PORT ${PORT}`);
    logger.info(`App Matric Started on http://localhost:${PORT}/api/appmetrics-dash`);
});