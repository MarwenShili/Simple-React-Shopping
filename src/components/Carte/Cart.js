import React from 'react'
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

function Cart() {
    return (
        <div>
            <Modal >
                
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>250</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} >
                        Close
                    </button>
                     <button className={classes.button}>Order</button>
                </div>
            </Modal>
        </div>
    )
}

export default Cart
