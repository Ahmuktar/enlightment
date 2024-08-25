import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutUs = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row sm:items-center justify-center mb-32 lg:mb-[129px] lg:px-0">
        {/* Left Section */}
        <div className="w-full lg:w-[60%] mb-12 lg:mb-0">
            <Image 
                src="/images/image1.webp" 
                className="lg:mx-auto lg:mb-[50px] sm:mt-8 mb-8" 
                width={300} 
                height={300} 
                alt="Image" 
            />
            {/* Bottom Images */}
            <div className="flex sm:flex-col-reverse sm-flex-col lg:flex-row place-items-end lg:place-items-start">
                <Image 
                src="/images/children.webp" 
                className="mb-6 lg:mb-[20px] order-2 w-full lg:w-auto" 
                width={600} 
                height={600} 
                alt="Image" 
                />
                <Image 
                src="/images/hands.webp" 
                className="border-[20px] sm:mb-10 lg:border-[30px] order-3 border-secondary sm:w-full lg:ml-[50px] lg:w-auto mt-6 lg:mt-0" 
                width={300} 
                height={300} 
                alt="Image" 
                />
            </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[40%] flex">
            <div className="w-full lg:w-[70%] lg:text-left">
            <p className="font-medium text-base lg:text-lg text-gray mb-4 lg:mb-5">ABOUT US</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 lg:mb-10 text-black">
                We are tender heart charity foundation.
            </h1>
            <p className="font-normal text-xl lg:text-3xl mb-8 lg:my-10 text-gray">
                The charitable foundation is created by people who know from their own experience about life’s difficulties. We want to return faith in good and give hope to those in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-5">
                <Link href="/who-we-are" className="text-lg lg:text-xl underline font-bold">Who We Are</Link>
                <Link href="/our-programs" className="text-lg lg:text-xl underline font-bold">Our Programs</Link>
            </div>
            </div>
        </div>
    </div>

  )
}

export default AboutUs