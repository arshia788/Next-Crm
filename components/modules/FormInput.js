import React from 'react'

export default function FormInput({ name, lable, type, onChange, value }) {
  return (
    <div className='flex flex-col'>


      <lable
        className='text-blue-200 mb-4'
        htmlFor={name}>{lable}</lable>

      <input
        className='border-none rounded p-2 outline-none text-lg mb-8 bg-blue-100'
        value={value}
        type={type}
        onChange={onChange}
        id={name}
        name={name}
      />
      


    </div>
  )
}

