import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../../utils/animate";

const Services = ({ children }) => {
  return (
    <>
      <section className="container py-20">{children}</section>
    </>
  );
};

const Text = ({ title, desc }) => (
  <div className="text-center space-y-3 mx-auto mb-9">
    <motion.h1
      variants={SlideUp(0.2)}
      initial="initial"
      whileInView={"animate"}
      className="text-3xl font-bold"
    >
      {title}
    </motion.h1>
    <motion.p
      variants={SlideUp(0.4)}
      initial="initial"
      whileInView={"animate"}
      className="text-gray-500 max-w-[500px] mx-auto"
    >
      {desc}
    </motion.p>
  </div>
);

const Data = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">{children}</div>
);

Services.Text = Text;
Services.Data = Data;

export default Services;
