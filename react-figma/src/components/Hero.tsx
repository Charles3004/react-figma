import heroImage from "../images/image29.png";

const Hero = () => {
  return (
    <section className="hero">
      {/* Left Arrow */}
      <button className="hero-arrow left">‹</button>

      {/* Right Arrow */}
      <button className="hero-arrow right">›</button>

      {/* Hero Content */}
      <div className="hero-content">
        {/* Left */}
        <div className="hero-left">
          <p className="hero-desc">
            Discover the latest drops, limited editions, and classic styles
            designed for every step of your journey
          </p>
        </div>

        {/* Center Image */}
        <div className="hero-image">
          <img src={heroImage} alt="Featured Sneaker" />
        </div>

        {/* Right */}
        <div className="hero-right">
          <p className="quality-text">Quality you can count on</p>

          <div className="hero-features">
            <span>🚚 Shipping</span>
            <span>↩ Returns</span>
            <span>✔ Warranty</span>
            <span>❓ FAQ</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <button className="hero-cta">Explore New Arrivals →</button>
    </section>
  );
};

export default Hero;
