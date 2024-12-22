import React from "react";

function Header({ title = "placeholder", description = "n/a" }) {
  return (
    <div className="container">
      <h1 className="header-title">{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Header;
