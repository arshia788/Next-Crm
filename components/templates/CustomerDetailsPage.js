import moment from 'moment/moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

export default function CustomerDetailsPage({ data }) {

    const router = useRouter();

    const deleteHandler = async () => {
        const res = await fetch(`/api/delete/${data._id}`, {
            method: "DELETE"
        })
        const data = await res.json()
    }

    return (
        <div>
            <h2 className='text-lg text-zinc-50 font-semibold'>Customer-Detail-Page</h2>

            <div className='flex justify-between bg-zinc-800 p-2 rounded my-4 '>
                <div className='flex flex-col text-zinc-50 gap-y-8'>
                    <p>name: <span className='text-green-500'>{data.name}</span> </p>
                    <p>lastName: <span className='text-green-500'>{data.lastName}</span> </p>
                    <p>email: <span className='text-green-500'>{data.email}</span> </p>
                    <p>phone: <span className='text-green-500'>{data.phone}</span> </p>
                </div>

                <div className='flex flex-col text-zinc-50 gap-y-8'>
                    <p>address: <span className='text-green-500'>{data.address}</span> </p>
                    <p>postalCode: <span className='text-green-500'>{data.postalCode}</span> </p>
                    <p>Date: <span className='text-green-500'>{moment(data.date).utc().format("YYYY-MM-DD")}</span> </p>
                </div>
            </div>

            <div className='text-zinc-50 grid grid-cols-12 mt-4'>

                <p className='col-span-4 mb-8 text-green-500'>Name</p>
                <p className='col-span-4 mb-8 text-green-500'>Price</p>
                <p className='col-span-4 mb-8 text-green-500'>Qty</p>

                {data.products.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <p className='col-span-4'>{item.name}</p>
                            <p className='col-span-4'>{item.price}</p>
                            <p className='col-span-4'>{item.qty}</p>
                        </React.Fragment>
                    )
                })}

                
            </div>

            <div className='rounded flex justify-between items-center bg-zinc-800 p-4 mt-8'>
                    <p className='text-lg text-zinc-50 font-medium'>Edit or Delete ?</p>
                    <button
                        onClick={deleteHandler}
                        className='rounded  bg-red-500  p-1'
                    >cancel</button>

                    <Link
                        className='rounded  bg-green-500  py-1 px-2'
                        // omadi id ro az data gerefti 
                        href={`/edit/${data._id}`}>Edit</Link>
                </div>

        </div>
    )
}

