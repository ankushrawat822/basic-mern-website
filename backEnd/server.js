const express = require("express")
const app = express()
const dotenv =  require("dotenv")
dotenv.config()

const router = require("../backEnd/routes/userRoute")

const cors  = require("cors")
app.use(cors())

app.use(express.json())

const mongoose = require('mongoose');
mongoose.connect(process.env.URI).then(()=>{
    console.log("connecter succesfully")
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log("server on port running")
    })
}).catch((error)=>{
    console.log("error" , error)
})

app.use(router)