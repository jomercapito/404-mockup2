import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-8 md:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        <div className="flex flex-col">
          <h1 className="text-xl font-light leading-tight">
            <span className="block text-sm">Red</span>
            <span className="block text-sm">Curtain</span>
            <span className="block text-lg italic font-signature">Addict</span>
          </h1>
        </div>

        <div className="space-y-3 pl-4">
          <p className="hover:underline cursor-pointer">Events</p>
          <p className="hover:underline cursor-pointer">News</p>
          <p className="hover:underline cursor-pointer">Episodes</p>
        </div>

        <div className="space-y-3 pl-4">
          <p className="hover:underline cursor-pointer">For professionals</p>
          <p className="hover:underline cursor-pointer">About us</p>
          <p className="hover:underline cursor-pointer">Contact us</p>
          <p className="hover:underline cursor-pointer">Terms & conditions</p>
        </div>

        <div className="space-y-5">
          <p>
            Follow us on social media and join our growing community of
            performing arts enthusiasts.
          </p>
          <div className="flex space-x-5">
            <a href="#" className="bg-neutral-800 p-4 rounded-full">
              <FaInstagram className="text-white text-xl" />
            </a>
            <a href="#" className="bg-neutral-800 p-4 rounded-full">
              <FaFacebookF className="text-white text-xl" />
            </a>
            <a href="#" className="bg-neutral-800 p-4 rounded-full">
              <FaTwitter className="text-white text-xl" />
            </a>
            <a href="#" className="bg-neutral-800 p-4 rounded-full">
              <FaYoutube className="text-white text-xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-800 mt-12 pt-4 text-sm text-neutral-400 text-left px-8 md:px-20">
        © Red Curtain Addict 2021
      </div>
    </footer>
  );
}
