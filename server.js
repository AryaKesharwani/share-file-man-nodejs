require('dotenv').config();
const express = require('express');
const path=require("path")
const app=express();
const PORT=process.env.PORT||3000;
const cors=require("cors")

app.use(express.static('public'))
app.use(express.json());
// mongodb connection
const connectDB=require('./config/db.js')
connectDB();


// cors
const corsOptions = {
    origin: process.env.ALLOWED_CLIENTS.split(',')
    // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
}
app.use(cors(corsOptions))

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