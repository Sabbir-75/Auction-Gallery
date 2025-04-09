import React from 'react';

const Footer = () => {
    return (
        <div className='bg-white px-[300px] py-[130px]'>
            <div className='flex justify-center mb-4'>
                <button className="text-xl cursor-pointer text-[#003EA4] font-medium">Auction <span className='text-[#FFD337] font-bold'>Gallery</span></button>
            </div>
            <div className='flex gap-3 mb-2 justify-center'>
                <p className='text-lg font-normal text-[#000000]'>Bid.</p>
                <p className='text-lg font-normal text-[#000000]'>Win.</p>
                <p className='text-lg font-normal text-[#000000]'>Own.</p>
            </div>
            <div className="flex mb-8 justify-center">
                    <ul className="menu menu-horizontal px-1 flex gap-8">
                        <li><a>Home</a></li>
                        <li><a>Auctions</a></li>
                        <li><a>Categories</a></li>
                        <li><a>How to works</a></li>
                    </ul>
                </div>
                <h2 className='text-sm text-black font-normal flex justify-center'>© 2025 - All Rights Reserved By LS-Coder</h2>
        </div>
    );
};

export default Footer;