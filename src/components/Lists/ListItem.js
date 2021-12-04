import ListForm from './ListForm'
import classes from './ListItem.module.css'
import React, { useContext } from 'react'
import CartContext from '../../Store/CartContext'
const ListItem = (props) => {

    const CtxCart = useContext(CartContext)
    const AddAmountToCart = (amount) => {
        CtxCart.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return (
        <>
                <li className={classes.meal}>
                    <div>
                        <h3>{props.name}</h3>
                        <div className={classes.description}>{props.description}</div>
                        <div className={classes.price}>{props.price}</div>
                    </div>
                    <footer className={classes.actions}>
                        <ListForm id={props.id} onAddToCart={AddAmountToCart}/>
                    </footer>
                </li>
            
        </>

    )
}
export default React.memo(ListItem)