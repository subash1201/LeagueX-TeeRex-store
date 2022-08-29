import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
      <div className={classes.cartContainer}>
        <img className={classes.image} src={props.imageURL} alt="shirt" />
        <div>
          <h2>{props.name}</h2>
          <h3>₹ {props.price}</h3>
        </div>
        <input type="number" placeholder="Qty" defaultValue={1}/>
        <button onClick={props.onDelete} type="button">Delete</button>
      </div>
  );
};

export default CartItem;
