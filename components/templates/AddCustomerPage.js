import React, { useState } from 'react'
import Form from '../modules/Form'

export default function AddCustomerPage() {

    const [form, setForm]= useState({
        name:'', 
        email:'',
        lastName:'',
        phone:'',
        address:'',
        postalCode:'',
        date:'',
        products:[],
    })

    const cancelHandler=()=>{

    }

    const saveHandler=()=>{
        
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
        </div>
    )
}

