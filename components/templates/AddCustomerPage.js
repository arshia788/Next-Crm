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
    const router = useRouter();

    const saveHandler = async () => {
        const res = await fetch('/api/customer', {
            method: "POST",

            // !havaset bashe ke form ro be name data dadi be back

            body: JSON.stringify({ data: form }),
            headers: { "Content-Type": "application/json" }
        })
        const data = await res.json();

        if (data.status === "success") {
            toast.success("The user created", {
                position:"top-right",
                closeOnClick:true,
                theme:"colored"
            })
            router.push('/');
        }
    }

    const cancelHandler = async () => {
        setForm({
            name: '',
            email: '',
            lastName: '',
            phone: '',
            address: '',
            postalCode: '',
            date: '',
            products: [],
        }),

        router.push('/')
    }



    return (
        <div className='flex flex-col'>
            
            <h4 className='text-white my-4'>Add New Customer</h4>

            <Form form={form} setForm={setForm} />

            <div className='flex justify-between items-center'>
                <button
                    className='bg-red-500 rounded px-3 py-1'
                    onClick={cancelHandler}
                >cancel</button>
                <button
                    onClick={saveHandler}
                    className='bg-green-500 rounded px-3 py-1 '
                >save</button>
            </div>

            <ToastContainer />

        </div>
    )
}

