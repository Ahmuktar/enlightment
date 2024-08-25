import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Section2 from '@/components/Section2'
import Stats from '@/components/Stats'
import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Volunteer = () => {
  return (
    <div>
        <title>Volunteer - Enlightment</title>
        <Navbar />
        <section className="lg:h-[812px] pb-20 lg:pb-[150px] w-full bg-gray-1 text-black">
            <div className="container lg:text-left text-center lg:flex items-end">
                <div className="w-full pt-28 lg:pt-[300px]">
                    <h1 className="text-3xl lg:text-8xl font-bold mb-4 text-primary">Become a volunteer</h1>
                    <p className="text-xl lg:text-2xl my-4">Help our cause by volunteering today.</p>
                </div>
                <div className="w-full flex items-baseline justify-center">
                </div>
            </div>
        </section>

        <section className="lg:flex px-4 items-center justify-between">
            <div className="w-full mt-[6%] flex items-center justify-center">
                <div className="lg:w-[60%] lg:ml-[15%] w-full">
                    <p className="font-medium text-lg text-gray mb-5">JOIN US IN OUR MISSION</p>
                    <h1 className="text-5xl font-bold mb-10  text-black">We’re bringing people together to end poverty for good.</h1>
                    <p className="font-normal text-xl lg:text-2xl my-10 text-gray">
                    There are many types of volunteering – you will probably find something suitable for your interests. For example, sports and event volunteering – they are especially relevant during international events like the Olympics, World Cup or Universiade.
                    </p>
                    <p className="font-normal text-xl lg:text-2xl my-10 text-gray">
                    If you know how to photograph, write texts, play a musical instrument or fold ships from paper, all this can also be useful.
                    </p>

                    <p className="font-normal text-xl lg:text-2xl my-10 text-black">
                    Even the saddest, weary urban routine, a person begins to feel needed and in demand.
                    </p>
                   
                </div>
            </div>
            <div className="w-full">
                <div className="w-full flex justify-end items-start mb-5 lg:mb-[154px] lg:mt-[-300px]">
                    <div className="flex w-fit flex-col-reverse lg:flex-row items-end gap-10">
                        <Image src="/images/image6.webp" className="w-full lg:w-fit" width={300} height={400} alt="Image" />
                        <Image src="/images/image7.webp" className="border-[15px] lg:border-[50px] border-secondary" width={600} height={600} alt="Image" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <Image src="/images/image8.webp" className="w-full lg:w-fit" width={300} height={300} alt="Image" />
                </div>
            </div>
            
        </section>

        <Section2 />

        <section className="py-10 lg:py-[150px]">
            <div className="mx-auto flex flex-col text-center items-center justify-center w-fit">
                <p className="font-medium text-lg text-gray uppercase mb-5">Donate now</p>
                <h1 className="text-3xl lg:text-5xl font-bold mb-11 lg:w-[65%] text-black">Explore ways you can help today.</h1>
                <div className="px-4 lg:container text-left flex lg:flex-row flex-col items-start gap-10">
                    <div className="w-full py-5 lg:py-20 px-5 lg:px-14 border-b-8 border-secondary bg-gray-1">
                        <h1 className="text-3xl lg:text-4xl font-bold mb-6">In person</h1>
                        <p className="text-xl lg:text-2xl mb-11 text-gray">You can make a donation visiting our office. Use the address below to find our location and make sure our intentions are real.</p>
                        <p href="/" className="text-lg lg:text-xl font-bold">348S, 11th St. Philly, NY 24107</p>
                    </div>
                    <div className="w-full py-5 lg:py-20 px-5 lg:px-14 border-b-8 border-primary bg-gray-1">
                        <h1 className="text-3xl lg:text-4xl font-bold mb-6">Over the phone or email</h1>
                        <p className="text-xl lg:text-2xl mb-11 text-gray">Call us on our hotline and the specialists will tell you how it is better to make a payment. They will also discuss your intentions.</p>
                        <p href="/" className="text-lg lg:text-xl font-bold">+1 234 567 8901
                            or
                            <Link href="#" className="text-primary"> enlightment@example.com</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="h-fit lg:h-[812px] lg:pb-[151px] w-full bg-[url('/images/bg.webp')] bg-no-repeat bg-center bg-cover text-slate-50">
            <div className="container flex items-center">
                <div className="lg:max-w-[65%] py-[70px] lg:py-[150px]">
                    <h1 className="text-4xl lg:text-8xl font-bold mb-4">Delivering help and hope through sponsorship.</h1>
                    <p className="text-xl lg:text-2xl my-4">Basic information needed to make a decision can be learned very quickly on the site or during a conversation.</p>
                    <div className="mt-16 lg:my-16">
                        <Link href="/contacts" type="button" className="bg-secondary text-lg font-semibold text-[#222] rounded-full hover:bg-primary w-full py-5 px-10">
                            Volunteer Now
                        </Link>
                    </div>
                </div>
            </div>
            
        </section>

        <Footer />
    </div>
  )
}

export default Volunteer