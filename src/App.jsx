import { useState, useCallback, useEffect } from "react";
import "./App.css";
import Auction from "./components/Auction/Auction";
import Auctions from "./components/Auctions/Auctions";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { FaHeart } from "react-icons/fa";
import { TbCurrencyDollar } from "react-icons/tb";
import FavouriteItems from "./components/FavouriteItems/FavouriteItems";
function App() {
    const [auctions, setAuctions] = useState([]);
    const [marked, setMarked] = useState([]);
    const handleFavouriteItems = (markedAuction) => {
        setMarked([...marked, markedAuction]);
    };
    // fetch the custom API
    useEffect(() => {
        fetch("auction.json")
            .then((res) => res.json())
            .then((data) => setAuctions(data));
    }, []);
    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <div className='bg-gray-700 pb-20'>
                <div className='p-20 md:px-30 lg:px-45 mb-3'>
                    <h1 className='text-3xl mb-2'>Active Auctions</h1>
                    <p className='opacity-80'>
                        Discover and bid on extraordinary items
                    </p>
                </div>
                {/* table  */}
                <div className='flex flex-col lg:flex-row gap-6 justify-center items-start'>
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
                                <tbody>
                                    {auctions.map((auction) => (
                                        <Auction
                                            key={auction.id}
                                            auction={auction}
                                            handleFavouriteItems={handleFavouriteItems}></Auction>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div
                        id='favouriteItems'
                        className='right-container bg-gray-400 shadow-2xl rounded-xl flex flex-col p-6 lg:w-1/5'>

                        <FavouriteItems marked={marked}></FavouriteItems>
                    </div>
                </div>
            </div>
            {/* <Auctions handleBitNow={handleBitNow}></Auctions> */}
            <Footer></Footer>
        </>
    );
}

export default App;
