import React, { useContext } from 'react'
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import CartContext from '../../Store/CartContext';

function Cart(props) {

    const CtxItem = useContext(CartContext);

    
    const isOpenOrderButton = CtxItem.items.length > 0 ;
     

    const cartItemRemoveHandler = (id) => {
      CtxItem.removeItem(id);
    };
  
    const cartItemAddHandler = (item) => {
      CtxItem.addItem({ ...item, amount: 1 });
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
          {CtxItem.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))}
        </ul>
      );
    
    return (
        <div>
            <Modal onClick={props.onClose} >
                {/*<CartItem />*/}
                {cartItems}
                <div className={classes.total}>
                    <span>Total Price</span>
                    <span>{CtxItem.totalAmount.toFixed(2)}</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.onClose}>
                        Close
                    </button>
                     {isOpenOrderButton && <button className={classes.button}>Order</button>}
                </div>
            </Modal>
        </div>
    )
}

export default Cart
