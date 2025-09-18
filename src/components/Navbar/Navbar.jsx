import React from "react";
import { IoNotificationsCircleOutline } from "react-icons/io5";
const Navbar = () => {
    return (
        <div>
            <div className='navbar bg-base-100 shadow-sm'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost lg:hidden'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                {" "}
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 6h16M4 12h8m-8 6h16'
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a href=''>Auctions</a>
                            </li>
                            <li>
                                <a>Categories</a>
                            </li>
                            <li>
                                <a>How to works</a>
                            </li>
                        </ul>
                    </div>
                    <a className='btn btn-ghost text-xl'>
                        <span className='text-[#003EA4]'>
                            Auction
                            <span className='text-[#FFD337] font-bold'>
                                Gallery
                            </span>
                        </span>
                    </a>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal px-1'>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a href=''>Auctions</a>
                        </li>
                        <li>
                            <a>Categories</a>
                        </li>
                        <li>
                            <a>How to works</a>
                        </li>
                    </ul>
                </div>
                <div className='navbar-end'>
                    <div className='space-x-5 mr-5'>
                        <IoNotificationsCircleOutline size={45} />
                    </div>
                    <div
                        tabIndex={0}
                        role='button'
                        className='btn btn-ghost btn-circle avatar'>
                        <div className='w-10 rounded-full'>
                            <img
                                alt='Tailwind CSS Navbar component'
                                src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
