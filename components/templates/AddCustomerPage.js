import React, { useState } from 'react'
import Form from '../modules/Form'
import { useRouter } from 'next/router'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddCustomerPage() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        lastName: '',
        phone: '',
        address: '',
        postalCode: '',
        date: '',
        products: [],
    })

    const router= useRouter();

    const saveHandler = async () => {
        const res= await fetch ('/api/customer',{
            method:"POST",
            body:JSON.stringify({data:form}),
            headers:{"Content-Type":"application/json"}
        })
        const data= await res.json();
        console.log(data);

        if(data.status === "success"){
            toast.success("User created",{
                position:'top-right',
                theme:"colored"
            })
            router.push('/')
        }
    }

    const cancelHandler = () => {
        setForm({
            name: '',
            email: '',
            lastName: '',
            phone: '',
            address: '',
            postalCode: '',
            date: '',
            products: [],
        })
        router.push('/')
    }

    return (
        <div className=''>
            <h2 className='text-white mt-6 mb-4 font-semibold text-lg'>Add-Customer-Page</h2>

            <Form form={form} setForm={setForm} />

            <div className='flex justify-between items-center mt-3'>
                <button
                    onClick={cancelHandler}
                    className='rounded  bg-red-500  p-1'
                >cancel</button>

                <button
                    onClick={saveHandler}
                    className='rounded  bg-green-500  py-1 px-2'
                >save</button>
            </div>


            <ToastContainer />

        </div>
    )
}

