import React from 'react'
import Card from './components/Card'

const Grid = (props) => {
    const listOfItems = props.items.map((item, id) => (
        <Card key={id} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating.rate} />
    ))

    return (
        <ul className='grid  lg:grid-cols-2 2xl:grid-cols-3 gap-10  '>
            {listOfItems}   
        </ul>
    )
}

export default Grid