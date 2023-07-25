import connectDB from "../../../utils/connectDB";
import Customer from "../../../models/Customer";

export async function handler(req, res){
    try{
        await connectDB()
    }catch(err){
        res.status(500).json({status:'failed', message:"failed to connect to DB"})
        return;
    }

    if(req.method === "PATCH"){
        const {customerId} = req.qqery;
        const data= req.body.data
        
        try{
            const customer= await Customer.findOne({_id:customerId})
            customer.name=data.name
            customer.lastName=data.lastName
            customer.email=data.email
            customer.phone=data.phone
            customer.address=data.address
            customer.postalCode=data.postalCode
            customer.date=data.date
            customer.products=data.products
            customer.updatedAt=Date.now()

            customer.save()
            res.status(200).json({status:"success", data:customer})


        }catch(err){
            res.status(500).json({status:'failed', message:"failed to update the DB"})
        return;
        }
    }
}
 

