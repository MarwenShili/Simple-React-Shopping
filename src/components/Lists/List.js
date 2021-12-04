import React from 'react'
import ListItem from './ListItem'
import { useState } from 'react'
import InputItem from '../AddItem/InputItem'



const List = () => {
  const [isOpenInput, setIsOpenInput] = useState(false)

  const [enteredData, setEnteredData] = useState([
    {
      id: 'm1',
      name: 'Sushi1',
      description: 'Image result for description d une produit L objectif d une description produit est de fournir à vos clients des informations importantes',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Sushi2',
      description: 'Image result for description d une produit L objectif d une description produit est de fournir à vos clients des informations importantes',
      price: 22.99,
    },
    {
      id: 'm3',
      name: 'Sushi3',
      description: 'Image result for description d une produit L objectif d une description produit est de fournir à vos clients des informations importantes',
      price: 22.99,
    },

  ])

  const dataHandler = (enteredName, enteredDesc, enteredPrice) => {
    setEnteredData([...enteredData,
    {
      id: Math.random(),
      name: enteredName,
      description: enteredDesc,
      price: enteredPrice
    }
    ])
  }
  const list = enteredData.map((item) => (
    <ListItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price} />
  ))

  //button to show input forms 
  const shawForm = () => {
    setIsOpenInput(isOpenInput => !isOpenInput);
  }


  return (
    <>
      <section>
        <div className="text-center m-3">
          <button style={{ marginTop: "-100px " }} className="btn btn-dark" onClick={shawForm}>Add New Object</button>
        </div>
        <div style={{ marginTop: "-40px " }} >
          {isOpenInput && <InputItem addCard={dataHandler} />}
        </div>
      </section>
      <div className='card m-4'>
        {list}
      </div>

    </>


  )
}

export default List
