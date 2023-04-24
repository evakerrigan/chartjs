import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
      <li className="nav-item">
          <NavLink to="/line">Line</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/chart-arrow">Chart Arrow</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/bar-2">Bar 2</NavLink>
        </li>
      </ul>
    </nav >
  );
};