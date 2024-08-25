import React from 'react'

const Stats = () => {
  return (
    <section className="pt-[115px] pb-[113px] bg-[url('/images/map.webp')] bg-no-repeat bg-center bg-cover">
        <div className="mx-auto flex flex-col text-center lg:items-center lg;justify-center w-fit">
            <p className="font-medium text-lg text-gray uppercase mb-5">some statistic</p>
            <h1 className="text-3xl lg:text-5xl font-bold mb-11 w-[600px] lg:w-[65%] text-black">Some statistics that we want to show our viewers.</h1>
            <div className="flex sm:flex-wrap justify-between gap-20 lg:gap-48 items-center">
                <div>
                    <h1 className="text-[64px] font-bold text-primary w-[70%]">200+</h1>
                    <p className="font-bold">Closed projects</p>
                </div>
                <div>
                    <h1 className="text-[64px] font-bold text-primary w-[70%]">47bil</h1>
                    <p className="font-bold">Dollars we collected</p>
                </div>
                <div>
                    <h1 className="text-[64px] font-bold text-primary w-[70%]">180k</h1>
                    <p className="font-bold">People we helped</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Stats