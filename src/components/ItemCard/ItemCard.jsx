import React from 'react';
import { IoMdClose } from "react-icons/io";
import { TbCurrencyDollar } from "react-icons/tb";
const ItemCard = ({eachAuction}) => {
    return (
        <div className='flex gap-3 mb-5'>
            <div className='w-[40%]'>
                <img className='w-full h-full' src={eachAuction.image} alt="" />
            </div>
            <div className='w-[60%]'>
                <div className='flex gap-3 mb-5'>
                    <h3 className='w-[90%] text-lg whitespace-nowrap overflow-hidden overflow-ellipsis'>{eachAuction.title}</h3>
                    <div className='w-[10%]'><IoMdClose size={30}/></div>
                </div>
                <div className=''>
                    <div className='flex gap-3 md:gap-5'>
                        <p className='flex text-lg'><TbCurrencyDollar size={25} /> {eachAuction.currentBidPrice}</p>
                        <p className='text-lg'>Bids: {eachAuction.bidsCount}</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ItemCard;