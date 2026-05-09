import About from "@/components/landing/about";
import Hero from "@/components/landing/hero";
import Navbar from "@/components/landing/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
    </>
  );
}
