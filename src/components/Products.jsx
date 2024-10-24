import React from "react";
import pana from"../asset/pana.png"
import Logo from"../asset/Logo.png"
import Logo1 from"../asset/Logo1.png"
import Logo2 from"../asset/Logo2.png"
import Logo3 from"../asset/Logo3.png"
import Logo4 from"../asset/Logo4.png"
import Logo5 from"../asset/Logo5.png"
import blackimg from"../asset/blackimg.png"
const Products=()=>{
    return(
        <div>
       {/* about text */}
       <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'id="product">
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
            <div>
                <img src={pana} alt=''/>
            </div>
            <div className='md:w-3/5 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'> How to design your site footer like we did</h2>
            <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            <button className='btn-primary'>Learn more</button>
            </div>
        </div>

       </div>
       {/* company stats */}
       <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16' id="testimonial">
          <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/3'>
            <img src={blackimg} alt=""/>
            </div>
            {/* stats */}
            <div className="md:w-2/3 mx-auto">
                <div>
                    <p className="md:w-4/5 text-sm text-neutralGrey mb leading-7">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <h5 className="text-brandPrimary text-xl font-semibold mb-2">The Smith</h5>
                    <p className="text-base text-neutralGrey mb-8">british Dragon Boat Racing Associatation</p>
                    <div>
                        <div className="flex items-center gap-8 flex-wrap">
                            <img src={Logo}alt="" className="cursor-pointer"/>
                            <img src={Logo1}alt="" className="cursor-pointer"/>
                            <img src={Logo2}alt="" className="cursor-pointer"/>
                            <img src={Logo3}alt="" className="cursor-pointer"/>
                            <img src={Logo4}alt="" className="cursor-pointer"/>
                            <img src={Logo5}alt="" className="cursor-pointer"/>
                            
                            <div className="flex items-center gap-8">
                                <a href="/" className="font-bold text-brandPrimary hover:text-neutral-700">Meet all Customers {" "}
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="4" viewBox="0 0 6 4" fill="none" className="inline-block ml-2">
<path d="M4.02324 3.24222L5.12263 2.14283C5.25301 2.01245 5.25301 1.80106 5.12263 1.67068L4.02324 0.571289M5.02484 1.90676L0.350708 1.90676" stroke="#4CAF4F" />
</svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
          </div>
       </div>
    </div>
    )
}
export default Products
