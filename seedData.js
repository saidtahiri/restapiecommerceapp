const dotenv = require('dotenv');
const fs =require('fs');
const colors =require('colors');
const db = require('./config/db');

//tahiri

//load config dotenv file
dotenv.config({path:'./config/config.env'})

//Load Models
const  Product = require('./models/Product');

//Connect To MongoDatabase.
db().then();

//Read the json Files

const products =fs.readFileSync