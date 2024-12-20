import React from 'react'

const Testimonials = () => {
    return (
        <div>
            <h1 className="text-4xl mb-3 mt-3 font-bold text-blue-700 text-center">Testimonials</h1>
            <div className='flex items-center justify-center'>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">John D.</h2>
                        <p>"I had an amazing experience shopping here! They helped me find the perfect phone for my needs and even offered a great discount. Highly recommended!"</p>

                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Emily R.</h2>
                        <p>"Fast and reliable service! The staff were friendly, and I got my phone delivered the very next day. Will shop here again!"</p>

                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Michael T.</h2>
                        <p>"Excellent customer support! They resolved an issue with my phone quickly and made the process so smooth. Great shop!"</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials