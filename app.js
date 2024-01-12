const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const db = require('./config/db');
const dotenv = require('dotenv');
const path = require('path');


//load config dotenv file
dotenv.config({path:'./config/config.env'})

//connect to database
db().then();
const st = "word";
//express app
const app = express();

//MiddleWares
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'));
app.use(cors());

//Routes
const productRoute=require('./routes/products');
app.use('/api/v1/products',productRoute);
//app.use('/api/v1/products/:id',productRoute);



//set static folder path
app.use(express.static(path.join(__dirname,'public')));


//Define Port Number
const PORT =process.env.PORT

app.listen(PORT,()=>{
    console.log('Server Runing on port ' + PORT);
})