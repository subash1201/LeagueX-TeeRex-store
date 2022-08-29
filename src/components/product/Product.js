import { Fragment, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";

const Product = () => {
  const [clothes, setClothes] = useState([]);
  useEffect(() => {
    const fetchClothes = async () => {
      const response = await fetch(
        "https://leaguex.s3.ap-south-1.amazonaws.com/task/shopping/catalogue.json"
      );
      const data = await response.json();
      console.log(data);
      const loadedData = [];

      for (const key in data) {
        loadedData.push({
          id: key,
          name: data[key].name,
          imageURL: data[key].imageURL,
          price: data[key].price,
          color: data[key].color,
          gender: data[key].gender,
        });
      }

      setClothes(loadedData);
    };
    fetchClothes();
  }, []);
  return (
    
    <Fragment>
      
      <div className={classes.product}>
      {clothes.map((data) => (
        <ProductCard
          key={data.id}
          id={data.id}
          imageURL={data.imageURL}
          name={data.name}
          price={data.price}
          color={data.color}
          gender={data.gender}
        />
      ))}
      </div>
      
      </Fragment>
  );
};

export default Product;
