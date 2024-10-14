import React from "react";
import Hero from "../fragments/heros/Hero";
import heroImg from "../../assets/heroImage.png";
import HeroBanner from "../fragments/heros/HeroBanner";
import { motion } from "framer-motion";
import { SlideUp } from "../../utils/animate";

const HeroLayout = () => {
  return (
    <>
      <Hero>
        <Hero.Text head="Lorem Ipsum Dolor Sit Amet, Constrec Posession " desc="Never at water me might. On formed merits hunted unable merely by mr whence or. Possession the unpleasing simplicity her uncommonly."></Hero.Text>
        <Hero.Image />
      </Hero>
      <HeroBanner />
    </>
  );
};

export default HeroLayout;
