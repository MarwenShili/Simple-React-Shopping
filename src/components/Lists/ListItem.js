import ListForm from './ListForm'
import classes from  './ListItem.module.css'
import Card from '../UI/Card'
const ListItem = (props) => {

    console.log(props.name)
    return (
        <form>
            <div className={classes.row}>
                <div className="col-sm-3">
                    <Card >
                        <div className="card-body">
                            <h2 className="card-title">{props.name}</h2>
                            <p className="card-text">{props.description}</p>
                            <ListForm />
                        </div>
                    </Card>
                </div>
            </div>
        </form>
    )
}
export default ListItem