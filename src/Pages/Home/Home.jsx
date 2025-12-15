import React from 'react'
import {Link} from "react-router-dom"
import HeroSlider from '../../Components/Heroslider/Heroslider'
import first from "../../assets/CART/first1.png"
import second from "../../assets/CART/first1.png"
import third from "../../assets/CART/first1.png"
import fourth from "../../assets/CART/first1.png"
import promoImage from "../../assets/Hero/gear.png"
import ProductSlider from "../../Components/ProductSlider/ProductSlider"
import deal1 from "../../assets/Deal/deal1.jpg"
import deal2 from "../../assets/Deal/cpu1.jpg"
import deal3 from "../../assets/Deal/deal2.jpg"
import deal4 from "../../assets/Deal/deal3.webp"
import "./Home.css";

const cards = [
  {
    id: 1,
    title: "GAMING & TECH",
    img: first,
  },
  {
    id: 2,
    title: "POWER YOUR PLAY",
    img: second,
  },
  {
    id: 3,
    title: "TOP TECH PICKS",
    img: third,
  },
  {
    id: 4,
    title: "HOT DEALS",
    img: fourth,
  },
];

const products = [
  {
    id: 1,
    img: deal1,
    title: "Darkflash DLM22 MATX PC Case black",
    discount: "Save 21%",
    price: "7,499.00",
    oldPrice: "9,500.00",
  },
  {
    id: 2,
    img: deal2,
    title: "Darkflash DLM22 MATX PC Case White",
    discount: "Save 21%",
    price: "7,499.00",
    oldPrice: "9,500.00",
  },
  {
    id: 3,
    img: deal3,
    title: "Lapop WK70III Wired Keyboard",
    discount: "Save 27%",
    price: "3,299.00",
    oldPrice: "4,500.00",
  },
  {
    id: 4,
    img: deal4,
    title: "Lapop WK75 Mechanical Gaming Keyboard",
    discount: "Save 29%",
    price: "5,349.00",
    oldPrice: "7,500.00",
  },
  {
    id: 5,
    img: "/images/keyboard3.png",
    title: "Lapop WK80III Wired Mechanical Keyboard",
    discount: "Save 31%",
    price: "3,799.00",
    oldPrice: "5,500.00",
  },
];

const Home = () => {
  return (
    <>
    <HeroSlider/>
          <div className="sale-section">
      <div className="sale-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className="sale-card">
            {/* // className={`sale-card ${active === card.id ? "active" : ""}`} */}
            {/* onClick={() => setActive(card.id)} */}
          
            <img src={card.img} alt={card.title} className="sale-image" />

            <div className="sale-content">
              <h3>{card.title}</h3>

              {/* {active === card.id && ( */}
                <div className="sale-buttons">
                   <Link to ="/new"><button>Buy Now</button></Link>
                 <Link to ="/new-arrival"> <button>View Details</button></Link>
                </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
    <ProductSlider/>
    
    <section className="just-for-you">
      <h2 className="section-title">Just For You</h2>

      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <span className="discount-badge">{item.discount}</span>

            <div className="image-wrap">
              <img src={item.img} alt={item.title} />
            </div>

            <h3 className="product-title">{item.title}</h3>

            <div className="rating">
              ★★★★★ <span className="review">(1)</span>
            </div>

            <p className="stock">✔ in stock</p>

            <div className="price">
              <span className="new">NRP {item.price}</span>
              <span className="old">NRP {item.oldPrice}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="show-more">Show more</button>
    </section>
     <section className="promo-section">
      {/* <h1 className="promo-heading">Better Deal</h1> */}

      <div className="promo-image-wrapper">
        <img src={promoImage} alt="Promo Banner" />
      </div>
    </section>
    </>
  )
}

export default Home