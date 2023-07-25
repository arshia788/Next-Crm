import React from 'react'
import Card from '../modules/Card';

export default function HomePage({ data }) {


    return (
        <div>
            {
                data.map(item=> <Card key={item._id} data={item}/>)
            }
        </div>
    )
}

