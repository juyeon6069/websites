import React from "react";
import { Link } from "react-router";
import "./Banner.css";

const MenuItem = ({ children, to }) => (
  <Link to={to} className="menu-item">
    {children}
  </Link>
);

const Banner = () => {
  return (
    <div
      className="menu"
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        textAlign: "right"
      }}
    >
      <MenuItem to={"/about"}>About</MenuItem>
      <MenuItem to={"/"}>Home</MenuItem>
    </div>
  );
};

export default Banner;
