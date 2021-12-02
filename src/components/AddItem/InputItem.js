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
    props.addData(enteredName,enteredDescription,enteredPrice);
}

    return (
        
            <div className="card m-4">
                <form className={classes.form} onSubmit={submitHandler} >
                <label>Name</label>
                <div>
                    <input type="text" onChange={nameHandler} />
                </div>
                <label>Description</label>
                <div>
                    <input type="texterea" onChange={descriptionHandler}/>
                </div>
                <label>Price</label>
                <div>
                    <input type="number"onChange={priceHandler}/>
                </div>
                <div>
                    <button type='submit' className="btn btn-dark mt-3" >ADD</button>
                </div>
                </form>
            </div>
        
    )
}
export default InputItem