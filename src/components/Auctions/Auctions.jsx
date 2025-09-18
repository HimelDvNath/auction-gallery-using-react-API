import React, { useEffect, useState } from "react";
import Auction from "../Auction/Auction";

// bidsCount: 12;
// currentBidPrice: 250;
// description: "A beautifully crafted 19th-century gold-plated pocket watch with intricate engravings and a mechanical movement.";
// id: 1;
// image: "https://picsum.photos/id/1015/600/400";
// timeLeft: "2d 14h 30m";
// title: "Vintage Pocket Watch";
const Auctions = () => {
    const [auctions, setAuctions] = useState([]);
    // fetch the custom API
    useEffect(() => {
        fetch("auction.json")
            .then((res) => res.json())
            .then((data) => setAuctions(data));
    }, []);
    return (
        <div className='bg-gray-700 pb-20'>
            <div className='p-20 md:px-30 lg:px-45 mb-3'>
                <h1 className='text-3xl mb-2'>Active Auctions</h1>
                <p className='opacity-80'>
                    Discover and bid on extraordinary items
                </p>
            </div>
            {/* table  */}
            <div className='flex gap-6 justify-center items-center'>
                <div className='left-container bg-gray-400 shadow-2xl rounded-xl'>
                    <div className='overflow-x-auto'>
                        <table className='table-auto border-collapse border border-gray-500 w-full text-center bg-gray-500'>
                            <thead className='bg-gray-800'>
                                <tr>
                                    <th className='border border-gray-400 px-4 py-2'>
                                        Items
                                    </th>
                                    <th className='border border-gray-400 px-4 py-2'>
                                        Current Bid
                                    </th>
                                    <th className='border border-gray-400 px-4 py-2'>
                                        Time Left
                                    </th>
                                    <th className='border border-gray-400 px-4 py-2'>
                                        Bid Now
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='w-full'>
                                {auctions.map((auction) => (
                                    // console.log(auction)
                                    <Auction
                                        key={auction.id}
                                        auction={auction}></Auction>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='right-container bg-gray-400 shadow-2xl rounded-xl'></div>
            </div>
        </div>
    );
};

export default Auctions;
