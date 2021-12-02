import ListForm from './ListForm'
import './ListItem.module.css'
const ListItem = (props) => {

    console.log(props.name)
    return (
        <form>
            <div className="row">
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.description}</p>
                            <ListForm />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default ListItem