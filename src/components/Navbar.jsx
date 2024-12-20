import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import UserDropdown from './home/UserDropdown'


const Navbar = () => {
    const { user } = useAuth()

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/mobile">Mobile</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">A H Mobile</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            {
                user ? (<div className='navbar-end'><UserDropdown /></div>) : <div className="navbar-end flex gap-3 border-lime-300">
                    <Link to='/register'>
                        <button className='btn bg-black text-white rounded-md border-white'>
                            Sign Up
                        </button>
                    </Link>
                    <Link to='/login'>
                        <button className='btn bg-black text-white rounded-md border-white'>
                            Sign In
                        </button>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Navbar