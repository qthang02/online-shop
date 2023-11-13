import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const token = localStorage.getItem("jwtToken");
  let isAuth = false;
  const isAdmin = localStorage.getItem("isAdmin");

  if (token) {
    console.log("token", token);
    isAuth = true;
  }

  // logout 
  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("isAdmin");
    window.location.href = "/";
  };

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
         {isAuth ? (
            <div class="dropdown-content">
              <Link to={`/profile`}>profile</Link>
              {isAdmin == "true" && (
                <>
                  <Link to={`/admin/product-manage`}>product manage</Link>
                  <Link to={`/admin`}>user manage</Link>
                  <Link to={`/admin`}>order manage</Link>
                </>
              )}
              <Link onClick={handleLogout}>logout</Link>
            </div>
         ) : (
            <div class="dropdown-content">
              <Link to={`/login`}>Login</Link>
              <Link to={"/register"}>Register</Link>
            </div>
         )}
        </span>
      </div>
    </nav>
  );
};

export default Nav;
