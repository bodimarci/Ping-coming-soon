import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => (
  <footer className="mt-20">
    <div>
      <ul className="flex justify-center p-5">
        <li className="border border-[#C2D3FF]  rounded-full">
          <FaFacebookF size={24} className="m-2 text-[#4F7DF3]" />
        </li>
        <li className="border border-[#C2D3FF]  rounded-full mx-6">
          <AiOutlineTwitter size={24} className="m-2 text-[#4F7DF3]" />
        </li>
        <li className="border border-[#C2D3FF]  rounded-full">
          <AiOutlineInstagram size={24} className="m-2 text-[#4F7DF3]" />
        </li>
      </ul>
    </div>
    <div className="text-center text-[#969696] pb-16">
      <h2>© Copyright Ping. All rights reserved.</h2>
    </div>
  </footer>
);

export default Footer;
