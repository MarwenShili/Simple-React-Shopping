import React, { useRef, useState } from 'react'
import classes from './ListForm.module.css';


function ListForm(props) {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
  
    const submitHandler = (event) => {
      event.preventDefault();
  
      const enteredAmount = amountInputRef.current.value;
      const enteredAmountNumber = +enteredAmount;
  
      if (
        enteredAmount.trim().length === 0 ||
        enteredAmountNumber < 1 ||
        enteredAmountNumber > 5
      ) {
        setAmountIsValid(false);
        return;
      }
  
      props.onAddToCart(enteredAmountNumber);
      // console.log(enteredAmountNumber);
    };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.actions}>
                <input style={{ width: "60px", marginBottom:"5px" }}
                    type='number'
                    min='1'
                    max='5'
                    step='1'
                    defaultValue='1'
                    ref={amountInputRef}
                /> <br />
                <button type='submit' style={{width:"60px"}} className="btn btn-dark " ><i className="fa fa-cart-plus fa-10x"></i></button>
                {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
            </div>
        </form>
    )
}

export default ListForm
