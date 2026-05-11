import { Calendar, ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return(
        <>
            <header className="bg-white/95 border border-gray-100 shadow z-50 py-3 px-5 flex items-center justify-between fixed top-0 left-0 w-full">
                <div className="flex items-center">
                    <div className="w-13 h-13">
                        <Image src={`/theraOneLogo.svg`} alt="TheraOne Logo" width={300} height={300} className="h-full w-full object-cover"/>
                    </div>
                    <h1 className="font-title font-bold text-xl md:text-2xl text-[#0037b0]">TheraOneMR</h1>
                </div>
                <nav className="space-x-8 text-gray-700 font-title font-medium hidden lg:block z-10">
                    <a href="#About" className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#0037b0] after:transition-all after:duration-300 hover:after:w-full hover:text-[#0037b0]">About</a>
                    <a href="#Contacts" className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#0037b0] after:transition-all after:duration-300 hover:after:w-full hover:text-[#0037b0]">Contacts</a>
                    <a href="#Services" className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#0037b0] after:transition-all after:duration-300 hover:after:w-full hover:text-[#0037b0]">Services</a>
                    <a href="#Medicare" className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#0037b0] after:transition-all after:duration-300 hover:after:w-full hover:text-[#0037b0]">Medicare</a>
                    <a href="#Certificate" className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#0037b0] after:transition-all after:duration-300 hover:after:w-full hover:text-[#0037b0]">Certificate</a>
                    <a href="#Testimonials" className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#0037b0] after:transition-all after:duration-300 hover:after:w-full hover:text-[#0037b0]">Testimonials</a>
                </nav>
                <a href="#" className="hidden lg:block bg-[#0037b0] hover:bg-[#142c6c] transition text-white py-2 px-5 text-sm font-bold font-title rounded-2xl">BOOK APPOINTMENT</a>
                {/* MOBILE SIDEBAR */}
                <Menu className={` ${isOpen ? 'hidden z-0' : 'block z-20'} lg:hidden z-60`} onClick={() => setIsOpen(true)}/>
                <div className={`fixed top-0 inset-0 bg-black/10 backdrop-blur-xs z-40 ${isOpen ? 'block' : 'hidden'}`}></div>
                <div className={`bg-white fixed top-0 right-0 h-full  p-5 w-[90%] transition-all duration-300 ${isOpen ? 'translate-0 opacity-100 z-50' : 'translate-x-100 opacity-0 z-0'}`}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="w-13 h-13">
                                <Image src={`/theraOneLogo.svg`} alt="TheraOne Logo" width={300} height={300} className="h-full w-full object-cover"/>
                            </div>
                            <h1 className="font-title font-bold text-xl md:text-2xl text-[#0037b0]">TheraOneMR</h1>
                        </div>
                        <X onClick={() => setIsOpen(false)}/>
                    </div>
                    <nav className="flex flex-col space-y-8 text-gray-700 font-title font-semibold text-lg mt-8">
                        <a href="#About" className="flex items-center justify-between" onClick={() => setIsOpen(false)}>About <ChevronRight size={20}/></a>
                        <a href="#Contacts" className="flex items-center justify-between" onClick={() => setIsOpen(false)}>Contact <ChevronRight size={20}/></a>
                        <a href="#Services" className="flex items-center justify-between" onClick={() => setIsOpen(false)}>Services <ChevronRight size={20}/></a>
                        <a href="#Medicare" className="flex items-center justify-between" onClick={() => setIsOpen(false)}>Medicare <ChevronRight size={20}/></a>
                        <a href="#Certificate" className="flex items-center justify-between" onClick={() => setIsOpen(false)}>Certificate <ChevronRight size={20}/></a>
                        <a href="#Testimonials" className="flex items-center justify-between" onClick={() => setIsOpen(false)}>Testimonials <ChevronRight size={20}/></a>
                    </nav>
                    <a href="#" className="border flex w-full items-center justify-center py-3 mt-5 gap-1 text-white text-sm font-bold font-title rounded-2xl bg-[#0037b0] hover:bg-[#142c6c]"><Calendar size={20}/>Book Appointment</a>
                </div>
            </header>
        </>
    );
}