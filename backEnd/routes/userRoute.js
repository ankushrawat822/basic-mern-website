
const express = require("express")
const app = express()
const User = require("../models/userModel")
const dotenv =  require("dotenv")
dotenv.config()

app.use(express.json())

const mongoose = require('mongoose');

const router = express.Router()


// getting all data
router.get("/" , async (req, res)=> {

    try {

        const userAllData = await User.find()
        res.status(200).send(userAllData)
       
        console.log(userAllData)
        
    } catch (error) {
        console.log("error" , error)
    }

  
})



// getting single id data
router.get("/:id" , async (req, res)=> {

    const {id} = req.params

    try {

        const singleUserData = await User.findById({_id : id})
        res.status(200).send(singleUserData)
        console.log(singleUserData)
        
    } catch (error) {
        console.log("error" , error)
    }

    
})

// Delete single id data
router.delete("/:id" , async (req, res)=> {

    const {id} = req.params
 
    try {

        const deleteUserData = await User.findByIdAndDelete({_id : id})
        res.status(200).send(deleteUserData)
        console.log(deleteUserData)
      
        
    } catch (error) { 
        console.log("error" , error)
    }

   
})



// update single id data

router.patch("/:id" , async (req, res)=> {

    const {id} = req.params
    const {name , email , age} = req.body
 
    try {
        const updateUserData = await User.findByIdAndUpdate(id , req.body , {new : true})
        res.status(200).send(updateUserData)
        console.log(updateUserData)
      
    } catch (error) { 
        console.log("error" , error)
    }

})



// creating new data 

router.post("/" , async (req, res)=>{
    const {name , email , age} = req.body

    try {
        const userAdded = await User.create({
            name : name,
            email : email,
            age : age
        })

        res.status(201).json(userAdded)
        
    } catch (error) {
        console.log(error)
        res.status(400).json({error : error.message})
    }

  
})


module.exports = router