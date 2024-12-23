import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddProducts = () => {
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        const title = data.title
        const brand = data.brand
        const imageURL = data.imageURL
        const price = parseFloat(data.price)
        const stock = parseFloat(data.stock)
        const description = data.description
        const sellerEmail = user.email

        const product = { title, brand, imageURL, price, stock, description, sellerEmail };
        const token = localStorage.getItem("access-token");
        axios.post("https://mobile-shop-server-orpin-one.vercel.app/user/add-products", product, {
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then((res) => {
            if (res.data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Product added Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }
    return (
        <div className="card bg-base-200 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product title"
                        className="input input-bordered"
                        {...register("title", { required: true })}
                    />
                    {errors.title && <span>This field is required</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Brand name"
                        className="input input-bordered"
                        {...register("brand", { required: true })}
                    />
                    {errors.brand && <span>This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input
                        type="url"
                        placeholder="Image URL"
                        className="input input-bordered"
                        {...register("imageURL", {
                            required: true,
                            pattern: {
                                value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                                message: "Enter a valid URL",
                            },
                        })}
                    />
                    {errors.imageURL?.type === "required" && <span>This field is required</span>}
                    {errors.imageURL?.type === "pattern" && (
                        <span>Enter a valid URL</span>
                    )}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Product price"
                        className="input input-bordered"
                        {...register("price", {
                            required: true,
                            min: 0.01,
                        })}
                    />
                    {errors.price?.type === "required" && <span>This field is required</span>}
                    {errors.price?.type === "min" && <span>Price must be greater than zero</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Stock</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Stock quantity"
                        className="input input-bordered"
                        {...register("stock", {
                            required: true,
                            min: 1,
                        })}
                    />
                    {errors.stock?.type === "required" && <span>This field is required</span>}
                    {errors.stock?.type === "min" && <span>Stock must be at least 1</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select
                        className="select select-bordered w-full max-w-xs"
                        {...register("category", { required: true })}
                    >
                        <option value="">Select a category</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                        <option value="home">Home</option>
                        <option value="sports">Sports</option>
                        <option value="others">Others</option>
                    </select>
                    {errors.category && <span>This field is required</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        placeholder="Product description"
                        className="textarea textarea-bordered"
                        {...register("description", { required: true })}
                    ></textarea>
                    {errors.description && <span>This field is required</span>}
                </div>

                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddProducts