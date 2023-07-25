import Expenses from '../Expenses'
import './List.css'

function List(props){
    return(
        <Expenses 
            despesa={props.despesa}
        />
    )
}

export default List