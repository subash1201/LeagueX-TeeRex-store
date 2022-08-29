import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  console.log(cartCtx.items);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <div>
        <h1 style={{textAlign:"center"}}>Shopping Cart</h1>
        
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          imageURL={item.imageURL}
          price={item.price}
          onDelete={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </div>
  );
};

export default Cart;
