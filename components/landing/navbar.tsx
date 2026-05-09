import Image from "next/image";

export default function Navbar(){
    return(
        <>
            <header className="bg-white/95 border border-gray-200 shadow z-50 py-3 px-5 flex items-center justify-between fixed top-0 left-0 w-full">
                <div className="flex items-center">
                     <div className="w-13 h-13">
                        <Image src={`/theraOneLogo.svg`} alt="TheraOne Logo" width={300} height={300} className="h-full w-full object-cover"/>
                    </div>
                    <h1 className="font-title font-bold text-2xl text-[#0037b0]">TheraOne</h1>
                </div>
                <nav className="space-x-8 text-gray-700 font-title font-medium">
                    <a href="#About" className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#0037b0] after:transition-all after:duration-300 hover:after:w-full hover:text-[#0037b0]">About</a>
                    <a href="#Contact" className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#0037b0] after:transition-all after:duration-300 hover:after:w-full hover:text-[#0037b0]">Contact</a>
                    <a href="#Services" className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#0037b0] after:transition-all after:duration-300 hover:after:w-full hover:text-[#0037b0]">Services</a>
                    <a href="#Medicare" className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#0037b0] after:transition-all after:duration-300 hover:after:w-full hover:text-[#0037b0]">Medicare</a>
                    <a href="#Testimonials" className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#0037b0] after:transition-all after:duration-300 hover:after:w-full hover:text-[#0037b0]">Testimonials</a>
                </nav>
                <a href="#" className="bg-[#0037b0] hover:bg-[#142c6c] transition text-white py-2 px-5 text-sm font-bold font-title rounded-2xl">BOOK APPOINTMENT</a>
            </header>
        </>
    );
}