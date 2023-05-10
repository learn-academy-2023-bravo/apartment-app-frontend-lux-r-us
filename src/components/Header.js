import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header class="bg-gray-900 text-white">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" class="text-xl font-semibold">
          LUX-R-US
        </a>
        <nav class="flex items-center">
          <a href="#" class="text-gray-400 hover:text-white mx-3">
            Home
          </a>
          <a href="#" class="text-gray-400 hover:text-white mx-3">
            About
          </a>
          <a href="#" class="text-gray-400 hover:text-white mx-3">
            Contact
          </a>
          <a
            href="#"
            class="bg-white text-gray-900 rounded-md py-2 px-4 hover:bg-gray-200 ml-3"
          >
            Sign Up
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
