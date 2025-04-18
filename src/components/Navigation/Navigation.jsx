import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import burger from "../../assets/images/burger.png"
import clsx from "clsx";
import css from "./Navigation.module.css"

const makeLinkClass = ({isActive}) => {
  return clsx(css.link, isActive && css.active)
}

export default function Navigation() {
  return (
    <Navbar expand="md" className={css.maindiv}>
      <Container fluid className="d-flex justify-content-between align-items-center">
        <NavLink to="/">
          <img src={logo} alt="Gren Logo" width={100} height={90} className={css.logo} />
        </NavLink>

        <Navbar.Toggle aria-controls="main-navbar-nav" className="me-2">
          <img src={burger} alt="Menu" className={css.burgerIcon}/>
        </Navbar.Toggle>

        <Navbar.Collapse id="main-navbar-nav" className={css.burger}>
          <Nav className={clsx("ms-auto", css.navCollapseMobile)}>
            <NavLink to="/" className={makeLinkClass}>Home</NavLink>
            <NavLink to="/grammaire" className={makeLinkClass}>Grammaire</NavLink>
            <NavLink to="/ecouter" className={makeLinkClass}>Écouter</NavLink>
            <NavLink to="/culture" className={makeLinkClass}>Culture</NavLink>
            <NavLink to="/jouer" className={makeLinkClass}>Jouer</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
