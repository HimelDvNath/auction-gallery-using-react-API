import React, { useState, memo } from "react";
import { FaHeart } from "react-icons/fa";
import { TbCurrencyDollar } from "react-icons/tb";
const FavouriteItems = ({marked}) => {
    const totalBidAmount = marked && marked.length
    ? marked.reduce((acc, item) => acc + (item.currentBidPrice || 0), 0)
    : 0;
    return (
        <div>
            <div className='flex gap-3 items-center justify-center'>
                <FaHeart size={25} />
                <h1 className='text-3xl font-normal'>Favorite Items</h1>
            </div>
            <div className='divider'></div>
            {marked.length ? (
                console.log("true")
            ) : (
                <div className='text-center'>
                    <h3 className='text-2xl font-normal'>No favorites yet</h3>
                    <p className='opacity-80'>
                        Click the heart icon on any item <br />
                        to add it to your favorites
                    </p>
                </div>
            )}
            <div className='divider'></div>

            <div className='flex justify-between items-center'>
                <h3 className='text-2xl font-normal'>Total bids Amount</h3>
                <div className='flex'>
                    <TbCurrencyDollar size={20} />
                    <p>{totalBidAmount}</p>
                </div>
            </div>
        </div>
    );
};

export default FavouriteItems;
