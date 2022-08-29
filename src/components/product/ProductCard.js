
import classes from "./ProductCard.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const ProductCard = (props) => {
  const cartCtx = useContext(CartContext);

  const clothColor = String(
    props.color.charAt(0).toLowerCase() + props.color.slice(1)
  );

  const addToCartHandler = (event) => {
    event.preventDefault();
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      imageURL:props.imageURL,
      price:props.price
    })
  }

  return (
    <form >
    <div className={classes.productContainer}>
      <div className={classes.imageContainer}>
        <img src={props.imageURL} width="100%" alt={props.name} />
      </div>
      <h2 className={classes.title}>{props.name}</h2>

      <div className={classes.details}>
        <h3>₹ {props.price}</h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{ backgroundColor: `${clothColor}` }}
            className={classes.color}
          ></div>
          {props.gender === "Men" ? <p>M</p> : <p>W</p>}
        </div>
        <button className={classes.button} type="submit" onClick={addToCartHandler}>Add To Cart</button>
      </div>
      
    </div>
    </form>
  );
};

export default ProductCard;
