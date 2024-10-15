import React from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../../../utils/animate";
import banner1 from "../../../assets/banner1.png";
import banner2 from "../../../assets/banner2.png";
import banner3 from "../../../assets/banner3.png";
import banner4 from "../../../assets/banner4.png";
import banner5 from "../../../assets/banner5.png";

const HeroBanner = () => {
  return (
    <>
      <hr />
      <section className="container py-16">
        <div className="text-center mb-12">
          <h1 className="text-lg font-semibold">Terintegrasi</h1>
        </div>
        <div className="flex flex-wrap gap-6 justify-center lg:justify-between ">
          <motion.img variants={SlideLeft(0.2)} initial="initial" whileInView={"animate"} src={banner1} alt="" className="w-[110px]" />
          <motion.img variants={SlideLeft(0.4)} initial="initial" whileInView={"animate"} src={banner2} alt="" className="w-[110px]" />
          <motion.img variants={SlideLeft(0.6)} initial="initial" whileInView={"animate"} src={banner3} alt="" className="w-[110px]" />
          <motion.img variants={SlideLeft(0.8)} initial="initial" whileInView={"animate"} src={banner4} alt="" className="w-[110px]" />
          <motion.img variants={SlideLeft(1.0)} initial="initial" whileInView={"animate"} src={banner5} alt="" className="w-[110px]" />
        </div>
      </section>
      <hr />
    </>
  );
};

export default HeroBanner;
