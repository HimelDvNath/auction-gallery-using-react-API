import React, { useState, memo } from "react";
import { FaHeart } from "react-icons/fa";
import { TbCurrencyDollar } from "react-icons/tb";
import ItemCard from "../ItemCard/ItemCard";
const FavouriteItems = ({ marked, handleCloseItems}) => {
    const totalBidAmount =
        marked && marked.length
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
                marked.map((eachAuction) => {
                   return <ItemCard key={eachAuction.id} eachAuction={eachAuction} handleCloseItems={handleCloseItems}></ItemCard>
                })
               
                
            ) : (
                // marked.map(eachAuction => {
                //     console.log(eachAuction)
                // })
                <div className='text-center'>
                    <h3 className='text-2xl font-normal'>No favorites yet</h3>
                    <p className='opacity-80'>
                        Click the heart icon on any item <br />
                        to add it to your favorites
                    </p>
                    <div className='divider'></div>
                </div>
            )}
            

            <div className='flex justify-between items-center'>
                <h3 className='text-2xl font-normal'>Total bids Amount</h3>
                <div className='flex text-lg'>
                    <TbCurrencyDollar size={25} />
                    <p className="">{totalBidAmount}</p>
                </div>
            </div>
        </div>
    );
};

export default FavouriteItems;
