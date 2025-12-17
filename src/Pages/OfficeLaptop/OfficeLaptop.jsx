import { Link } from "react-router-dom";
import "./OfficeLaptop.css";
import laptops from "./OfficeData";
import officeHero from "../../assets/office/officebanner.png";

const OfficeLaptop = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="gaming-hero"
        style={{ backgroundImage: `url(${officeHero})` }}
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
          <span className="section-title">🎮 Office Laptops ({laptops.length})</span>
          <span className="sort">Sort: Featured</span>
        </div>

        {/* PRODUCT GRID */}
        <div className="gaming-grid">
          {laptops.map((item) => (
            <Link
              to={`/product/${item.id}`}
              className="gaming-card"
              key={item.id}
            >
              {item.isNew && <span className="badge-new">NEW</span>}

              <img src={item.image} alt={item.model} />

              <h3>{item.brand} {item.model}</h3>

              {/* SPECS */}
              <ul className="specs">
                <li>{item.cpu}</li>
                <li>{item.gpu}</li>
                <li>{item.ram}</li>
                <li>{item.storage}</li>
              </ul>

              {/* PRICE */}
              <div className="price-box">
                <span className="new-price">Rs. {item.price}</span>
                <span className="old-price">Rs. {item.oldPrice}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default OfficeLaptop;
