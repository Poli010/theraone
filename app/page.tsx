'use client'
import About from "@/components/landing/about";
import Appointment from "@/components/landing/appointment";
import Credentials from "@/components/landing/credentials";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import Medicare from "@/components/landing/medicare";
import Navbar from "@/components/landing/navbar";
import Services from "@/components/landing/services";
import Testimonials from "@/components/landing/testimonials";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Appointment/>
      <Services/>
      <Medicare/>
      <Credentials/>
      <Testimonials/>
      <Footer/>
    </>
  );
}
