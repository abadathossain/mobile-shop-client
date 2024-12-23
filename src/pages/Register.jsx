import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import SocialLogin from "../components/login-register/SocialLogin";

const Register = () => {
    const { createUser } = useAuth()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // console.log(createUser)
    const navigate = useNavigate()

    const onSubmit = data => {
        const email = data.email
        const role = data.role
        const status = role === 'buyer' ? 'Approved' : 'Pending'
        const whishlist = []
        const userData = { email, role, status, whishlist }
        // console.log(userData)

        createUser(data.email, data.password).then(() => {
            axios.post('https://mobile-shop-server-orpin-one.vercel.app//users', userData).then((res) => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Registration successfully done",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                navigate('/')

            })
        })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered"
                                {...register("email", { required: true })}

                            />
                            {errors.email && <span>This field is required..........</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered"
                                {...register("password", { required: true, minLength: 8 }

                                )}
                            />
                            {errors.password?.type === "password" && <span>This field is required pass..........</span>}
                            {errors.password?.type === "minLength" && <span>This field is not 6 chars..........</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered"
                                {...register("confirmPassword", {
                                    required: true,
                                    validate: (value) => {
                                        if (watch('password') != value) {
                                            return "your password did not match"
                                        }
                                    }
                                }

                                )}
                            />
                            {errors.confirmPassword && <span>This field is not match..........</span>}


                        </div>
                        <label className="label">
                            <span className="label-text">Role</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs" {...register("role", { required: true })}
                        >

                            <option value='buyer'>Buyer</option>
                            <option value='seller'>Seller</option>
                            {/* <option value='admin'>Adimin</option> */}
                            <option disabled hidden value='admin'>Admin</option>

                        </select>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                        <p>If any account then <span className="text-cyan-500"><Link to='/login'>Login</Link></span></p>
                        <div className="divider">OR</div>
                        <SocialLogin />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register