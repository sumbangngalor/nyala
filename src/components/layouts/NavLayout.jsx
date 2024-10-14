import React from "react";
import Navbar from "../fragments/navbars/Navbar";
import logo from "../../assets/logo.png";
import { navbarData } from "../../data/datas";

const NavLayout = () => {
  return (
    <>
      <Navbar>
        <Navbar.Logo img={logo} text="Interior" />
        <Navbar.NavData>
          {navbarData.map(({ id, title, link }) => (
            <a key={id} href={link} className="mx-4 text-sm font-semibold">
              {title}
            </a>
          ))}
        </Navbar.NavData>
        <Navbar.Button>Try For Free</Navbar.Button>
      </Navbar>
    </>
  );
};

export default NavLayout;
