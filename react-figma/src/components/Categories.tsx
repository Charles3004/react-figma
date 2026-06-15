import CategoryCard from "../images/CategoryCard.png";
import CategoryCard1 from "../images/CategoryCard1.png";
import CategoryCard2 from "../images/CategoryCard2.png";
import CategoryCard3 from "../images/CategoryCard3.png";
import CategoryCard4 from "../images/CategoryCard4.png";
import CategoryCard5 from "../images/CategoryCard5.png";

const categories = [
  { name: "Men", image: CategoryCard },
  { name: "Kids", image: CategoryCard1 },
  { name: "Women", image: CategoryCard2 },
  { name: "Sport", image: CategoryCard3 },
  { name: "Brands", image: CategoryCard4 },
  { name: "Sandals", image: CategoryCard5 },
];

const Categories = () => {
  return (
    <section className="categories">
      <h2>Find Your Perfect Pair</h2>

      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.name} className="category-card">
            <img src={category.image} alt={category.name} />
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
