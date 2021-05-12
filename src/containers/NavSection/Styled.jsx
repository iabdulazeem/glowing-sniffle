import styled from "styled-components";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export const NavDark = styled(Navbar)`
  background-color: transparent !important;
  margin-top: 1.5%;
  margin-bottom: 1.5%;
  margin-left: 3.5%;
`;

export const NavItem = styled(Nav.Link)`
  font-size: 0.9rem;
  font-weight: 80;
  font-family: latin-300, arabic-300, sans-serif;
  text-transform: uppercase;
  margin-right: 40px;
`;
