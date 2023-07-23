import { Schema, models, model } from "mongoose";


const customerSchema= new Schema({
    name:{
        type:String,
        required:true,
        minLength:1
    },
    lastName:{
        type:String,
        required:true,
        minLength:1
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String
    },
    address:String,
    postalCode:Number,

    // in tarikh ozviate hast 
    date:Date,
    products:{
        // yani mikhay ye array save bokoni
        type: Array,
        default: []
    },

    // in tarikh ejad dar DB 
    createdAt:{
        type:Date,
        default: ()=> Date.now(),
        // yani in ro nmitioni edit bokoni
        immutable:true
    },

    // az aval in 2ta yeki hastan (created & updated ) pas har mogeh update beshe miad beroz mikoneh 
    updatedAt:{
        type:Date,
        default: ()=> Date.now(),
    },
})

const Customer= models.Customer || model("Customer", customerSchema);

export default Customer;

