import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Appointment(){
    return(
        <>
            <section className="bg-white min-h-screen px-6 py-20 flex items-center justify-center">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                    <div>
                        <h1 className="font-title text-5xl font-bold leading-tight text-[#0F172A]">Book Your Visit</h1>
                        <p className="pt-8 text-gray-600  w-135">Ready to experience one-on-one therapy focused on you? Use our Jane booking system or contact us directly.</p>
                        {/* LOCATION */}
                        <div className="flex items-center gap-3 mt-5">
                            <div className="bg-gray-200 flex items-center justify-center w-10 h-10 rounded-full">
                                <MapPin size={20} className="text-[#0037b0]" />
                            </div>
                            <div >
                                <h3 className="font-title font-semibold">Location</h3>
                                <p className="text-[10pt] tracking-wide font-desc text-[#0F172A]">123 Health Way, New York, NY 10001</p>
                            </div>
                        </div>
                        {/* PHONE */}
                        <div className="flex items-center gap-3 mt-5">
                            <div className="bg-gray-200 flex items-center justify-center w-10 h-10 rounded-full">
                                <Phone size={20} className="text-[#0037b0]" />
                            </div>
                            <div >
                                <h3 className="font-title font-semibold">Phone</h3>
                                <p className="text-[10pt] tracking-wide font-desc text-[#0F172A]">(212) 555-0198</p>
                            </div>
                        </div>
                        {/* EMAIL */}
                        <div className="flex items-center gap-3 mt-5">
                            <div className="bg-gray-200 flex items-center justify-center w-10 h-10 rounded-full">
                                <Mail size={20} className="text-[#0037b0]" />
                            </div>
                            <div >
                                <h3 className="font-title font-semibold">Email</h3>
                                <p className="text-[10pt] tracking-wide font-desc text-[#0F172A]">care@theraone.com</p>
                            </div>
                        </div>
                        <div className="w-60">
                             <a href="#" className="mt-5 flex items-center gap-3 justify-center py-3 text-white font-title text-sm font-semibold bg-[#0037b0] rounded-md hover:bg-[#142c6c]  transition">Book with Jane <Calendar size={20} strokeWidth={2}/></a>
                        </div>
                       
                    </div>
                    <div className="w-145 h-105 rounded-2xl overflow-hidden shadow-2xl">
                        <Image src="/thera.png" alt="Doctor" width={800} height={800} className="w-full h-full object-cover"/>
                    </div>
                </div>
            </section>
        </>
    );
}