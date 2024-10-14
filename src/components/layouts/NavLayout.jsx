import React from "react";
import Navbar from "../fragments/navbars/Navbar";
import logo from "../../assets/logo.png";
import { navbarData } from "../../data/datas";
import NavbarBanner from "../fragments/navbars/NavbarBanner";

const NavLayout = () => {
  return (
    <>
      <Navbar>
        <Navbar.Logo img={logo} text="Nyala" />
        <Navbar.NavData>
          {navbarData.map(({ id, title, link }) => (
            <a key={id} href={link} className="mx-4 text-sm font-semibold">
              {title}
            </a>
          ))}
        </Navbar.NavData>
        <Navbar.Button>MASUK</Navbar.Button>
      </Navbar>
      <NavbarBanner />
    </>
  );
};

export default NavLayout;
