const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sendGrid = require("@sendgrid/mail");

const app = express();

// setting midleware
app.use(bodyParser.json());
app.use(cors());
app.use((req,res, next) =>{

})