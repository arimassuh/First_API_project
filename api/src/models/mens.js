
                                                    //Third file


//we are creating schemas here 

const express = require("express");//why express ? now it can access any localhost.
const mongoose = require("mongoose");//here also mongoose 

const menSchema = new mongoose.Schema({//new monoose right so that m should be in small letter
    ranking:{
        type:Number,
        required:true,//the value user enters should not be empty
        unique:true,//Every one should be diggerent ex:1,2,3
    },
    name:{
        type:String,
        required:true,
        trim:true//to remove the space before and after the name
    },
    dob:{
        type:String,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        type:String,
       default:"100m"
    },
})

//we are creating a new collection i.e all the schema will be stored here
const MensRanking/*in capital*/  = new mongoose.model("MenRanking", menSchema)

module.exports = MensRanking;/*We are sending this schema collection to the api file to help it with the crud operations
*/




//by the end of the file theres nothing new for now, but these schemas are important 
