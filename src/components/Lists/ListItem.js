import ListForm from './ListForm'
import classes from './ListItem.module.css'
import React from 'react'
const ListItem = (props) => {

    console.log(props.name)
    return (
        <>
        {props.list.map((item) => (
                <li className={classes.meal}>
                    <div>
                        <h3>{item.name}</h3>
                        <div className={classes.description}>{item.description}</div>
                        <div className={classes.price}>{item.price}</div>
                    </div>
                    <div>
                        <ListForm />
                    </div>
                </li>
                ))}
</>

    )
}
export default React.memo(ListItem)