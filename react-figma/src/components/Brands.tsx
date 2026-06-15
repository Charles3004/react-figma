import image40 from "../images/image40.png";
import image41 from "../images/image41.png";
import image42 from "../images/image42.png";
import image43 from "../images/image43.png";
import image44 from "../images/image44.png";
import image45 from "../images/image45.png";

const brands = [image40, image41, image42, image43, image44, image45];

const Brands = () => {
  return (
    <section className="brands">
      <h2>Brands</h2>

      <div className="brand-logos">
        {brands.map((brand, index) => (
          <div className="brand-logo" key={index}>
            <img src={brand} alt={`Brand ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
