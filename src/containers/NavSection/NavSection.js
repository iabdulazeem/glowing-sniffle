import { Navbar, Nav } from "react-bootstrap";
import { HeaderLogo } from "../../components/HeaderLogo";
import { NavDark, NavItem } from "./Styled";

export const NavSection = (props) => {
  return (
    <>
      <NavDark bg="dark" expand="md" variant="dark">
        <Navbar.Brand>
          <HeaderLogo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavItem href="#home">Movies</NavItem>
            <NavItem href="#tvshows">Tv Shows</NavItem>
            <NavItem href="#arabic">Arabic</NavItem>
            <NavItem href="#kids">Kids</NavItem>
            <NavItem href="#channels">Channels</NavItem>
          </Nav>
        </Navbar.Collapse>
      </NavDark>
    </>
  );
};
