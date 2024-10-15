import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../../utils/animate";

const Hero = ({ children }) => {
  return (
    <>
      <section className="container pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[450px] gap-10">{children}</div>
      </section>
    </>
  );
};

const Text = ({ head, desc }) => (
  <div className="flex flex-col justify-center gap-7 md:pr-8 xl:pr-52 text-center md:text-left pt-20 md:pt-0 px-10">
    <motion.h1 variants={SlideUp(0.2)} initial="initial" animate="animate" className="uppercase text-4xl font-bold font-serif text-primary">
      {head}
    </motion.h1>
    <motion.p variants={SlideUp(0.5)} initial="initial" animate="animate" className="text-sm font-semibold md:text-base leading-7">
      {desc}
    </motion.p>
    <div className="flex gap-5">
      <motion.button variants={SlideUp(0.8)} initial="initial" animate="animate" className="uppercase font-semibold px-6 py-3 rounded-lg bg-black text-white hover:!scale-110 hover:!shadow-xl duration-300 shadow-[4px_4px_0px_#6C6C6C]">
        Get Started
      </motion.button>
      <motion.button variants={SlideUp(1.1)} initial="initial" animate="animate" className="uppercase font-semibold px-6 py-3 rounded-lg border border-black hover:!scale-110 hover:!shadow-xl duration-300 shadow-[4px_4px_0px_black]">
        Contact Us
      </motion.button>
    </div>
  </div>
);

const Image = ({ img }) => (
  <div className="flex flex-col justify-center items-center">
    <motion.img initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} src={img} alt="" className="w-[80%] md:w-[700px] object-cover" />
  </div>
);

Hero.Text = Text;
Hero.Image = Image;

export default Hero;
