import classes from './InputItem.module.css'
import { useState } from 'react'

const InputItem = (props) => {
    const [enteredName, setEnteredName] = useState();
    const [enteredDescription, setEnteredDescription] = useState();
    const [enteredPrice, setEnteredPrice] = useState();


    const nameHandler = (e) => {
        setEnteredName(e.target.value)
    }
    const descriptionHandler = (e) => {
        setEnteredDescription(e.target.value)
    }
    const priceHandler = (e) => {
        setEnteredPrice(e.target.value)
    }


    const submitHandler = (e) => {
        e.preventDefault()
        props.addData(enteredName, enteredDescription, enteredPrice);
    }

    return (

         <div className="card col-12">
             
            <form onSubmit={submitHandler} className="col-12">
                <div className={classes.control}>
                    <label htmlFor='title'>Name</label>
                    <input type='text' id='title' onChange={nameHandler} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='opening-text'>Description</label>
                    <textarea rows='5' id='opening-text' onChange={descriptionHandler}></textarea>
                </div>
                <div className={classes.control}>
                    <label htmlFor='price'>Price</label>
                    <input onChange={priceHandler} />
                </div>
                <button type="submit" className="btn btn-dark m-4">Add</button>
            </form>
        </div> 

    )
}
export default InputItem