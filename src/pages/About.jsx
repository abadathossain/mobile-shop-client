import React from 'react'
import aboutImage from '../assets/banner.png'
const About = () => {
    return (
        <div className='container p-3'>
            <h1 className="text-4xl mb-3 mt-3 font-bold text-blue-700 text-center">About MobileMart</h1>
            <div className='flex'>

                <div className='w-1/2'>
                    <img src={aboutImage} alt="" />
                </div>
                <div className='w-1/2 flex flex-col justify-center items-center'>
                    <h5>Welcome to **MobileMart**</h5>

                    <p className='text-justify'>Your one-stop shop for the latest smartphones, accessories, and gadgets.
                        We offer a wide range of products from leading brands to meet all your mobile needs.
                        At MobileMart, we are committed to delivering high-quality products, great deals, and exceptional customer service.
                    </p>
                    <p >
                        Explore our collection today and discover why we are the trusted choice for mobile shopping!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About