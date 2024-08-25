import EventCard from '@/components/EventCard'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { events } from '@/constants'
import React from 'react'

const Events = () => {
  return (
    <div>
        <Navbar isLight={true} />
        <section className="h-full w-full bg-[url('/images/handbg.webp')] bg-no-repeat bg-center bg-cover text-slate-50">
          <div className="flex lg:justify-center h-[400px] lg:min-h-[1105px] w-full max-w-[1285px] px-4 lg:px-0">
            <div className="flex flex-col lg:max-w-[58%] justify-center lg:text-left">
              <h1 className="text-5xl lg:text-8xl font-bold mb-4">View our latest & upcoming events</h1>
              <p className="text-2xl mt-4 lg:w-[500px]">Use our fundraising tools to create campaigns helping children in poverty.</p>
            </div>
          </div>
        </section>

        <section className="mt-20 pb-[150px]">
            <div className="mx-auto flex flex-col text-center items-center justify-center w-fit">
                <div className="lg:flex justify-between mx-auto container items-start gap-10 lg:gap-14">
                    { events.map((event) => {
                        return (
                            <EventCard key={event.title} event={event} />
                        )
                    }) }
                </div>
            </div>
        </section>

        <Footer />
    </div>
  )
}

export default Events