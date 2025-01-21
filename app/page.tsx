import Image from "next/image";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="dark">
      <NavBar></NavBar>
      <Hero></Hero>
    </div>
  );
}
