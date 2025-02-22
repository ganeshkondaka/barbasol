import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import { Contact } from "./components/Contact";
import Script from 'next/script';

export default function Home() {
  return (
    <div className="dark">
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      {/* <script src="https://checkout.razorpay.com/v1/checkout.js"></script> */}

      <NavBar></NavBar>
      <Hero></Hero>
      <Features></Features>
      <Pricing></Pricing>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
