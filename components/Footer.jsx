import { PhoneCall } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="container">
  <div className="lg:flex items-center justify-between pt-[100px] lg:pt-[150px] pb-8 lg:pb-[66px]">
    <div className="w-full sm:mb-10">
      <Image src="/images/Logo.png" className="mb-5" width={200} height={200} alt="Logo" />
      <p className="text-gray text-lg lg:w-96">
        Good deeds are available to everyone! And there are a lot of responsive people around who are ready to help.
      </p>
    </div>
    <div className="w-full flex flex-col">
      <h1 className="text-xl lg:text-2xl font-bold text-[#222] mb-6">Subscribe to our newsletter</h1>
      <div className="relative w-full max-w-md">
        <input
          type="email"
          className="py-[19px] pl-[40px] pr-[80px] mb-4 rounded-full bg-[#FAFAFA] text-black text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="example@mail.com"
        />
        <button className="absolute right-2 top-2 bg-primary text-white py-2 px-4 rounded-full font-semibold text-lg">
          Submit
        </button>
      </div>
      <small className="text-gray text-sm lg:w-[60%]">
        By signing and clicking Submit, you affirm you have read and agree to the
        <Link href="#" className="text-primary">Privacy Policy</Link> and
        <Link href="#" className="text-primary">Terms of Use</Link>, and want to receive news.
      </small>
    </div>
  </div>
  <div className="lg:flex items-start justify-between pb-8 lg:pb-[66px]">
    <div className="w-full">
      <h2 className="mb-7 text-lg font-semibold">Company</h2>
      <ul className="grid gap-2">
        <li>
          <a
            className="cursor-pointer font-normal text-gray duration-200 hover:text-black hover:opacity-90"
            href="#"
          >
            Who We Are
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer font-normal text-gray duration-200 hover:text-black hover:opacity-90"
            href="#"
          >
            Our Programs
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer font-normal text-gray duration-200 hover:text-black hover:opacity-90"
            href="#"
          >
            Volunteer
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer font-normal text-gray duration-200 hover:text-black hover:opacity-90"
            href="#"
          >
            Events
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer font-normal text-gray duration-200 hover:text-black hover:opacity-90"
            href="#"
          >
            Contacts
          </a>
        </li>
      </ul>
    </div>
    <div className="w-full">
      <h2 className="mb-7 text-lg font-semibold">Social</h2>
      <ul className="grid gap-4">
        <li className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn Logo"
            className="w-6 h-6 mr-2"
          />
          <a
            className="cursor-pointer font-normal text-gray duration-200 hover:text-black hover:opacity-90"
            href="#"
          >
            LinkedIn
          </a>
        </li>
        <li className="flex items-center">
        <img
  src="https://upload.wikimedia.org/wikipedia/commons/5/56/X_logo_2023.svg"
  alt="X Logo"
  class="w-6 h-6 mr-2"
/>
          <a
            className="cursor-pointer font-normal text-gray duration-200 hover:text-black hover:opacity-90"
            href="#"
          >
            Twitter
          </a>
        </li>
        <li className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook Logo"
            className="w-6 h-6 mr-2"
          />
          <a
            className="cursor-pointer font-normal text-gray duration-200 hover:text-black hover:opacity-90"
            href="#"
          >
            Facebook
          </a>
        </li>
        <li className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram Logo"
            className="w-6 h-6 mr-2"
          />
          <a
            className="cursor-pointer font-normal text-gray duration-200 hover:text-black hover:opacity-90"
            href="#"
          >
            Instagram
          </a>
        </li>
        <li className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
            alt="YouTube Logo"
            className="w-6 h-6 mr-2"
          />
          <a
            className="cursor-pointer font-normal text-gray duration-200 hover:text-black hover:opacity-90"
            href="#"
          >
            YouTube
          </a>
        </li>
      </ul>
    </div>
  </div>
  <p className="pb-10 lg:pb-[20px] text-slate-600 text-sm text-center">
    Copyright © 2025 Binarify Community Outreach. All rights reserved.
    <a href="#" className="text-primary underline"> Privacy Policy</a>  |
    <a href="#" className="text-primary underline">Terms & Conditions</a>
  </p>
</footer>

  )
}

export default Footer