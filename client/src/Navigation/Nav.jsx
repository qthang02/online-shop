import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = ({ handleInputChange, query }) => {
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
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>

      <div className="profile-container">
        <Link to={``}>
          <FiHeart className="nav-icons" />
        </Link>

        <Link to={`/cart`}>
          <AiOutlineShoppingCart className="nav-icons" />
        </Link>

        <Link to={`/login`}>
          <AiOutlineUserAdd className="nav-icons" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
