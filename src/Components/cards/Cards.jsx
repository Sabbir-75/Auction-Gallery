import React from 'react';

const Cards = () => {
    return (
        <div className='py-6 space-y-5 flex items-center flex-col border-b-2 border-[#DCE5F3]'>
        <h2 className='text-[26px] font-medium text-black text-center'>No favorites yet</h2>
        <p className='max-w-[287px] text-[18px] font-normal text-black text-center'>Click the heart icon on any item to add it to your favorites</p>
      </div>
    );
};

export default Cards;