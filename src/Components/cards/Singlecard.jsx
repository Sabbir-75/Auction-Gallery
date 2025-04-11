import React from 'react';
import { ImCross } from "react-icons/im";

const Singlecard = ({ singleCard, removeHandler, cardStatehandler, enablehandler}) => {

    const removeHandlers = () => {
        removeHandler(singleCard.currentBidPrice)
        cardStatehandler(singleCard.id)
        enablehandler(singleCard.id)
    }

    return (
        <div className='p-3 bg-white mt-2 rounded-[15px] flex justify-between items-center border-2 border-[#DCE5F3]'>
            <div className='flex items-center gap-5'>
                <img className='w-18 h-18 rounded-[10px]' src={singleCard.image} alt={singleCard.title} />
                <div className='space-y-[2px]'>
                    <h1 className='text-lg font-medium text-black'>{"...".padStart(19, singleCard.title)}</h1>
                    <p className='text-sm font-normal text-black'>${singleCard.currentBidPrice}</p>
                    <p className='text-sm font-normal text-black'>Bids: {singleCard.bidsCount}</p>
                </div>
            </div>
            <button onClick={removeHandlers} className='cursor-pointer'><ImCross /></button>
        </div>
    );
};

export default Singlecard;