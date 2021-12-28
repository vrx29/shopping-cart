import { Link } from "react-router-dom";
import "./Navbar.css";
import { BsPersonCircle } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FcShop } from "react-icons/fc";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="menu">
        <div className="logo">
          <FcShop />
        </div>
        <div className="menu-item">
          <Link className="link" to="/products">
            Products
          </Link>
        </div>
        <div className="menu-item">
          <Link className="link" to="/blogs">
            Blogs
          </Link>
        </div>
        <div className="menu-item">
          <Link className="link" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="search">
        <input type="text" placeholder="Search for products, brands and more" />
      </div>
      <div className="actions">
        <div className="actions-item">
          <BsPersonCircle />
          <span>Profile</span>
        </div>
        <div className="actions-item">
          <AiOutlineHeart />
          <span>Wishlist</span>
        </div>
        <div className="actions-item">
          <BsHandbag />
          <span>Cart</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
