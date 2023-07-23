import FormInput from "./FormInput"

export default function ItemList({ form, setForm }) {

    const { products } = form


    // pas har mogeh add beshe miad in products ro be array prodcuts ezafeh mikoneh
    const addHandler = () => {
        setForm({
            ...form,
            // gofti products hay ghabli ro bia save bokon 
            products: [...products, { name: "", price: '', qty: "" }],
        })
        console.log(products)
    }

    const changeHandler = async() => {

    }

    const deleteHandler=async ()=>{

    }

    return (
        <div className="border border-gray-500 p-2 rounded">

            <p className="text-xl text-white mb-8 mt-4">Purchased products</p>


            {
                products.map((product, index) => {
                    return (

                        <div key={index} className="border border-gray-400 p-2 rounded">
                            
                            <FormInput name="name" lable="product Name" type="text"
                                value={product.name} onChange={changeHandler}
                                
                            />

                            <div className="flex justify-between items-center">
                                <FormInput name="price" lable="Price" type="text"
                                    value={product.price} onChange={changeHandler}
                                />

                                <FormInput name="qty" lable="Qty" type="text"
                                    value={product.qty} onChange={changeHandler}
                                />
                            </div>

                            <button 
                            onClick={deleteHandler}
                            className="border border-red-500 rounded w-full text-red-500 p-1 text-center"
                            >Remove</button>

                        </div>
                    )
                })
            }

            {/* in miad ye item be on array add mikoneh  */}
            <button
                onClick={addHandler}
                className="border border-green-500 p-1 rounded my-4
        w-full text-green-500">Add-Item</button>

        </div>
    )
}

