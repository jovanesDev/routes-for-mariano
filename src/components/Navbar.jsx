import React from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../constants/routes";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        flex: "1",
        padding: "0 40px",
        marginBottom: "80px",
      }}
    >
      <span>
        <p>Logo</p>
      </span>
      <ul
        style={{
          display: "flex",
          flex: "1",
          listStyle: "none",
          justifyContent: "space-around",
        }}
      >
        {navItems.map(({style,to,title},index) => (
          <li key={index}>
            <NavLink
              style={style}
              to={to}
            >
             {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
