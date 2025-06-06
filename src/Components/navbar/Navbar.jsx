import React from 'react';
import "./Navbar.css"
import profile from '../../assets/assets/my pic.png'

const Navbar = () => {
    return (
        <div className='font'>
            <div className="navbar shadow-sm flex justify-between bg-white px-12">
                <div>
                  <button className="text-xl cursor-pointer text-[#003EA4] font-medium">Auction <span className='text-[#FFD337] font-bold'>Gallery</span></button>
                </div>
                <div>
                    <ul className="menu menu-horizontal px-1 flex gap-2 lg:gap-12">
                        <li className='hover:bg-[#FFD337] duration-300 rounded-sm'><a>Home</a></li>
                        <li className='hover:bg-[#FFD337] duration-300 rounded-sm'><a>Auctions</a></li>
                        <li className='hover:bg-[#FFD337] duration-300 rounded-sm'><a>Categories</a></li>
                        <li className='hover:bg-[#FFD337] duration-300 rounded-sm'><a>How to works</a></li>
                    </ul>
                </div>
                <div className="flex gap-3">
                    <div className="dropdown dropdown-end bg-[#EBF0F5] rounded-full">
                        <button className="btn btn-ghost btn-circle w-10 h-10 group hover:bg-[#0E2954]">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0E2954] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                                <span className="badge badge-sm indicator-item bg-[#0E2954] rounded-full w-3 h-5">7</span>
                            </div>
                        </button>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={profile}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;