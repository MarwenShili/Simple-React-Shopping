import React from 'react'
function ListForm(props) {
    return (
            <form>
                <input type='number' min='1' max='5' step='1' defaultValue='1' />
                <button type='submit' className="btn btn-dark m-3 ">ADD +</button>
            </form>
    )
}

export default ListForm
