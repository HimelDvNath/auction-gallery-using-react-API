import React from "react";
import reactLogo from "../../assets/Banner-min.jpg";
const Hero = () => {
    return (
        <div>
            <div
                className='hero h-[730px] w-full'
                style={{
                    backgroundImage: `url(${reactLogo})`,
                }}>
                <div className='hero-overlay'></div>
                <div className='hero-content text-neutral-content justify-self-start text-left pl-20 md:pl-30 lg:pl-45'>
                    <div className='max-w-md'>
                        <h1 className='mb-5 text-3xl font-bold'>Bid on Unique Items from Around the World</h1>
                        <p className='mb-5 opacity-80'>
                            Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                        </p>
                        <button className='btn text-black bg-white rounded-full border'>Explore Auctions</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
