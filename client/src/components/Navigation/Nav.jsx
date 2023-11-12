import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="logo-container">
          <Link to={`/`}>
            <h1>🛒</h1>
          </Link>
      </div>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          placeholder="Hôm nay bạn muốn mặc gì ;)"
        />
      </div>

      <div className="profile-container">
        <Link to={`/favorite`}>
          <FiHeart className="nav-icons" />
        </Link>

        <Link to={`/cart`}>
          <AiOutlineShoppingCart className="nav-icons" />
        </Link>

        <span class="dropdown">
          <AiOutlineUserAdd className="nav-icons" />
          <div class="dropdown-content">
            <Link to={`/login`}>Login</Link>
            <Link to={`/register`}>Register</Link>
          </div>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
