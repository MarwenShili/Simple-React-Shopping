import React from 'react'
import classes from './HeaderButton.module.css'
import { useContext } from 'react'
import CartContext from '../../Store/CartContext'
function HeaderButton(props) {

    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;
  
    const numberOfCartItems = items.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);
    
    return (
        <div>
            <button type="button" className={classes.button} onClick={props.openCart} >
                <span className={classes.icon}>
                    <i class="fa fa-shopping-cart"></i>
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}> {numberOfCartItems} </span>

            </button>
        </div>
    )
}

export default HeaderButton
