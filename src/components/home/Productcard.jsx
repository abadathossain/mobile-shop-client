
const Productcard = ({ product }) => {
    console.log(product)
    const { imageURL, brand, price, title, stock, sellerEmail, description } = product
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={imageURL}
                    alt="" />
            </figure>
            <div className="card-body">
                <h1 className="card-title text-2xl">{title}</h1>
                <h3 className="card-title">{brand}</h3>
                <h3 className="card-title">${price}</h3>
                <h3 className="card-title">No.of quantity:{stock}</h3>

                <p>{description}</p>
                <div className="card-actions ">
                    <button className="btn btn-primary w-full">Add to Wishlist</button>
                </div>
            </div>
        </div>
    )
}

export default Productcard