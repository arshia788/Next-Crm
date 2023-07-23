import React from 'react'
import FormInput from './FormInput'
import ItemList from './ItemList'

export default function Form({form, setForm}) {
  return (
    <div className='my-8'>

        {/* <FormInput />   */}
        <ItemList  form={form} setForm={setForm}/>
               
    </div>
  )
}

 