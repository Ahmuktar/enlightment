import { PhoneCall } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="container">
        <div className="lg:flex items-center justify-between pt-[100px] lg:pt-[150px] pb-8 lg:pb-[66px]">
            <div className="w-full sm:mb-10">
                <Image src="/images/logoblack.webp" className="mb-5" width={200} height={200} alt="Logo" />
                <p className="text-gray text-lg lg:w-96">Good deeds are available to everyone! And there are a lot of responsive people around who are ready to help.</p>
            </div>
            <div className="w-full flex flex-col">
                <h1 className="text-xl lg:text-2xl font-bold text-[#222] mb-6">Subscribe to our newsletter</h1>
                <input type="text" className="py-[19px] pl-[40px] pr-[80px] mb-4 rounded-full bg-[#FAFAFA] text-black text-lg" placeholder="example@mail.com" />
                <small className="text-gray text-sm lg:w-[60%]">By signing and clicking Submit, you affirm you have read and agree to the <Link href="#" className="text-primary">Privacy Policy</Link> and <Link href="#" className="text-primary">Terms of Use</Link>, and want to receive news.</small>
            </div>
        </div>
        <div className="lg:flex items-center justify-between pb-8 lg:pb-[66px]">
            <div className="w-full"> 
                <h1 className="text-xl lg:text-2xl lg:w-60 mb-[14px] font-normal text-gray">2099 Walnut, Hill Ln undefined Lafayette, California 55262</h1>
                <div className="flex gap-3 my-3 text-primary items-center">
                  <PhoneCall />
                  <h1 className="text-xl lg:text-2xl font-bold text-primary">+12345678901</h1>
                </div>
                <p className="text-secondary text-xl lg:text-2xl underline w-96">enlightment@example.com</p>
            </div>
            <div className="w-full flex flex-col">
                  <div class="grid grid-cols-1 gap-6 grow md:grid-cols-3">
                    <div class="mt-4 md:mt-0">
                        <h2 class="mb-7 text-lg font-semibold">Company</h2>
                        <ul class="grid gap-2">
                            <li><a class="cursor-pointer font-normal text-gray duration-200 hover:text-black hover:opacity-90" href="#">Who We Are</a></li>
                            <li><a class="cursor-pointer font-normal text-gray duration-200 hover:text-black hover:opacity-90" href="#">Our Programs</a></li>
                            <li><a class="cursor-pointer font-normal text-gray duration-200 hover:text-black hover:opacity-90" href="#">Volunteer</a></li>
                            <li><a class="cursor-pointer font-normal text-gray duration-200 hover:text-black hover:opacity-90" href="#">Events</a></li>
                            <li><a class="cursor-pointer font-normal text-gray duration-200 hover:text-black hover:opacity-90" href="#">Contacts</a></li>
                            
                        </ul>
                    </div>
                    <div class="mt-4 md:mt-0">
                        <h2 class="mb-6 text-lg font-semibold">Social</h2>
                        <ul class="grid gap-2">
                            <li><a class="cursor-pointer font-normal text-gray duration-200 hover:text-black hover:opacity-90" href="#">LinkedIn</a></li>
                            <li><a class="cursor-pointer font-normal text-gray duration-200 hover:text-black hover:opacity-90" href="#">Twitter</a></li>
                            <li><a class="cursor-pointer font-normal text-gray duration-200 hover:text-black hover:opacity-90" href="#">Facebook</a></li>
                            <li><a class="cursor-pointer font-normal text-gray duration-200 hover:text-black hover:opacity-90" href="#">Instagram</a></li>
                            <li><a class="cursor-pointer font-normal text-gray duration-200 hover:text-black hover:opacity-90" href="#">YouTube</a></li>
                        </ul>
                    </div>
                    <div class="mt-4 md:mt-0">
                        <h2 class="mb-6 text-lg font-semibold">Legal</h2>
                        <ul class="grid gap-2">
                            <li><a class="cursor-pointer font-normal text-gray duration-200 hover:text-black hover:opacity-90" href="#">Terms and conditions</a></li>
                            <li><a class="cursor-pointer font-normal text-gray duration-200 hover:text-black hover:opacity-90" href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                  </div>
            </div>
        </div>
        <p className="pb-10 lg:pb-[150px] text-slate-600 text-sm">Zemez © . All rights reserved.</p>
    </footer>
  )
}

export default Footer