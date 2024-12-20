import React from 'react'
import backgroundImage from '../../assets/banner.png'

const Banner = () => {
    return (
        <div
            className="hero min-h-screen "
            style={{

                backgroundImage: `url(${backgroundImage})`,
            }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-7xl font-bold">A H MOBILE SHOP</h1>
                    <p className="mb-5 text-2xl">
                        "Don't miss out on unbeatable discounts across all categories. Shop your favorite mobile,mobile accessories"
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Banner