import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import CustomerDetailsPage from "../../components/templates/CustomerDetailsPage";

export default function CustomerId() {

    const [data, setData] = useState(null);

    const router= useRouter();
    const {query:{customerId}, isReady}= router;

    useEffect(()=>{
        if(isReady){
            fetch(`/api/customer/${customerId}`)
            .then(res=> res.json())
            .then(data=> setData(data.data))
        }
    },[])

    // dg niazi be id nist chon taghir nmikhay bedi 
    if(data) return <CustomerDetailsPage data={data} />
}

