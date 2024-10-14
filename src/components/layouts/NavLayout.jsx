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
            <a key={id} href={link} className="mx-5 inline-block text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-white  hover:bg-primary transition-all duration-300 hover:!scale-110 hover:!shadow-xl rounded-lg font-bold">
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
