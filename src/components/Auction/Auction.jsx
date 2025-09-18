import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
// bidsCount: 12;
// currentBidPrice: 250;
// description: "A beautifully crafted 19th-century gold-plated pocket watch with intricate engravings and a mechanical movement.";
// id: 1;
// image: "https://picsum.photos/id/1015/600/400";
// timeLeft: "2d 14h 30m";
// title: "Vintage Pocket Watch";
const Auction = ({ auction }) => {
    console.log(auction);
    return (
        <div>
            {
                <tr className="w-full">
                    <td className='border border-gray-400 px-4 py-2'>
                        <p>{auction.title}</p>
                    </td>
                    <td className='border border-gray-400 px-4 py-2'>
                        <p>{auction.currentBidPrice}</p>
                    </td>
                    <td className='border border-gray-400 px-4 py-2'>
                        <p>{auction.timeLeft}</p>
                    </td>
                    <td className='border border-gray-400 px-4 py-2'>
                        <FaHeart size={25} />
                    </td>
                </tr>
            }
        </div>
    );
};

export default Auction;
