import React from 'react'
import classes from './HeaderButton.module.css'
function HeaderButton() {
    return (
        <div>
            <button type="button" className={classes.button} >
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
