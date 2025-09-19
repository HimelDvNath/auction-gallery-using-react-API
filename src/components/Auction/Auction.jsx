import React, { memo, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { TbCurrencyDollar } from "react-icons/tb";
import FavouriteItems from "../FavouriteItems/FavouriteItems";
// bidsCount: 12;
// currentBidPrice: 250;
// description: "A beautifully crafted 19th-century gold-plated pocket watch with intricate engravings and a mechanical movement.";
// id: 1;
// image: "https://picsum.photos/id/1015/600/400";
// timeLeft: "2d 14h 30m";
// title: "Vintage Pocket Watch";
const Auction = ({ auction, handleFavouriteItems}) => {
    
    return (
        
        <tr className='w-full'>
            
            <td className='border border-gray-400 px-4 py-2'>
                <div className='flex gap-5 md:gap-10'>
                    <img
                        className='h-[20%] w-[20%] md:h-[10%] md:w-[10%]'
                        src={auction.image}
                        alt=''
                    />
                    <p>{auction.title}</p>
                </div>
            </td>
            <td className='border border-gray-400 px-4 py-2'>
                <div className='flex gap-1'>
                    <TbCurrencyDollar size={20} />
                    <p> {auction.currentBidPrice}</p>
                </div>
            </td>
            <td className='border border-gray-400 px-4 py-2'>
                <p>{auction.timeLeft}</p>
            </td>
            <td className='border border-gray-400 px-4 py-2'>
                <div className='flex justify-center items-center'>
                    <button onClick={() => handleFavouriteItems(auction)} ><FaHeart size={25}/></button>
                </div>
            </td>
        </tr>
    );
};

export default Auction;
 
