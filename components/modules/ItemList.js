import React from 'react'
import FormInput from './FromInput'

export default function ItemList({ form, setForm }) {

    const { products } = form


    const addHandler = () => {
        setForm({
            ...form,
            products: [...products, { name: '', qty: '', price: '' }]
        })
        console.log(products);
    }

    const changeHandler = (e, index) => {
        const { name, value } = e.target;
        const newProducts = [...products];
        newProducts[index][name] = value
        setForm({ ...form, products: newProducts })
    }

    const deleteHandler = (index) => {
        const newProducts = [...products];
        setForm({ ...form, products: newProducts })
    }



    return (
        <div className='border p-2 rounded'>
            <h2
                className='text-white mt-4  font-semibold text-lg'
            >purchased Products</h2>

            {
                // ? omadi inja va on compoenent pain ro seda zadi 
                products.map((item, index) => <ProductItem key={index}
                    product={item}
                    changeHandler={(e) => changeHandler(e, index)}
                    deleteHandler={() => deleteHandler(index)}
                />)
            }



            <button
                onClick={addHandler}
                className='border text-green-500 mt-8 p-1
                 border-green-500 rounded w-full'
            >Add-Item</button>

        </div>
    )
}


function ProductItem({ product, changeHandler, deleteHandler }) {
    return (
        <div className='my-4 border border-gray-400 rounded p-2'>

            <FormInput name="name" label="Product Name" type="text"
                value={product.name}
                onChange={changeHandler}
            />

            <div className='flex justify-between items-center my-8'>
                <FormInput name="price" label="Price" type="text"
                    value={product.price}
                    onChange={changeHandler} />


                <FormInput name="qty"
                    label="Qty" type="text"
                    onChange={changeHandler}
                    value={product.qty} />
            </div>

            <button
                onClick={() => deleteHandler(index)}
                className='border text-red-500 p-1
                            border-red-500 rounded w-full '
            >Remove</button>

        </div>
    )
}
