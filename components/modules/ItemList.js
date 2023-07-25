import React from 'react';
import FormInput from '../modules/FromInput';

export default function ItemList({ form, setForm }) {

    const { products } = form;

                
    const addHandler = () => {
        setForm({
            ...form,
            products: [...products, { name: '', qty: '', price: '' }]
        })
    }

    const changeHandler = (e, index) => {
        const {name, value}= e.target
        const newProducts= [...products];
        newProducts[index][name]= value
        setForm({...form, products:newProducts})
    }

    const deleteHandler=(index)=>{
        const newProducts= [...products];
        newProducts.splice(index, 1);
        setForm({...form, products:newProducts});

    }

    return (
        <div className='border my-4 rounded p-2'>
            <h2 className='text-lg text-white'>Purchase-Product</h2>

            {
                products.map((item, index) => <ProductItem key={index}
                    product={item}
                    changeHandler={(e) => changeHandler(e, index)}
                    deleteHandler={(index) => deleteHandler(index)}
                />
                )
            }

            <button
                className='border
            rounded
            border-green-500 text-green-500 w-full text-center'
                onClick={addHandler}>Add-Item</button>
        </div>
    )
}




function ProductItem({ product, changeHandler, deleteHandler }) {
    return (

        <div className='border border-gray-400 my-2 p-1 rounded'>

            <FormInput
                name='name'
                label="Product Name"
                type="text"
                value={product.name}
                onChange={changeHandler}
            />

            <div className='flex justify-between items-center mb-4'>
                <FormInput
                    name='price'
                    label="Price"
                    type="text"
                    value={product.price}
                    onChange={changeHandler}
                />
                <FormInput
                    name='qty'
                    label="Qty"
                    type="text"
                    value={product.qty}
                    onChange={changeHandler}
                />
            </div>

            <button
                className='border
            rounded
            border-red-500 text-red-500 w-full text-center'
                onChange={deleteHandler}
            >remove</button>
        </div>
    )
}