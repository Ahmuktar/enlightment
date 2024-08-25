import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Contacts = () => {
  return (
    <div>
        <Navbar />
        <section className="lg:h-[812px] pb-20 lg:pb-[150px] w-full bg-gray-1 text-black">
            <div className="container lg:flex items-end">
                <div className="w-full pt-28 lg:pt-[300px]">
                    <h1 className="text-5xl lg:text-8xl font-bold mb-4 text-primary">Feel free to contact us</h1>
                    <p className="text-2xl lg:text-2xl my-4">Like what we stand for? Want more information? Need assistance?</p>
                </div>
                <div className="w-full flex items-baseline justify-center">
                    <Image src="/images/image1.webp" className="w-full lg:w-80" width={300} height={300} alt="Image" />
                </div>
            </div>
        </section>

        <section className="flex sm:px-4 sm:flex-col-reverse items-center justify-center">
            <div className="w-full mt-[5%] lg:ml-[15%] items-center justify-center">
                <div className="lg:w-[80%]">
                    <p className="font-medium text-lg text-gray mb-5">GET IN TOUCH</p>
                    <h1 className="text-3xl lg:text-5xl font-bold mb-10  text-black">Connect with us today. Let’s talk together.</h1>
                </div>
            </div>
            <div className="w-full">
                <div className="w-full lg:flex items-start lg:mb-[154px] space-y-5 lg:mt-[-150px]">
                    <Image src="/images/hands.webp" className="border-[15px] lg:border-[30px] border-secondary sm:w-full lg:ml-[-200px]" width={300} height={300} alt="Image" />
                    <Image src="/images/children.webp" className="lg:ml-[50px] sm:w-full lg:w-[70%]" width={600} height={600} alt="Image" />
                </div>
            </div>
        </section>

        <section className="space-y-10 sm:px-4 mb-10 lg:mb-[150px]">
            <div className="flex items-center container gap-5 lg:gap-12">
                <div className="w-full flex flex-col">
                    <label className="text-lg text-gray">Name*</label>
                    <input required type="text" className="py-[19px] pl-[30px] pr-[20px] mb-4 rounded bg-[#FAFAFA] text-black text-lg" placeholder="Your first name" />
                </div>
                <div className="w-full flex flex-col">
                    <label className="text-lg text-gray"></label>
                    <input type="text" className="py-[19px] pl-[30px] pr-[20px] mb-4 rounded bg-[#FAFAFA] text-black text-lg" placeholder="Your last name" />
                </div>
            </div>
            <div className="flex items-center container gap-5 lg:gap-12">
                <div className="w-full flex flex-col">
                    <label className="text-lg text-gray">Email*</label>
                    <input required type="email" className="py-[19px] pl-[30px] pr-[20px] mb-4 rounded bg-[#FAFAFA] text-black text-lg" placeholder="Your email address" />
                </div>
                <div className="w-full flex flex-col">
                    <label className="text-lg text-gray">Phone*</label>
                    <input required type="tel" className="py-[19px] pl-[30px] pr-[20px] mb-4 rounded bg-[#FAFAFA] text-black text-lg" placeholder="Your phone number" />
                </div>
            </div>
            <div className="flex items-center container">
                <div className="w-full flex flex-col">
                    <label className="text-lg text-gray">Message*</label>
                    <textarea required type="text" className="py-[19px] pl-[30px] pr-[20px] mb-4 rounded bg-[#FAFAFA] text-black text-lg" placeholder="Your message"></textarea>
                </div>
            </div>
            
            <div className="flex flex-col items-start container justify-start gap-5 lg:gap-12">
                <small className="text-gray text-sm lg:w-[60%]">By signing and clicking Submit, you affirm you have read and agree to the <Link href="#" className="text-primary">Privacy Policy</Link> and <Link href="#" className="text-primary">Terms of Use</Link>, and want to receive news.</small>

                <Link href="/who-we-are" type="button" className="bg-secondary text-lg font-semibold text-black rounded-full hover:bg-primary w-fit py-5 px-20">
                    Send message
                </Link>
            </div>
        </section>

        <section className="w-full h-[300px] lg:h-[700px] mt-10 lg:my-20">
            <iframe loading="lazy" src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near" title="London Eye, London, United Kingdom" aria-label="London Eye, London, United Kingdom" className="w-full h-full"></iframe>
        </section>

        <Footer />
    </div>
  )
}

export default Contacts