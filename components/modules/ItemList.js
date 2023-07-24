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

    // index ro baray in dadi ta befhami kodom dareh taghir miokneh

    const changeHandler=(e, index)=>{
        
        // khob in value mishe on neveshteh ma va name ham mishe hammon input ke dadi 
        const {name, value}= e.target;

        // inja omadi hame ro gerefti 
        const newProducts= [...products];

        // inja omadi az koll products ha index ro gerefti va bad omadi name ro gerfti va value ham mishe on nevesht 

        // ? in name dar asl hamoon nami hast ke be input ha dadi. 

        newProducts[index][name]= value

        setForm({...form, products:newProducts})
    }

    // dobareh omadi in index ha ro gerefti ke vase kodom hast in delete
    const deleteHandler=(index)=>{

        // ye clone tazeh sakhti
        const newProducts= [...products];

        // va inja ham ke omadi splice kardi va faght on object ro hazfeh kardi 
        newProducts.splice(index, 1);

        // va dobareh on update shodeh ro be products dadi 
        setForm({...form, products:newProducts})

    }



    return (
        <div className='border p-2 rounded'>
            <h2
                className='text-white mt-4  font-semibold text-lg'
            >purchased Products</h2>

            {
                products.map((item, index) => {
                    return (
                        <div key={index} className='my-4 border border-gray-400 rounded p-2'>
                            
                        {/* havaset bashe ke in onChange baray in hast ke to FormInput eshkal nagireh  */}

                            <FormInput name="name" label="Product Name" type="text"
                            value={products.name} 
                            onChange={e=> changeHandler(e, index)}
                            />

                            <div className='flex justify-between items-center my-8'>
                                <FormInput name="price" label="Price" type="text"    
                                value={products.price} 
                                onChange={e=> changeHandler(e, index)}
                                />

                                <FormInput name="qty" 
                                label="Qty" type="text" 
                                onChange={e=> changeHandler(e, index)}
                                value={products.qty} />
                            </div>

                            <button 
                            onClick={()=>deleteHandler(index)}
                            className='border text-red-500 p-1
                            border-red-500 rounded w-full '
                            >Remove</button>

                        </div>
                    )
                })
            }



            <button
                onClick={addHandler}
                className='border text-green-500 mt-8 p-1
                 border-green-500 rounded w-full'
            >Add-Item</button>

        </div>
    )
}

