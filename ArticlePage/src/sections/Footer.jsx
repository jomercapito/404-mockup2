import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import footerLogo from "../assets/images/footer/footer-logo.svg";

export default function Footer() {
  return (
    <footer className="border-t bg-black text-white pt-12 pb-16">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between gap-8 px-8 md:px-0">
        <div className="w-full ml-12 md:w-[8%]">
          <img src={footerLogo} alt="Red Curtain Addict" />
        </div>

        <div className="w-full md:w-[10%] space-y-4 text-sm">
          <p className="hover:underline cursor-pointer">Events</p>
          <p className="hover:underline cursor-pointer">News</p>
          <p className="hover:underline cursor-pointer">Episodes</p>
        </div>

        <div className="w-full md:w-[20%] space-y-4 text-sm">
          <p className="hover:underline cursor-pointer">For professionals</p>
          <p className="hover:underline cursor-pointer">About us</p>
          <p className="hover:underline cursor-pointer">Contact us</p>
          <p className="hover:underline cursor-pointer">Terms & conditions</p>
        </div>

        <div className="w-full md:w-[40%] space-y-4 mr-8 text-sm">
          <p className="w-[70%]">
            Follow us on social media and join our growing community of
            performing arts enthusiasts.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-neutral-800 p-4 rounded-full">
              <FaInstagram className="text-white text-xl" />
            </a>
            <a href="#" className="bg-neutral-800 p-4 rounded-full">
              <FaFacebookF className="text-white text-xl fill-transparent stroke-white stroke-40" />
            </a>
            <a href="#" className="bg-neutral-800 p-4 rounded-full">
              <FaTwitter className="text-white text-xl fill-transparent stroke-white stroke-40" />
            </a>
            <a href="#" className="bg-neutral-800 p-4 rounded-full">
              <FaYoutube className="text-white text-xl fill-transparent stroke-white stroke-40" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl ml-32 mt-12 text-sm text-neutral-400 text-left px-8 md:px-0">
        © Red Curtain Addict 2021
      </div>
    </footer>
  );
}
