import React from "react";
import { motion } from "framer-motion";

const NavbarBanner = () => {
  return (
    <>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="bg-primary text-sm text-center font-semibold p-1 hidden lg:block relative text-white">
        Lorem ipsum dolor sit amet.
      </motion.section>
    </>
  );
};

export default NavbarBanner;
