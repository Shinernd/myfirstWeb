// [LOAD PACKAGES]
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// [ROUTER]
const index = require('./routes/index');

//app.use(express.static(__dirname + '/public')); ?
app.set('views', __dirname + '/views/pages');
app.set('view engine', 'ejs');
//app.set('view cache', true); ?

//[CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// [CONFIGURE ROUTER]
app.use('/', index);

// [USE NATIVE PROMISE OF Node.js]
mongoose.Promise = global.Promise;

// [CONNECT TO MONGODB SERVER]
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    //connected to mongodb server
    console.log("Connected to mongodb server");
});
mongoose.connect('mongodb://localhost:27017');

// [DEFINE MODEL]
//var School = require('./models/school');

//module.export = app;

// [RUN SERVER]
app.listen(3000, function(){
    console.log('Express 모드: '+app.get('env')+', Express 서버가 3000번 포트에서 시작됨');
});
