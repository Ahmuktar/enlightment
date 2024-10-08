import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Section1 = () => {
  return (
    <div className="container flex flex-col-reverse lg:flex-row items-center sm:justify-center">
        <div className="w-full pt[61px] px-[20px] flex flex-col justify-center">
            <p className="font-medium text-lg text-gray mb-5">MEET THE VISIONARY</p>
            <h1 className="lg:text-5xl text-2xl font-bold mb-10 text-black w-full lg:w-[70%]">We work together! We listen. We advice.</h1>
            <p className="font-normal text-xl lg:text-2xl sm:w-[83%] lg:my-10 text-gray">
            Mrs Rosemary Lane founded “Enlightment” as a non-governmental organization (NGO) that focuses on improving the lives of indigent women, widows, children’s education support, orphans, and vulnerable children.
            </p>
            <div className="my-16">
                <Link href="/contacts" type="button" className="bg-[#301717] text-lg font-semibold text-white rounded-full hover:bg-primary w-full py-5 px-20">
                    Volunteer Now
                </Link>:
            </div>
        </div>
        <div className="w-full sm:mb-5 px-[20px]">
            <Image src="/images/smile.webp" className="border-[30px] w-full order-3 border-primary" width={500} height={500} alt="Image" />
        </div>
    </div>
  )
}

export default Section1