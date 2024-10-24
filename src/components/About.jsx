import React from 'react'
import Frame from"../asset/Frame.png"
import people from"../asset/people.png"
import club from"../asset/club.png"
import box from"../asset/box.png"
import finger from"../asset/finger.png"

const About=() =>{
  return (
    <div>
       {/* about text */}
       <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'id='about'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
            <div>
                <img src={Frame} alt=''/>
            </div>
            <div className='md:w-3/5 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'> The unseen of spending 3 years at pixelgrade</h2>
            <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            <button className='btn-primary'>Learn more</button>
            </div>
        </div>

       </div>
       {/* company stats */}
       <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/2'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'> Helping a local <br/> <span className='text-brandPrimary'>business reinvent</span></h2>
            <p> we reached here with our hard work and dedication</p>
            

            </div>
            {/* stats */}
            <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
            <div className='space-y-8'>
                 <div className='flex items-center gap-4'>
                  <img src={people} alt='' />
                     <div>
                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                    <p>members</p>
                     </div>
                 </div>
                 <div className='flex items-center gap-4'>
                  <img src={finger} alt='' />
                     <div>
                    <h4 className='text-2xl text-neutralDGrey font-semibold'>46,328</h4>
                    <p>event bookings</p>
                     </div>
                 </div>
               </div>
               <div className='space-y-8'>
                 <div className='flex items-center gap-4'>
                  <img src={club} alt='' />
                     <div>
                    <h4 className='text-2xl text-neutralDGrey font-semibold'>828,867</h4>
                    <p>clubs</p>
                     </div>
                 </div>
                 <div className='flex items-center gap-4'>
                  <img src={box} alt='' />
                     <div>
                    <h4 className='text-2xl text-neutralDGrey font-semibold'>1,926,436</h4>
                    <p>payments</p>
                     </div>
                 </div>
               </div>
            </div>
          </div>
       </div>
    </div>
  );
};

export default About