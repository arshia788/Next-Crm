import Customer from "../../../models/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res){
    try{
        await connectDB()
    }catch(err){
        res.status(500).json({status:'failed', message:"failed to connect to DB"})
        return;
    }

    if(req.method === "DELETE"){
        const {customerId}= req.query;
        console.log(customerId);

        try{    
            const customer= await Customer.deleteOne({_id:customerId})
            res.status(200).json({status:"success", data:customer})
        }catch(err){
            res.status(500).json({status:'failed', message:"failed to delete it  from the DB"})
        }

    }
}