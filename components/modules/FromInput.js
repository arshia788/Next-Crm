import React from 'react'

export default function FormInput({name, label, type, value, onChange}) {
  return (
    <div className='mt-8 flex flex-col'>
        
        <label 
        html={name}
        className='text-zinc-100 mb-1'>{label}</label>

        <input 
        id={name}
        className='border-none outline-none rounded bg-zinc-400 py-0.5'
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        />
    </div>
  )
}

 