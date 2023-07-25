import { useEffect, useState } from 'react';
import CustomerEditPage from '../../components/templates/CustomerEditPage';
import { useRouter } from 'next/router';

export default function Index() {

    const [data, setData] = useState(null);

    // mikhay on id ro begiri az url 
    const router = useRouter();

    
    // vaghti miay log migir az query mibini ke dafeh aval undifined mideh baray hamin az isReady estefadeh mikoni ta bebini true hast ya false vaseh query.
    
    const { query: { customerId }, isReady } = router;

    useEffect(() => {

        // gofti har mogeh ke isReady true shod va query ro gereft bia fetch bokon. 

        if (isReady) {
            fetch(`/api/customer/${customerId}`)
            .then(res => res.json())
            .then(data => setData(data.data))
        }

    }, [isReady])

    // ! baray in id ro dadi ta mogeh Patch kardan betonit dobareh update bokoni data on customer ro. 

    if(data) return <CustomerEditPage data={data} id={customerId}/>

};




