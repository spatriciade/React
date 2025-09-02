//import './Item.css';
import classes from "./Item.module.css"


function Item(props) {

    return ( 
      <h1 className={classes.alert}>No tasks availables. Add one?</h1>
    );
 

}

export default Item;