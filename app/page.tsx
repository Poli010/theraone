'use client'
import About from "@/components/landing/about";
import Appointment from "@/components/landing/appointment";
import Hero from "@/components/landing/hero";
import Navbar from "@/components/landing/navbar";
import Services from "@/components/landing/services";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Appointment/>
      <Services/>
    </>
  );
}
