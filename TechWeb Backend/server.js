const express=require("express");
const app=express();
const mongoose=require("mongoose");
const routes=require('./routes')
const {login}=require('./controllers/authController')

mongoose.connect(`${process.env.mongodbConnection}`,{dbName:`${process.env.dbCollection}`})
.then(()=>{
    app.listen(8000,()=>{
        console.log("Success");
    })
})
.catch((err)=>{
    console.log(err);
})

app.use(express.json())
app.use('/',routes)
app.post('/login',login)
