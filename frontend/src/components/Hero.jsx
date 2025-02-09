import React from 'react'
import { assets } from '../assets/assets'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import default styles for the carousel


const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className=' font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>
            </div>
      </div>
      {/* Hero Right Side */}

      <div className="w-1/2 p-4 bg-[#414141]">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
            {/* <p className="legend">Image 1</p> */}
          </div>
          <div>
            <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
            {/* <p className="legend">Image 2</p> */}
          </div>
          <div>
            <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
            {/* <p className="legend">Image 3</p> */}
          </div>
        </Carousel>
      </div>

      {/* <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" /> */}

    </div>
  );
};

export default Hero;
