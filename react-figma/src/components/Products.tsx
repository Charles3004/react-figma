import prod1 from "../images/prod1.png";
import prod2 from "../images/prod2.png";
import prod3 from "../images/prod3.png";
import prod4 from "../images/prod4.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const productsData = [
  { name: "Product 1", image: prod1, price: "$129.00" },
  { name: "Product 2", image: prod2, price: "$129.00" },
  { name: "Product 3", image: prod3, price: "$129.00" },
  { name: "Product 4", image: prod4, price: "$129.00" },
];

const Products = () => {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="products">
      <div className="products-header">
        <h2>HAPPENING NOW!</h2>
        <a href="#" className="see-all">
          See all →
        </a>
      </div>

      <div className="product-grid">
        {productsData.map((product, index) => (
          <div className="product-card" key={index}>
            {/* SALE TAG */}
            <span className="sale-badge">SALE!</span>

            {/* WISHLIST */}
            <span className="wishlist">♡</span>

            {/* IMAGE + NAME */}
            <Link to="/product" className="product-link">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
            </Link>

            {/* RATING */}
            <div className="rating">
              ★★★★★ <span>4.9 (15 reviews)</span>
            </div>

            {/* PRICE */}
            <div className="price">
              <span className="old">$772.00</span>
              <span className="new">$299.00</span>
            </div>

            {/* STYLES */}
            <div className="styles">
              👟 👟 👟 <span>+3 Style</span>
            </div>

            {/* SPEC */}
            <p className="spec">
              <strong>Specification:</strong>
              <br />
              Running, Engineered mesh
            </p>
          </div>
        ))}
      </div>

      {/* SLIDER DOTS */}
      <div className="slider-dots">
        {[0, 1, 2, 3].map((dot) => (
          <span
            key={dot}
            className={`dot ${activeDot === dot ? "active" : ""}`}
            onClick={() => setActiveDot(dot)}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
