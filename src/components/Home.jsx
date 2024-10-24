import React from 'react';
import { Carousel } from 'flowbite-react';
import banner1 from "../asset/banner1.png";

const Home = () => {
  return (
    <div className='bg-neutralSilver' id='home'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        <Carousel>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt='Banner for lessons and insights' />
            </div>
            <div className='md:w-1/2'>
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lessons and insights<br />
                <div className="text-brandPrimary leading-snug">from 8 years</div>
              </h1>
              <p className='text-neutralGREY text-base mb-8'>
                Where to grow your business as a photographer: site or social media?
              </p>
              <button className='btn-primary'>Register</button>
            </div>
          </div>

        </Carousel>
      </div>
    </div>
  );
};

export default Home;

