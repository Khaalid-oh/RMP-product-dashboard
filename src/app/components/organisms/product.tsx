"use client"
import { useEffect, useState } from "react";

function Product() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/15")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <h1>Product Details</h1>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price} USD</p>
          <p>Category: {product.category}</p>
          <img className="h-24 " src={product.image} alt={product.title} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Product;
