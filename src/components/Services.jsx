import React from 'react';
import Logo from '../asset/Logo.png';
import Logo1 from '../asset/Logo1.png';
import Logo2 from '../asset/Logo2.png';
import Logo3 from '../asset/Logo3.png';
import Logo4 from '../asset/Logo4.png';
import Logo5 from '../asset/Logo5.png';
import Logo6 from '../asset/Logo6.png';
import membership from '../asset/membership.png';
import national from '../asset/national.png';
import club from '../asset/club.png';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Membership Organisation",
            description: "Our membership management software provides full automation of membership renewals and payments",
            image: membership
        },
        {
            id: 2,
            title: "National Associations",
            description: "Our membership management software provides full automation of membership renewals and payments",
            image: national
        },
        {
            id: 3,
            title: "Clubs And Groups",
            description: "Our membership management software provides full automation of membership renewals and payments",
            image: club
        },
    ];

    const logos = [Logo, Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
            <div className='text-center my-8'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
                <p className='text-neutralDGrey'>We have been working with some Fortune 500+ clients</p>
                <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                    {logos.map((logo, index) => (
                        <img src={logo} alt={`Logo ${index + 1}`} key={index} />
                    ))}
                </div>
            </div>
            <div className='md-20 md:w-1/2 mx-auto text-center'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Manage your entire community in a single system</h2>
                <p className='text-neutralDGrey'>Who is Nextcent suitable for?</p>
            </div>
            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                {services.map(service => (
                    <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                        <div>
                            <div className='bg-green-50 h-14 w-14 mx-auto rounded-t1-3xl rounded-br-3xl'>
                                <img src={service.image} alt={service.title} className='-ml-5' />
                            </div>
                            <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                            <p className='text-sm text-neutralGrey'>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
