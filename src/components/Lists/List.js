import React from 'react'
import ListItem from './ListItem'
import { useState } from 'react'

import InputItem from '../AddItem/InputItem'



const List =() => {
  const [isOpenInput, setIsOpenInput] = useState(false)

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
  
 
const list = <ListItem  list={enteredData} />
   
const shawForm =() =>{
  setIsOpenInput(isOpenInput => ! isOpenInput);
}


    return (
      <>
       <section>
         <div className="text-center m-3"> 
         <button className="btn btn-dark" onClick={shawForm}>add cart</button>
         </div>
        {isOpenInput && <InputItem addData={dataHandler} />}
        </section>
        <div className='card m-4'>
            {list}
            </div>
           
      </>
      
      
    )
}

export default List
