import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import "./ProductDetails.css";

import mainShoe from "../images/shoe-main.png";
import thumb1 from "../images/shoe1.png";
import thumb2 from "../images/shoe2.png";
import thumb3 from "../images/shoe3.png";
import thumb4 from "../images/shoe4.png";

const ProductDetails = () => {
  const [activeImage, setActiveImage] = useState(mainShoe);

  const thumbnails = [thumb1, thumb2, thumb3, thumb4];

  return (
    <>
      <Header />
      <Navbar />

      <section className="product-details">
        {/* LEFT — IMAGE GALLERY */}
        <div className="product-gallery">
          <img src={activeImage} alt="Product" className="main-image" />

          <div className="thumbnail-row">
            {thumbnails.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                onClick={() => setActiveImage(img)}
                className="thumbnail"
              />
            ))}
          </div>
        </div>

        {/* RIGHT — PRODUCT INFO */}
        <div className="product-info">
          <h2>DUNK HI</h2>

          <div className="rating">
            ⭐⭐⭐⭐⭐ <span>(36 reviews)</span>
          </div>

          <h3 className="price">#35,000.00</h3>

          {/* SIZE */}
          <div className="option-group">
            <p>Size:</p>
            <div className="sizes">
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>10</button>
            </div>
          </div>

          {/* COLOR */}
          <div className="option-group">
            <p>Color:</p>
            <div className="colors">
              <span className="color black"></span>
              <span className="color blue"></span>
              <span className="color gray"></span>
              <span className="color white"></span>
              <span className="color brown"></span>
            </div>
          </div>

          <button className="add-cart-btn">ADD TO CART</button>

          <div className="payment-icons">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>PayPal</span>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="product-description">
        <h3>Description</h3>
        <p>
          The Nike Dunk High delivers classic basketball style with modern
          comfort. Premium materials and responsive cushioning make it perfect
          for everyday wear.
        </p>
      </section>

      {/* REVIEWS */}
      <section className="product-reviews">
        <h3>Reviews (5.5)</h3>

        <div className="review">
          <strong>Joshua O.</strong>
          <p>Great quality and very comfortable sneakers.</p>
        </div>

        <div className="review">
          <strong>Mary K.</strong>
          <p>Exactly like the pictures. Love them!</p>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="related-products">
        <h3>You may also like</h3>

        <div className="related-grid">
          <div className="product-card">
            <img src={thumb1} alt="" />
            <p>Air Max</p>
            <span>$120</span>
          </div>

          <div className="product-card">
            <img src={thumb2} alt="" />
            <p>Jordan Low</p>
            <span>$150</span>
          </div>

          <div className="product-card">
            <img src={thumb3} alt="" />
            <p>Nike Retro</p>
            <span>$140</span>
          </div>

          <div className="product-card">
            <img src={thumb4} alt="" />
            <p>Classic Runner</p>
            <span>$110</span>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductDetails;
