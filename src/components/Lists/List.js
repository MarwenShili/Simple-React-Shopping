import React from 'react'
import ListItem from './ListItem'
import { useState } from 'react'
import InputItem from '../AddItem/InputItem'
import classes from './List.module.css';


const List = () => {
  const [isOpenInput, setIsOpenInput] = useState(false)

  const [enteredData, setEnteredData] = useState([
    {
      id: 'm1',
      name: 'Pizza',
      description: 'In restaurants, pizza can be baked in an oven with fire bricks above the heat source, an electric deck oven ...',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Crepo',
      description: 'Crepes are popular because their versatility makes them FUN to eat. Rolled up or folded, you can stuff and top them with virtually anything. ...',
      price: 24.99,
    },
    {
      id: 'm3',
      name: 'Suchi',
      description: 'Image result for description d une produit L objectif d une description produit est de fournir à vos ...',
      price: 2.99,
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
          <button style={{
            marginTop: "-135px ",
            fontWeight: "bold",
            padding:"10px"
            }}
            className="btn btn-dark"
            onClick={shawForm}>Add New Food
          </button>
        </div>
        <div style={{ marginTop: "-35px " }} >
          {isOpenInput && <InputItem addCard={dataHandler} />}
        </div>
      </section>
        <div className={classes.list} >
          {list}
        </div>

    </>
  )
}

export default List
