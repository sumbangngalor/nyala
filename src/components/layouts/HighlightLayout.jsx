import React from "react";
import Highlight from "../fragments/highlights/Highlight";
import Slider from "react-slick";
import { setting } from "../../utils/settings";
import { HighlightData } from "../../data/datas";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utils/animate";

const HighlightLayout = () => {
  return (
    <>
      <Highlight>
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-orange-500">our testimonial</h1>
          <p className="font-semibold text-3xl">What Our Students Say About Us</p>
        </div>
        <div>
          <Slider {...setting}>
            {HighlightData.map(({ id, name, text, img, delay, rate }) => (
              <motion.div variants={SlideLeft(delay)} initial="initial" whileInView="animate" key={id}>
                <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-slate-600">
                  <div className="flex gap-5 justify-start items-center">
                    <Highlight.Image img={img} />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-black">{name}</p>
                    <p>{name}</p>
                  </div>
                  <div className="py-6 space-y-4">
                    <Highlight.Text head={text} />
                    <p>{rate}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </Highlight>
    </>
  );
};

export default HighlightLayout;
