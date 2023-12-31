import Customer from "../../../models/Customer";
import connectDB from "../../../utils/connectDB"

export default async function handler(req, res){

    try{
        await connectDB()
    }catch(err){
        res.status(500)
        .json({status:"failed", message:"failed to connect to DB"})
        return;
    }

    if(req.method === "POST"){
        const data= req.body.data
        
        if(!data.name || !data.lastName || !data.email){
            res.status(400).json({status:'failed', message:"Invalid data!"})
                return;
            }
            try{
            const customer= await Customer.create(data)

            res.status(201)
            .json({status:"success",message:'the data has sent to DB' ,data:customer})

        }catch(err){
            res.status(500)
        .json({status:"failed", message:"failed to send data to DB"})
        }
    }
    

}