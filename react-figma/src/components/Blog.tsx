import blog1 from "../images/blog1.png";
import blog2 from "../images/blog2.png";
import blog3 from "../images/blog3.png";
import blog4 from "../images/blog4.png";

const blogs = [
  {
    title: "Step Into Style: The Hottest Sneakers Now",
    desc: "Explore the must-have sneakers dominating streetwear and sportswear this year.",
    image: blog1,
  },
  {
    title: "Running on Clouds: Best Performance Shoes",
    desc: "Discover the top sneakers that blend speed, comfort, and style for peak performance.",
    image: blog2,
  },
  {
    title: "From Courts to Streets: How Sneakers Evolved",
    desc: "Uncover the journey of high-top sneakers from sports arenas to everyday wear.",
    image: blog3,
  },
  {
    title: "Sustainable Kicks: Eco-Friendly Footwear",
    desc: "Find stylish, sustainable footwear that's good for your feet—and the planet.",
    image: blog4,
  },
];

const Blogs = () => {
  return (
    <section className="blogs">
      {/* HEADER */}
      <div className="blogs-header">
        <h2>BLOGS</h2>
        <a href="#" className="see-all">
          See all →
        </a>
      </div>

      {/* BLOG GRID */}
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} />

            <div className="blog-content">
              <h4>{blog.title}</h4>
              <p>{blog.desc}</p>
              <a href="#" className="read-more">
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="blog-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default Blogs;
