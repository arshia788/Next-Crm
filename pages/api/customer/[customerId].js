import connectDB from '../../../utils/connectDB'
import Customer from '../../../models/Customer'


export default async function handler(req, res){
    try{
        await connectDB()
    }catch(err){
        res.status(500).json({status:'failed', message:"failed to connect to DB"})
        return;
    }

    if(req.method === "GET"){
        const {customerId}= req.query;

        try{
            const customer= await Customer.findOne({_id:customerId})
            res.status(200).json({status:"success", data:customer})
            
        }catch(err){
            
        res.status(500).json({status:'failed', message:"failed to retreive to DB"})
        return;
        }
    }
}

