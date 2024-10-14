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
        <Hero.Text
          head="sketch luxury interior design"
          desc="Bring your dream to life with one-on-one design help & hand picked products tailored to your style, space and budget."
        ></Hero.Text>
        <Hero.Image img={heroImg} />
      </Hero>
      <HeroBanner />
    </>
  );
};

export default HeroLayout;
