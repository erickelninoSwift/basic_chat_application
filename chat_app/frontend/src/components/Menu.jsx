import React from "react";
import "./menu.style.css";
const Menu = () => {
  return (
    <>
      <div className="menu">
        <div className="menu-item">
          <a href="/inbox">Inbox</a>
        </div>
        <div className="menu-item">
          <a href="/users">Users</a>
        </div>
        <div className="menu-item">
          <a href="/">Login</a>
        </div>
      </div>
    </>
  );
};

export default Menu;
