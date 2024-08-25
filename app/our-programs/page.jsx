import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { programs } from '@/constants'
import { Dot } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OurPrograms = () => {
  return (
    <div>
      <title>Our Programs - Enlightment</title>
        <Navbar isLight={true} />
        <section className="lg:h-[812px] pb-20 lg:pb-[150px] w-full bg-[url('/images/handbg.webp')] bg-no-repeat bg-center bg-cover text-slate-50">
            <div className="container lg:pl-[100px] lg:flex items-start">
                <div className="w-full lg:max-w-[58%] pt-28 lg:pt-[250px]">
                  <h1 className="text-5xl lg:text-8xl font-bold mb-4">All about our programs</h1>
                  <p className="text-xl lg:text-2xl mt-5 lg:w-[500px]">We have created programs that will help people in various areas of life. Good should be distributed in all areas of life!</p>
                </div>
            </div>
        </section>

        <section className="container lg:mb-[150px] mt-10 lg:flex items-center justify-center">
          <div className="w-full lg:lg:px-[20px]">
            <Image src="/images/image9.png" className="w-full" width={500} height={500} alt="Image" />
          </div>
          <div className="w-full pt-5 lg:pt-[61px] lg:pl-[140px] flex flex-col justify-center">
            <p className="font-medium text-lg text-gray uppercase mb-5">Health program</p>
            <Link href={programs[0].link} className="text-4xl lg:text-5xl hover:text-primary font-bold mb-5 text-black">
              {programs[0].title}
            </Link>
            <p className="font-normal text-xl lg:w-[83%] my-2 text-gray">
              Poverty is a complex and multidimensional problem, the causes of which are both national and international.
            </p>
            <ul>
              <li className="flex items-center gap-1 text-xl text-gray"><Dot className="h-16 w-16" />Minimum subsistence level</li>
              <li className="flex items-center gap-1 text-xl text-gray"><Dot className="h-16 w-16" />A set of essential services and products</li>
              <li className="flex items-center gap-1 text-xl text-gray"><Dot className="h-16 w-16" />Income level per day</li>
            </ul>
            <p className="font-normal text-xl lg:w-[83%] my-3 lg:my-5 text-gray">
              All countries had a shared responsibility to take action to combat poverty.
            </p>
          </div>
        </section>

      <section className="container lg:mb-[150px] flex flex-col-reverse lg:flex-row items-center justify-center">
        <div className="w-full pt-5 lg:pt-[61px] flex flex-col justify-center">
          <p className="font-medium text-lg text-gray uppercase mb-5">Education</p>
          <Link href={programs[1].link} className="text-3xl lg:text-5xl hover:text-primary font-bold mb-5 text-black">
            {programs[1].title}
          </Link>
          <p className="font-normal text-xl w-[83%] my-2 text-gray">
            In today’s world, information is becoming increasingly valuable. A person without higher education can hardly count on a good highly paid position.
          </p>
          <ul>
            <li className="flex items-center gap-1 text-xl text-gray"><Dot className="h-16 w-16" />Classification of education programs</li>
            <li className="flex items-center gap-1 text-xl text-gray"><Dot className="h-16 w-16" />Goals and objectives of educational programs</li>
            <li className="flex items-center gap-1 text-xl text-gray"><Dot className="h-16 w-16" />Results of educational programs</li>
          </ul>
        </div>
        <div className="w-full lg:px-[20px]">
          <Image src="/images/image10.png" className="w-full" width={500} height={500} alt="Image" />
        </div>
      </section>

      <section className="container lg:mb-[150px] flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full lg:px-[20px]">
          <Image src="/images/image11.png" className="w-full" width={500} height={500} alt="Image" />
        </div>
        <div className="w-full pt-5 lg:pt-[61px] lg:pl-[140px] flex flex-col justify-center">
          <p className="font-medium text-lg text-gray uppercase mb-5">Empowerment</p>
          <Link href={programs[2].link} className="text-3xl lg:text-5xl hover:text-primary font-bold mb-5 text-black">
            {programs[2].title}
          </Link>
          <p className="font-normal text-xl lg:w-[83%] my-2 text-gray">
            A large number of gifted children from among orphans and low-income families remain outside the coverage of music and art schools.
          </p>
          <p className="font-normal text-xl lg:w-[83%] my-5 text-gray">
            Sometimes it is enough just to give children the opportunity to present their talents in public and receive recognition, enabling society to benefit from their skills.
          </p>
        </div>
      </section>

      <section className="container mb-[150px] flex flex-col-reverse lg:flex-row items-center justify-center">
        <div className="w-full pt-5 lg:pt-[61px] flex flex-col justify-center">
          <p className="font-medium text-lg text-gray uppercase mb-5">Empowerment</p>
          <Link href={programs[3].link} className="text-3xl lg:text-5xl hover:text-primary font-bold mb-5 text-black">
            {programs[3].title}
          </Link>
          <p className="font-normal text-xl lg:w-[83%] my-2 text-gray">
            Life is full of bright colors and happy moments, but often trouble knocks on a carefully created positive world and comfortable life.
          </p>
          <ul>
            <li className="flex items-center gap-1 text-xl text-gray"><Dot className="h-16 w-16" />Emergency priority actions</li>
            <li className="flex items-center gap-1 text-xl text-gray"><Dot className="h-16 w-16" />Legal advice</li>
          </ul>
          <p className="font-normal text-xl lg:w-[83%] my-5 text-gray">
            Assistance is provided to citizens who, as a result of a natural disaster, fire, or man-made disaster, lost the largest part of their property and necessities.
          </p>
        </div>
        <div className="w-full lg:px-[20px]">
          <Image src="/images/image12.png" className="w-full" width={500} height={500} alt="Image" />
        </div>
      </section>

      <section className="h-fit lg:h-[812px] lg:pb-[151px] w-full bg-[url('/images/oldbg.png')] mb-[-30px] bg-no-repeat bg-center bg-cover text-slate-50">
        <div className="container flex items-center">
          <div className="lg:max-w-[65%] py-[70px] lg:py-[150px]">
            <h1 className="text-4xl lg:text-8xl font-bold mb-4">Bringing people together to end poverty for good.</h1>
            <p className="text-xl lg:text-2xl my-4 w-[500px]">We are constantly providing assistance to low-income families in many areas.</p>
            <div className="mt-16 lg:my-16">
              <Link href="/contacts" type="button" className="bg-secondary text-lg font-semibold text-[#222] hover:text-white rounded-full hover:bg-primary w-full py-5 px-10">
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

export default OurPrograms