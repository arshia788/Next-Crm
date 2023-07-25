import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function Card({ data }) {

    const { name, email } = data;
    const router= useRouter();

    const deleteHandler= async(id)=>{
        console.log(id);
        const res= await fetch(`/api/delete/${id}`,{
            method:"DELETE",
        })
        const data= await res.json()

        // inja ham gofti ke biad reload bokoneh site ro 
        if(data.status === 'success') router.reload()
    }

    return (
        <div className='flex justify-between items-center bg-zinc-700 rounded p-3 mb-4'>

            <div className='flex'>
                <p className='text-zinc-100 mx-4'>{name}</p>
                <p className='text-zinc-100 mx-4'>{email}</p>
            </div>

            <div className='flex gap-x-4 '>
                <button 
                onClick={()=> deleteHandler(data._id)}
                className='border rounded border-red-500 text-red-500 px-2 py-1'>delete</button> 
                
                <Link 
                href={`/edit/${data._id}`}
                className='border rounded border-blue-500 text-blue-500 px-2 py-1'>edit</Link >
                <Link 
                href={`/customer/${data._id}`}
                className='border rounded border-orange-500 text-orange-500 px-2 py-1'>details</Link >
            </div>
        </div>
    )
}

