import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <div className="dark">
      <NavBar></NavBar>
      <Hero></Hero>
      <Features></Features>
      <Pricing></Pricing>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
