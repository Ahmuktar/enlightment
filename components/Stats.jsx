"use client"
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation only triggers once when in view
    threshold: 0.3, // Percentage of the section that should be visible before triggering
  });

  return (
    <section
      ref={ref}
      className="pt-10 lg:pt-[115px] lg:pb-[113px] bg-[url('/images/map.webp')] bg-no-repeat bg-center bg-cover"
    >
      <div className="mx-auto flex flex-col text-center lg:items-center lg:justify-center w-full">
        <p className="font-medium text-lg text-gray uppercase mb-5">some statistic</p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-11 w-full lg:w-[65%] text-black">
          Some statistics that we want to show our viewers.
        </h1>
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-48 items-center">
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-5xl lg:text-[64px] font-bold text-primary w-[70%]">
              {inView && <CountUp end={200} duration={2} />}+
            </h1>
            <p className="font-bold">Closed projects</p>
          </div>
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-5xl lg:text-[64px] font-bold text-primary w-[70%]">
              {inView && <CountUp end={47} suffix="bil" duration={2} />}
            </h1>
            <p className="font-bold">Dollars we collected</p>
          </div>
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-5xl lg:text-[64px] font-bold text-primary w-[70%]">
              {inView && <CountUp end={180} suffix="k" duration={2} />}
            </h1>
            <p className="font-bold">People we helped</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
