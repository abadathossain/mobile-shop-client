import feature1 from '../../assets/feature1.jpg'
import feature2 from '../../assets/feature2.jpeg'
import feature3 from '../../assets/feature3.jpeg'

const Feature = () => {
    return (
        <div>
            <h1 className="text-4xl mb-3 mt-3 font-bold text-blue-700 text-center">Some Features of Shop</h1>
            <div className='flex justify-center gap-3'>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={feature1}
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Wide Range of Products</h2>
                        <p>Latest smartphones, tablets, accessories, and gadgets from leading brands like Apple, Samsung, Xiaomi, and more.</p>

                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl -m-2">
                    <figure className="px-10 pt-10">
                        <img
                            src={feature2}
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Repair and Maintenance</h2>
                        <p>Expert mobile phone repair services for hardware and software issues.</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={feature3}
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">EMI & Financing Options</h2>
                        <p>Easy payment options like EMIs or zero-interest financing.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature