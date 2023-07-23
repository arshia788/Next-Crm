import React from 'react'

export default function FormInput({name, lable, type, onChange, value}) {
  return (
    <div className='flex flex-col text-blue-800'>
        <lable 
        className='mb-8'
        htmlFor={name}>{lable}</lable>

        <input 
        className='border-none rounded p-2 outline-none text-lg'
        value={value}
        type={type}
        onChange={onChange}
        id={name}
        name={name}
        />


    </div>
  )
}

 