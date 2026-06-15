import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import "./join.css";

const Join = () => {
  return (
    <>
      <Header />
      <Navbar />

      <section className="join-container">
        <div className="join-card">
          <h2>JOIN US</h2>

          <form>
            <div className="form-group">
              <label>Name *</label>
              <input type="text" placeholder="Name" required />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input type="email" placeholder="Email" required />
            </div>

            <div className="form-group">
              <label>Password *</label>
              <input type="password" placeholder="Password" required />
            </div>

            <div className="join-benefits">
              <p>Create an account and you will get:</p>

              <ul>
                <li>Sale promotions</li>
                <li>Bonus offers</li>
                <li>Updates for all new product releases!</li>
              </ul>

              <p className="privacy">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>
            </div>

            <button type="submit" className="signup-btn">
              SIGN UP
            </button>

            <p className="signin-text">
              Doesn't have an account? <span>Sign in</span>
            </p>
          </form>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Join;
