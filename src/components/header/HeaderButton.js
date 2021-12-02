import React from 'react'
import classes from './HeaderButton.module.css'
function HeaderButton(props) {
    return (
        <div>
            <button type="button" className={classes.button} onClick={props.openCart} >
                <span className={classes.icon}>
                    <i class="fa fa-shopping-cart"></i>
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>3</span>

            </button>
        </div>
    )
}

export default HeaderButton
