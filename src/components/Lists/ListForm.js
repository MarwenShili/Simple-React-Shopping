import React from 'react'
import classes from './ListForm.module.css';

function ListForm(props) {
    return (
            <form>
                
                <div className={classes.actions}>
                <input style={{width:"40%"}} type='number' min='1' max='5' step='1' defaultValue='1' />
                <button type='submit'  className="btn btn-dark ml-3 ">ADD +</button>
                </div>
            </form>
    )
}

export default ListForm
