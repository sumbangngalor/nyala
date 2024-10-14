import React from "react";
import bannerImg from "../../../assets/img1.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../../utils/animate";

const Banner = () => {
  return (
    <>
      <section className="container py-12">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={bannerImg}
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>
          <div className="space-y-5 flex flex-col justify-center">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold"
            >
              We Believe that a team makes any project better
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-700 text-sm"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              earum accusantium tempore nam aliquid
            </motion.p>
            <motion.button
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="primary-btn"
            >
              Discover Now
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
