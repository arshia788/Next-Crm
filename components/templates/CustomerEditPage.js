import React, { useState } from 'react';
import Form from '../modules/Form';
import { useRouter } from 'next/router';
import moment from 'moment';

export default function CustomerEditPage({ data, id }) {

  const date = data.date ? moment(data.date).utc().format("YYY-MM-DD"):""
  const [form, setForm] = useState({
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    address: data.address || "",
    postalCode: data.postalCode || "",
    products: data.products || "",
    date: date|| "",
  })

  const router= useRouter()

  const saveHandler = async () => {

    // on id ro dadi ke bedoneh kodom ro taghir dadi
    const res = await fetch(`/api/edit/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" }
    })
    const data = await res.json();
    if(data.status === 'success'){
      router.push('/')
    }

  }

  const cancelHandler = () => {
    router.push('/')
  }

  return (
    <div className=''>
      <h4 className='text-white text-lg font-semibold'>Edit-Customer</h4>

      {/* deghat kon ke daroon form ham  formInput hast ham ItemList */}
      <Form form={form} setForm={setForm} />

      <div className='flex justify-between items-center mt-3'>
        <button
          onClick={cancelHandler}
          className='rounded  bg-red-500  p-1'
        >cancel</button>

        <button
          onClick={saveHandler}
          className='rounded  bg-green-500  py-1 px-2'
        >edit</button>
      </div>

    </div>
  )
}

