import { NavLink } from "react-router-dom";

export default function Header() {
  const linkClass = ({ isActive }) =>
    `nav-link ${isActive ? "nav-link-active" : ""}`;

  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" className="brand">
          MeliteStore
        </NavLink>

        <nav className="nav">
          <NavLink to="/" end className={linkClass}>
            Shop
          </NavLink>
          <NavLink to="/cart" className={linkClass}>
            Cart
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
