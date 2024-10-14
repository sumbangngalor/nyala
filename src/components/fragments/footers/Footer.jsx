import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="container py-24">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0 space-y-3 lg:max-w-[200px]">
            <a href="/" className="font-bold">
              AR Shakir
            </a>
            <p>Simple innate summer fat appear basket his desire joy.</p>
            <div className="flex gap-3">
              <Linkedin />
              <Instagram />
              <Twitter />
              <Youtube />
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
            <div>
              <h1 className="font-bold text-lg">Company</h1>
              <ul className="text-gray-600 text-sm">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
            <div>
              <h1 className="font-bold text-lg">Resources</h1>
              <ul className="text-gray-600 text-sm">
                <li>
                  <a href="#">Templates</a>
                </li>
                <li>
                  <a href="#">Tutorials</a>
                </li>
                <li>
                  <a href="#">Free resources</a>
                </li>
                <li>
                  <a href="#">Contract templates</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

// const Footerss = () => {
//   return (
//     <footer className="bg-gray-100 py-8 mt-16">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col sm:flex-row justify-between items-center">
//           <div className="mb-4 sm:mb-0">
//             <a href="/" className="font-bold text-xl text-gray-800">
//               AR Shakir
//             </a>
//             <p className="text-gray-600 text-sm mt-2">
//               Simple innate summer fat appear basket his desire joy.
//             </p>
//             <div className="flex mt-4">
//               <a href="#" className="text-gray-600 hover:text-gray-800 mr-2">
//                 <i className="fab fa-linkedin-in"></i>
//               </a>
//               <a href="#" className="text-gray-600 hover:text-gray-800 mr-2">
//                 <i className="fab fa-discord"></i>
//               </a>
//               <a href="#" className="text-gray-600 hover:text-gray-800 mr-2">
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a href="#" className="text-gray-600 hover:text-gray-800">
//                 <i className="fab fa-github"></i>
//               </a>
//             </div>
//           </div>
//           <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
//             <div>
//               <h3 className="font-bold text-lg text-gray-800 mb-2">Company</h3>
//               <ul className="text-gray-600 text-sm">
//                 <li>
//                   <a href="#" className="hover:text-gray-800">
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-gray-800">
//                     Careers
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-gray-800">
//                     Contact Us
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-bold text-lg text-gray-800 mb-2">
//                 Resources
//               </h3>
//               <ul className="text-gray-600 text-sm">
//                 <li>
//                   <a href="#" className="hover:text-gray-800">
//                     Blog
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-gray-800">
//                     FAQs
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-gray-800">
//                     Support
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-bold text-lg text-gray-800 mb-2">Legal</h3>
//               <ul className="text-gray-600 text-sm">
//                 <li>
//                   <a href="#" className="hover:text-gray-800">
//                     Terms of Service
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-gray-800">
//                     Privacy Policy
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
