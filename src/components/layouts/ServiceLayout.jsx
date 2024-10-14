import React from "react";
import Services from "../fragments/services/Services";
import Icon from "../atoms/icons/Icon";
import { serviceCard } from "../../data/datas";
import DrawOutlineButton from "../../utils/utility";
import SerivceBanner from "../fragments/services/SerivceBanner";
import { motion } from "framer-motion";
import { SlideUp } from "../../utils/animate";

const ServiceLayout = () => {
  return (
    <>
      <Services>
        <Services.Text
          title="We help your business grow faster."
          desc="Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient."
        />
        <Services.Data>
          {serviceCard.map(({ desc, icon, id, link, title, delay }) => (
            <motion.div
              variants={SlideUp(delay)}
              initial="initial"
              whileInView={"animate"}
              key={id}
              className="space-y-4 border-[1px] border-black p-6 hover:bg-black hover:text-white shadow-[3px_3px_0px_black] hover:shadow-[4px_4px_0px_#6C6C6C] duration-200"
            >
              <span className="border-2 border-black hover:border-white inline-block rounded-full p-2">
                <Icon name={icon} />
              </span>
              <h1 className="text-2xl font-bold font-serif">{title}</h1>
              <p className="text-gray-500 text-xs">{desc}</p>
              <DrawOutlineButton>
                <a href={link} className="font-semibold">
                  Read More →
                </a>
              </DrawOutlineButton>
            </motion.div>
          ))}
        </Services.Data>
        <div className="flex items-center justify-center pt-12">
          <motion.button
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            className="rounded-lg border-2  border-black bg-black px-6 py-3 font-semibold  text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#6C6C6C] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
          >
            More About Platform
          </motion.button>
        </div>
      </Services>
      <SerivceBanner />
    </>
  );
};

export default ServiceLayout;
