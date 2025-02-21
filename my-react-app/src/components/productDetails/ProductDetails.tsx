import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {};

  console.log(product, "product");

  if (!product) return <div>No product data available</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <img src={product.images} alt="" />
    </div>
  );
};

export default ProductDetails;
