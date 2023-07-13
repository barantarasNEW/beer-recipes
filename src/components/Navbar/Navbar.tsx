import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getLinks } from "./constants";
import './Navbar.scss';

const Navbar = () => {
  const {t} = useTranslation();

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {getLinks(t).map(({ href, name }) => (
          <li key={href} className="navbar__item">
            <NavLink to={href} className="navbar__link">
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;