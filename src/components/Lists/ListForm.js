import React from 'react'

function ListForm() {
    return (
        <form>
            <input type='number' min= '1' max= '5' step= '1' defaultValue= '1' /> <br />
            <button  type='submit' className="btn btn-dark mt-3 s">ADD +</button>
        </form>
    )
}

export default ListForm
