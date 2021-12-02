import React from 'react'
import ListItem from './ListItem'


const items = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
        id: 'm2',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
      },
      {
        id: 'm3',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
      },
]
const List =() => {

 
const list = items.map((item) => (
    <ListItem 
    key={item.id}
    name={item.name}
    description={item.description}
    price={item.price}
    />
    //console.log(item.name)
))

    return (
        <div>
            {list}
        </div>
    )
}

export default List
