import React from 'react'
import ListItem from './ListItem'
import { useState } from 'react'

import InputItem from '../AddItem/InputItem'



const List =() => {
  const [enteredData, setEnteredData] = useState([
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
  
  ])
  
  const dataHandler =(enteredName, enteredDesc, enteredPrice) => {
    setEnteredData([...enteredData, {id:Math.random() , name:enteredName , description: enteredDesc, price: enteredPrice}])
  }
  
 
const list = 
    <ListItem  list={enteredData} />
    //console.log(item.name)


    return (
      <>
      
        <div className='card m-4'>
            {list}
            </div>
        <InputItem addData={dataHandler} />
        
      </>
      
      
    )
}

export default List
