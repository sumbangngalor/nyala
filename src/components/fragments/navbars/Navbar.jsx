import React from "react";
import { motion } from "framer-motion";

const Navbar = ({ children }) => {
  return (
    <>
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className="container py-4">
        <div className="flex justify-between items-center">{children}</div>
      </motion.nav>
    </>
  );
};

const Logo = ({ img, text }) => (
  <div className="flex items-center gap-4">
    <img src={img} alt="" className="w-10" />
    <span className="font-bold text-2xl text-primary">{text}</span>
  </div>
);

const NavData = ({ children }) => <div className="hidden md:block">{children}</div>;

const Button = ({ children }) => <button className="sec-btn text-white">{children}</button>;

Navbar.Logo = Logo;
Navbar.NavData = NavData;
Navbar.Button = Button;

export default Navbar;
