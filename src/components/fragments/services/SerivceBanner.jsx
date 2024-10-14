import { Star, Ribbon, Lightbulb } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../../utils/animate";

const SerivceBanner = () => {
  return (
    <>
      <motion.section
        variants={SlideUp(0.4)}
        initial="initial"
        whileInView={"animate"}
        className="container py-12"
      >
        <div className="flex flex-wrap gap-6 justify-center lg:justify-between border border-gray-400 p-6 rounded-lg lg:items-center">
          <h1 className="text-3xl font-bold text-center lg:max-w-[250px]">
            Among leave law built now.
          </h1>
          <div className="flex gap-4 items-center">
            <div className="border rounded-lg bg-slate-200 p-4 flex justify-start items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer">
              <Star />
            </div>
            <span className="font-semibold lg:max-w-[120px]">
              Village did remov enjoyed
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="border rounded-lg bg-slate-200 p-4 flex justify-start items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer">
              <Ribbon />
            </div>
            <span className="font-semibold lg:max-w-[120px]">
              Nay likely length sooner
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="border rounded-lg bg-slate-200 p-4 flex justify-start items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer">
              <Lightbulb />
            </div>
            <span className="font-semibold lg:max-w-[130px]">
              Expense windows adapted
            </span>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default SerivceBanner;
