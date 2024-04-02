import React from "react";
import "./menu.style.css";
const Menu = () => {
  return (
    <>
      <div className="menu">
        <div className="menu-item">
          <a href="/inbox" className="text-xl">
            Inbox
          </a>
        </div>
        <div className="menu-item">
          <a href="/users" className="text-xl">
            Users
          </a>
        </div>
        <div className="menu-item">
          <a href="/" className="text-xl">
            Login
          </a>
        </div>
      </div>
    </>
  );
};

export default Menu;
