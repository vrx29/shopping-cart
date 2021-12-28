import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="contact">
        <h2>NeoShop</h2>
        <div className="signup-email-cont">
          <input placeholder="Enter email address" />
          <button>Sign Up</button>
        </div>
        <p>Contact Info</p>
        <p>7 Prince Road Bengaluru, IN</p>
      </div>
      <div className="categories">
        <h4>Categories</h4>
        <ul>
          <li>Laptops & Computers</li>
          <li>Cameras & Photography</li>
          <li>Smart Phones & Tablets</li>
          <li>Video Games & Consoles</li>
          <li>Waterproof Headphones</li>
        </ul>
      </div>
      <div className="categories">
        <h4>Customer Care</h4>
        <ul>
          <li>My Account</li>
          <li>Discount</li>
          <li>Returns</li>
          <li>Orders History</li>
          <li>Order Tracking</li>
        </ul>
      </div>
      <div className="categories">
        <h4>Pages</h4>
        <ul>
          <li>Blog</li>
          <li>Browse the Shop</li>
          <li>Category</li>
          <li>Pre-Built Pages</li>
          <li>Visual Composer Elements</li>
          <li>WooCommerce Pages</li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
