import { useState } from "react";
import CartProvider from "./store/CartProvider";
import classes from "./App.module.css";
import FilterCategories from "./components/filter/FilterCategories";
import Product from "./components/product/Product";
import Cart from "./components/shopping/Cart";
import { BiSearch ,BiFilterAlt } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import "./index.css";
import Svg from "./components/UI/Svg";
import Media from "react-media";

function App() {
  const [productState, setProductState] = useState(true);
  const [cartState, setCartState] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const productHandler = () => {
    setProductState((prevState) => !prevState);
    setCartState((prevState) => !prevState);
  };

  const cartHandler = () => {
    setCartState((prevState) => !prevState);
    setProductState((prevState) => !prevState);
  };
  return (
    <CartProvider>
      <nav className="navigation">
        <a href="/" className="brand-name">
          TeeRex Store
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <Svg />
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <a className={`${productState && classes.active}`} onClick={productHandler}>Products</a>
            </li>
            <li>
              <a className={`${cartState && classes.active}`} onClick={cartHandler}>
                <CgShoppingCart />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {productState && (
        <div>
          <div className={classes.search}>
            <input type="text" placeholder="Search" />
            <button className={classes.biSearch}>
              <BiSearch />
            </button>
            <Media query="(max-width:600px)">
              {matches => {
                return matches && <button className={classes.biSearch}><BiFilterAlt/></button>
              }}
            </Media>
          </div>
          <div style={{ display: "flex" , backgroundColor : "#dee2e6"}}>
            <Media query="(min-width:600px)">
              {(matches) => {
                return matches && <FilterCategories />;
              }}
            </Media>
            <Product />
          </div>
        </div>
      )}
      {cartState && <Cart />}
    </CartProvider>
  );
}

export default App;
