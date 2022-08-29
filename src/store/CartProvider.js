import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items:[]
}

const cartReducer = (state,action) => {
    if(action.type === "ADD"){
        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingItem = state.items[existingItemIndex];
        let updatedItems;
        if (existingItem){
            const updatedItem = {
                ...existingItem
            }
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        }else{
            updatedItems = state.items.concat(action.item)
        }
        
        console.log(updatedItems);
        return {
            items:updatedItems
        }
    }
    if(action.type === "REMOVE"){
        let updatedItems = state.items.filter(item => item.id !== action.id);
        return {
            items:updatedItems
        }
    }

    
    return defaultCartState;
}
const CartProvider = props => {
    const [cartState, dispatchCart] = useReducer(cartReducer,defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCart({type: "ADD",item:item})
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCart({type:"REMOVE" , id:id})
    }
    const cartContext = {
        items: cartState.items,
        addItem : addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;