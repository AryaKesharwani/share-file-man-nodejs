require('dotenv').config();
const mongoose=require('mongoose')

function connectDB(){
    const uri=process.env.MONGO_CONNECTION_URI
    // Database connection
    mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:true})
    const connection=mongoose.connection;

    // on open connection 
    connection.once('open',()=>{
        console.log("Database connected");
    }).catch(err=>{
        console.log(`connection failed`);
    })
}



module.exports=connectDB;