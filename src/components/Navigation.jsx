import React from "react";
import { NavLink, Link } from "react-router";
import { FaCode } from "react-icons/fa";

function Navigation() {
  return (
    <div className="nav-bar">
      <div className="left-nav-content">
        <Link to={"/"} id="link" style={{ color: "white" }}>
          <FaCode size={24} />
        </Link>
        <Link to={"/"} id="link" style={{ color: "white" }}>
          <p>React Playground</p>
        </Link>
      </div>
      <div className="right-nav-content">
        <NavLink
          to={"/state/useState"}
          id="link"
          style={({ isActive }) => ({
            color: isActive ? "white" : "gray",
          })}
        >
          useState
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
