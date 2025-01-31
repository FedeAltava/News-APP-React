import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const activeStyle = { color: "red" };

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li onClick={handleDropDown} >
          <span className="category-trigger" >Category</span>
          {dropDown && (
            <ul className="dropdown">
              <li>
                <NavLink
                  to="/category/business"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Business
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/category/entertainment"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Entertainment
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/category/science"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Science
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/category/technology"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Technology
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
