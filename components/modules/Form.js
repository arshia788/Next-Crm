import React from 'react'
import FormInput from './FromInput'
import ItemList from './ItemList'

function Form({form, setForm}) {
  return (
    <div>
        {/* <FormInput /> */}
        <ItemList form={form} setForm={setForm}/>
    </div>
  )
}

export default Form