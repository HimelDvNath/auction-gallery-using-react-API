import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className='footer footer-horizontal footer-center text-primary-content p-10'>
                <aside>
                    <p className='font-bold'>
                        <a className='btn btn-ghost text-2xl mb-2'>
                            <span className='text-[#003EA4]'>
                                Auction
                                <span className='text-[#FFD337] font-bold'>
                                    Gallery
                                </span>
                            </span>
                        </a>
                        <br />
                        <div className='justify-self-center mb-2'>
                            <ul className='flex gap-5 test-base opacity-80'>
                                <a href=''>
                                    <li>Bid.</li>
                                </a>
                                <a href=''>
                                    <li>Win.</li>
                                </a>
                                <a href=''>
                                    <li>Own.</li>
                                </a>
                            </ul>
                        </div>
                        <div className='justify-self-center mb-2'>
                            <ul className='flex gap-5 opacity-80'>
                                <a href=''>
                                    <li>Home</li>
                                </a>
                                <a href=''>
                                    <li>Auctions</li>
                                </a>
                                <a href=''>
                                    <li>Categories</li>
                                </a>
                                <a href=''>
                                    <li>how to works</li>
                                </a>
                            </ul>
                        </div>
                    </p>
                    <p>
                        &copy; {new Date().getFullYear()} AuctionHub. All rights
                        reserved.
                    </p>
                </aside>
                
            </footer>
        </div>
    );
};

export default Footer;
