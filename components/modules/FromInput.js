import React from 'react'

export default function FormInput({name, label, type, value, onChange}) {
  return (
    <div className='mt-8 flex flex-col'>
        
        <label 
        html={name}
        className='text-blue-200 mb-1'>{label}</label>

        <input 
        id={name}
        className='border-none outline-none rounded bg-blue-100 py-0.5'
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        />
    </div>
  )
}

 