import React from "react";
import { useParams } from "react-router-dom";
import monitors from "./MonitorData";
import "./MonitorDetails.css";

const MonitorDetails = () => {
  const { id } = useParams();
  const product = monitors.find((item) => item.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="monitor-details-page">
      <div className="details-container">

        {/* LEFT IMAGE */}
        <div className="details-image">
          <img src={product.image} alt={product.model} />
        </div>

        {/* RIGHT CONTENT */}
        <div className="details-info">
          <h2>{product.brand} {product.model}</h2>
          <p className="sku">SKU: {product.sku || "N/A"}</p>

          <h3 className="price">Rs. {product.price.toLocaleString()}</h3>

          <p className="stock">In stock</p>

          <h4>Key Specs</h4>
          <ul>
            <li>Size: {product.size}</li>
            <li>Resolution: {product.resolution}</li>
            <li>Refresh Rate: {product.refreshRate}</li>
            <li>Response Time: {product.responseTime}</li>
            <li>Panel: {product.panel}</li>
          </ul>

          {/* BUTTONS */}
          <div className="action-buttons">
            <button className="add-cart">Add to Cart</button>
            <button className="wishlist">♡ Add to Wish List</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MonitorDetails;
