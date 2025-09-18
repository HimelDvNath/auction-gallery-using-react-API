import "./App.css";
import Auction from "./components/Auction/Auction";
import Auctions from "./components/Auctions/Auctions";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";


function App() {
    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <Auctions></Auctions>
            {/* <Auction></Auction> */}
            <Footer></Footer>
        </>
    );
}

export default App;
