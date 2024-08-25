import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Section2 = () => {
  return (
    <section className="container lg:flex items-center pt-[50px] pb-[150px] justify-center">
        <div className="w-full px-[20px]">
            <Image src="/images/image2.webp" className="w-full" width={500} height={500} alt="Image" />
        </div>
        <div className="w-full">
            <div className="lg:pl-[146px] sm:mt-5 pr-[15px] flex flex-col justify-center">
                <p className="font-medium text-lg text-gray mb-5">WHAT WE DO</p>
                <h1 className="text-3xl lg:text-5xl font-bold mb-5 text-black">We do it for all people.</h1>
                <p className="font-normal text-2xl mb-3 lg:my-10 text-gray">
                Thirteen programs of the charitable foundation include the main areas of assistance.                
                </p>
                <div className="">
                    <div className="flex items-center mb-2 lg:mb-5 gap-6">
                        <Check className="text-primary" />
                        <p className="font-normal text-2xl text-black">Medicine help</p>
                    </div>
                    <div className="flex items-center mb-2 lg:mb-5 gap-6">
                        <Check className="text-primary" />
                        <p className="font-normal text-2xl text-black">We build and create</p>
                    </div>
                    <div className="flex items-center mb-2 lg:mb-5 gap-6">
                        <Check className="text-primary" />
                        <p className="font-normal text-2xl text-black">Water delivery</p>
                    </div>
                    <div className="flex items-center mb-2 lg:mb-5 gap-6">
                        <Check className="text-primary" />
                        <p className="font-normal text-2xl text-black">We care about</p>
                    </div>
                    <div className="flex items-center mb-2 lg:mb-5 gap-6">
                        <Check className="text-primary" />
                        <p className="font-normal text-2xl text-black">Education help</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section2