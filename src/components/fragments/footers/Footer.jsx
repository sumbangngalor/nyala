import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          <div className="space-y-4 mx-auto md:m-0">
            <h1 className="text-xl font-bold">AR Shakir</h1>
            <p className="text-gray-400 text-sm max-w-[180px]">Simple innate summer fat appear basket his desire joy.</p>
            <div className="flex items-center gap-4">
              <ul className="flex items-center gap-4">
                <li className="cursor-pointer hover:!scale-110 hover:text-primary duration-300">
                  <Instagram />
                </li>
                <li className="cursor-pointer hover:!scale-110 hover:text-primary duration-300">
                  <Linkedin />
                </li>
                <li className="cursor-pointer hover:!scale-110 hover:text-primary duration-300">
                  <Twitter />
                </li>
                <li className="cursor-pointer hover:!scale-110 hover:text-primary duration-300">
                  <Youtube />
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 md:gap-8 mx-auto">
            <div className="space-y-4">
              <h1 className="text-xl font-bold">Company</h1>
              <div>
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:!scale-110 hover:text-primary duration-300">About Us</li>
                  <li className="cursor-pointer hover:!scale-110 hover:text-primary duration-300">Careers</li>
                  <li className="cursor-pointer hover:!scale-110 hover:text-primary duration-300">Blog</li>
                  <li className="cursor-pointer hover:!scale-110 hover:text-primary duration-300">Pricing</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-bold">Resources</h1>
              <div>
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:!scale-110 hover:text-primary duration-300">Templates</li>
                  <li className="cursor-pointer hover:!scale-110 hover:text-primary duration-300">Tutorial</li>
                  <li className="cursor-pointer hover:!scale-110 hover:text-primary duration-300">Free resources</li>
                  <li className="cursor-pointer hover:!scale-110 hover:text-primary duration-300">Contract templates</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4 flex flex-col content-center">
            <h1 className="text-xl font-bold">Join Our Newslatter</h1>
            <div className="flex items-center">
              <input type="email" name="" id="" placeholder="Your email address" className="border border-slate-300 py-2 px-3" />
              <button className="bg-[#00E1F0] py-2 px-5 text-white font-bold text-lg">Subscribe</button>
            </div>
            <span className="font-light">* Will send you weekly updates for your better finance management.</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

//
