import React from "react";
import { useParams } from "react-router-dom";
import allProducts from "../../Components/allProducts";
import { useCart } from "../../context/CartContext";
import "./ProductDetails.css"

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = allProducts.find(p => p.id === id);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.model} />

      <div>
        <h2>{product.brand} {product.model}</h2>
        <h3>Rs. {product.price.toLocaleString()}</h3>
        <p className="stock">In stock</p>

        <h4>Specifications</h4>
        <ul>
          {Object.entries(product).map(([key, value]) => {
            const hidden = ["id", "image", "price", "oldPrice", "isNew", "category", "brand", "model"];
            if (hidden.includes(key)) return null;

            return (
              <li key={key}>
                <strong>{key.toUpperCase()}:</strong> {value}
              </li>
            );
          })}
        </ul>

        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>

        <button>Add to Wishlist</button>
      </div>
    </div>
  );
};

export default ProductDetails;
