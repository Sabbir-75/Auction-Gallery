import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[url(/src/assets/assets/Banner-min.png)] bg-cover bg-center bg-no-repeat px-12 pt-[140px] pb-[130px]'>
            <div className='space-y-5 max-w-[1170px] mx-auto'>
            <h1 className='text-5xl font-semibold text-[#FFFFFF] max-w-[630px]'>Bid on Unique Items from Around the World</h1>
            <p className='text-2xl font-light text-[#FFFFFF] max-w-[660px]'>Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
            <button className='mt-3 px-8 py-4 bg-white text-[#010000] cursor-pointer hover:bg-[#FFD337] duration-300 rounded-full text-xl font-medium'>Explore Auctions</button>
            </div>
        </div>
    );
};

export default Banner;