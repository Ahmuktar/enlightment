import Link from 'next/link'
import React from 'react'

const Section3 = () => {
  return (
    <section className="h-fit lg:h-[812px] lg:pb-[151px] w-full bg-[url('/images/bg.webp')] bg-no-repeat bg-center bg-cover text-slate-50">
        <div className="container flex items-center">
            <div className="lg:max-w-[65%] py-[70px] lg:py-[150px]">
                <h1 className="text-4xl lg:text-8xl font-bold mb-4">Delivering help and hope through sponsorship.</h1>
                <p className="text-2xl my-4">No one should leave their neighbor if he is in trouble..</p>
                <div className="mt-16 lg:my-16">
                    <Link href="/who-we-are" type="button" className="bg-secondary text-lg font-semibold text-[#222] rounded-full hover:bg-primary w-full py-5 px-20">
                        Volunteer Now
                    </Link>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Section3