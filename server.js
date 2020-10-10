require('dotenv').config();
const express = require('express');
const path=require("path")
const app=express();
const PORT=process.env.PORT||3000;


app.use(express.static('public'))
app.use(express.json());
// mongodb connection
const connectDB=require('./config/db.js')
connectDB();

// Template engine
app.set('views',path.join(__dirname,"/views"))
app.set("view engine",'ejs');

// routes
app.use('/api/files',require('./routes/files'))
app.use('/files',require('./routes/show'));
app.use('/files/download',require('./routes/download'))

app.listen(PORT,()=>{
    console.log(`Listening at http://localhost:${PORT}`);
})