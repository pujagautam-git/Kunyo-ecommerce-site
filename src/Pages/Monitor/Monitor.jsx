import React from "react";
import { Link } from "react-router-dom";
import "./Monitor.css";
import monitors from "./MonitorData";
import monitorHero from "../../assets/Monitor/monitor banner.png";

const Monitor = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="gaming-hero"
        style={{ backgroundImage: `url(${monitorHero})` }}
      >
        <div className="gaming-hero-content">
          {/* <p className="breadcrumb">Home / Gaming / Laptops</p>
          <h1>Gaming Laptops</h1>
          <p>High performance machines built for gamers</p> */}
        </div>
      </section>

      {/* PAGE CONTENT */}
      <div className="gaming-page">

        {/* TOP BAR */}
        <div className="gaming-top-bar">
          <span className="section-title">🎮 Collection of Monitors ({monitors.length})</span>
          <span className="sort">Sort: Featured</span>
        </div>

        {/* PRODUCT GRID */}
        <div className="monitor-grid">
          {monitors.map((item) => (
            <Link
              to={`/product/${item.id}`}
              className="monitor-card"
              key={item.id}
            >
              {/* NEW BADGE */}
              {item.isNew && <span className="monitor-badge-new">NEW</span>}

              {/* IMAGE */}
              <img
                src={item.image}
                alt={`${item.brand} ${item.model}`}
                className="monitor-image"
              />

              {/* TITLE */}
              <h3 className="monitor-title">
                {item.brand} {item.model}
              </h3>

              {/* SPECS */}
              <ul className="monitor-specs">
                <li>🖥️ {item.size}</li>
                <li>📺 {item.resolution}</li>
                <li>⚡ {item.refreshRate}</li>
                <li>🎯 {item.responseTime}</li>
                <li>🎨 {item.panel}</li>
              </ul>

              {/* PRICE */}
              <div className="monitor-price-box">
                <span className="monitor-new-price">
                  Rs. {item.price.toLocaleString()}
                </span>
                <span className="monitor-old-price">
                  Rs. {item.oldPrice.toLocaleString()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Monitor;
