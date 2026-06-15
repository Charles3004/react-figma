import trendingMain from "../images/trendingMain.png";
import trending1 from "../images/trending1.png";
import trending2 from "../images/trending2.png";
import trending3 from "../images/trending3.png";

const Trending = () => {
  return (
    <section className="trending">
      <h2 className="trending-title">TRENDING SNEAKER STYLE</h2>

      {/* Top large image */}
      <div className="trending-hero">
        <img src={trendingMain} alt="Chunky Dad Sneakers" />

        <div className="trending-hero-text">
          <h3>Chunky Dad Sneakers</h3>
          <p>Bold, retro, and comfy</p>
          <button>SEE MORE →</button>
        </div>
      </div>

      {/* Bottom grid */}
      <div className="trending-grid">
        <div className="trending-card">
          <img src={trending1} alt="Performance Running Shoes" />
          <div className="card-text">
            <h4>Performance Running Shoes</h4>
            <p>Built for speed and support.</p>
            <button>SEE MORE →</button>
          </div>
        </div>

        <div className="trending-card">
          <img src={trending2} alt="Sustainable Sneakers" />
          <div className="card-text">
            <h4>Sustainable Sneakers</h4>
            <p>Eco-friendly and stylish.</p>
            <button>SEE MORE →</button>
          </div>
        </div>

        <div className="trending-card">
          <img src={trending3} alt="High-Tops for Streetwear" />
          <div className="card-text">
            <h4>High-Tops for Streetwear Looks</h4>
            <p>Fashionable with extra ankle support.</p>
            <button>SEE MORE →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
