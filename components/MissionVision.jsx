import Link from 'next/link'
import React from 'react'

const MissionVision = () => {
  return (
    <section className="container mb-16 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
  {/* Vision Box */}
  <div className="w-full py-10 lg:py-20 px-6 lg:px-14 border-b-8 border-primary bg-gray-1">
    <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Our Vision</h1>
    <p className="text-2xl lg:text-2xl mb-6 lg:mb-11 text-gray">The welfare of the children is in our hands. Let’s help together!</p>
    <Link href="/" className="text-base lg:text-xl underline font-bold">Learn more</Link>
  </div>

  {/* Mission Box */}
  <div className="w-full py-10 lg:py-20 px-6 lg:px-14 border-b-8 border-secondary bg-gray-1">
    <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Our Mission</h1>
    <p className="text-2xl lg:text-2xl mb-6 lg:mb-11 text-gray">We help everyone from the homeless to the dependent, from the convicted to the deceived.</p>
    <Link href="/" className="text-base lg:text-xl underline font-bold">Contact Us</Link>
  </div>
</section>

  )
}

export default MissionVision