import React, { useState } from "react";
import shoe1 from "../../assets/productslide/123.jpg";
import shoe2 from "../../assets/productslide/456.jpg";
import shoe3 from "../../assets/productslide/112.jpg";
import shoe4 from "../../assets/productslide/789.jpg";
import "./ProductSlider.css";

const products = [
  {
    id: 1,
    img: shoe1,
     type: "Monitor",
    name: "ASUS TUF Gaming VG27AQ",
    model: "VG27AQ",
    price: "$329",
    oldPrice: "$399",
    size: "27-inch",
    resolution: "2560 × 1440 (QHD)",
    refreshRate: "165Hz",
    panel: "IPS",
    ports: "HDMI, DisplayPort",
    usage: "PlayStation 5 / Gaming Monitor",
  },
  {
    id: 2,
    img: shoe2,
    type: "Monitor",
    name: "LG UltraGear 24GN650",
    model: "24GN650-B",
    price: "$249",
    oldPrice: "$319",
    size: "24-inch",
    resolution: "1920 × 1080 (Full HD)",
    refreshRate: "144Hz",
    panel: "IPS",
    ports: "HDMI, DisplayPort",
    usage: "PS5 / FPS Gaming",
  },
  {
    id: 3,
    img: shoe3,
    type: "Laptop",
    name: "ASUS ROG Strix G15",
    model: "G513RC",
    price: "$1,199",
    oldPrice: "$1,399",
    processor: "AMD Ryzen 7 6800H",
    graphics: "NVIDIA RTX 3050",
    ram: "16GB DDR5",
    storage: "512GB SSD",
    display: "15.6-inch FHD 144Hz",
    usage: "Gaming / Streaming / Editing",
  },
   {
    id: 4,
    img: shoe4,
    type: "Monitor",
    name: "Samsung Odyssey G5",
    model: "LC27G55TQWNXZA",
    price: "$299",
    oldPrice: "$379",
    size: "27-inch Curved",
    resolution: "2560 × 1440 (QHD)",
    refreshRate: "144Hz",
    panel: "VA",
    ports: "HDMI, DisplayPort",
    usage: "Immersive Console Gaming",
  },
];

export default function ProductSlider() {
  const [center, setCenter] = useState(0);

  const prevIndex = (center - 1 + products.length) % products.length;
  const nextIndex = (center + 1) % products.length;

  const product = products[center];

  return (
    <section className="main-slider">
      <h3 className="slider-title">BESTSELLERS</h3>

      <div className="carousel">
        {/* Left */}
        <div className="shoe-card left" onClick={() => setCenter(prevIndex)}>
          <img src={products[prevIndex].img} alt="" />
        </div>

        {/* Center */}
        <div className="shoe-card center">
          <img src={product.img} alt={product.name} />
        </div>

        {/* Right */}
        <div className="shoe-card right" onClick={() => setCenter(nextIndex)}>
          <img src={products[nextIndex].img} alt="" />
        </div>
      </div>

      {/* DETAILS */}
      <div className="details">
        <h3>{product.name}</h3>
        <p className="model">Model: {product.model}</p>

        <p className="price">
          <span className="new">{product.price}</span>
          <span className="old">{product.oldPrice}</span>
        </p>

        {/* MONITOR DETAILS */}
        {product.type === "Monitor" && (
          <ul className="specs">
            <li>{product.size}</li>
            <li>{product.resolution}</li>
            <li>{product.refreshRate}</li>
            <li>{product.panel} Panel</li>
            <li>{product.ports}</li>
          </ul>
        )}

        {/* LAPTOP DETAILS */}
        {product.type === "Laptop" && (
          <ul className="specs">
            <li>{product.processor}</li>
            <li>{product.graphics}</li>
            <li>{product.ram}</li>
            <li>{product.storage}</li>
            <li>{product.display}</li>
          </ul>
        )}

        <p className="usage">{product.usage}</p>

        <div className="buttons">
          <button className="primary">ADD TO CART</button>
          <button className="secondary">BUY NOW</button>
        </div>
      </div>
    </section>
  )
};