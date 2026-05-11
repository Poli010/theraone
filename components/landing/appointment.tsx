import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Appointment(){
    // ANIMATION SCROLL TRIGGER
    const [inView, setInView] = useState<boolean[]>([]);
    const refs = useRef<HTMLDivElement[]>([]);
    useEffect(() => {
        setInView(Array(refs.current.length).fill(false));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const i = refs.current.indexOf(entry.target as HTMLDivElement);
                    if(entry.isIntersecting){
                        setInView((prev) => {
                            const updated = [...prev];
                            updated[i] = true;
                            return updated;
                        });
                        observer.unobserve(entry.target); // stop observing once triggered
                    }
                });
            },
            {threshold: 0.2}
        );
        refs.current.forEach((ref) => ref && observer.observe(ref));
        return () => observer.disconnect();
    }, []);
    const setRef = (ref: HTMLDivElement, index: number) => {
        refs.current[index] = ref;
    }

    return(
        <>
            <section id="Contacts" className="bg-white min-h-screen px-6 py-20 flex items-center justify-center">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                    <div>
                        <h1 ref={(ref) => setRef(ref!, 0)} style={{animationDelay: '0s'}} className={`${inView[0] ? 'animate-fade_up' : 'opacity-0'} font-title text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#0F172A]`}>Book Your Visit</h1>
                        <p ref={(ref) => setRef(ref!, 1)} style={{animationDelay: '0.3s'}} className={`${inView[1] ? 'animate-fade_up' : 'opacity-0'} pt-6 sm:pt-8 text-gray-600 text-sm sm:text-base max-w-xl mx-auto lg:mx-0`}>Ready to experience one-on-one therapy focused on you? Use our Jane booking system or contact us directly.</p>
                        {/* LOCATION */}
                        <div ref={(ref) => setRef(ref!, 2)} style={{animationDelay: '0.5s'}} className={`${inView[2] ? 'animate-fade_up' : 'opacity-0'} flex items-center gap-3 mt-5`}>
                            <div className="bg-gray-200 flex items-center justify-center w-10 h-10 rounded-full">
                                <MapPin size={20} className="text-[#0037b0]" />
                            </div>
                            <div >
                                <h3 className="font-title font-semibold">Location</h3>
                                <p className="text-[10pt] tracking-wide font-desc text-[#0F172A]">123 Health Way, New York, NY 10001</p>
                            </div>
                        </div>
                        {/* PHONE */}
                        <div ref={(ref) => setRef(ref!, 3)} style={{animationDelay: '0.8s'}} className={`${inView[3] ? 'animate-fade_up' : 'opacity-0'} flex items-center gap-3 mt-5`}>
                            <div className="bg-gray-200 flex items-center justify-center w-10 h-10 rounded-full">
                                <Phone size={20} className="text-[#0037b0]" />
                            </div>
                            <div >
                                <h3 className="font-title font-semibold">Phone</h3>
                                <p className="text-[10pt] tracking-wide font-desc text-[#0F172A]">(212) 555-0198</p>
                            </div>
                        </div>
                        {/* EMAIL */}
                        <div ref={(ref) => setRef(ref!, 4)} style={{animationDelay: '1s'}} className={`${inView[4] ? 'animate-fade_up' : 'opacity-0'} flex items-center gap-3 mt-5`}>
                            <div className="bg-gray-200 flex items-center justify-center w-10 h-10 rounded-full">
                                <Mail size={20} className="text-[#0037b0]" />
                            </div>
                            <div >
                                <h3 className="font-title font-semibold">Email</h3>
                                <p className="text-[10pt] tracking-wide font-desc text-[#0F172A]">care@theraone.com</p>
                            </div>
                        </div>
                        <div ref={(ref) => setRef(ref!, 5)} style={{animationDelay: '1.3s'}} className={`${inView[5] ? 'animate-fade_up' : 'opacity-0'} lg:w-60`}>
                             <a href="#" className="mt-5 flex items-center gap-3 justify-center py-3 text-white font-title text-sm font-semibold bg-[#0037b0] rounded-md hover:bg-[#142c6c]  transition">Book with Jane <Calendar size={20} strokeWidth={2}/></a>
                        </div>
                       
                    </div>
                    <div ref={(ref) => setRef(ref!, 6)} style={{animationDelay: '1.5s'}} className={`${inView[6] ? 'animate-fade_in' : 'opacity-0'} w-full lg:w-1/2 flex justify-center`}>
                        <div className="w-full max-w-112.5] h-75 sm:h-100 lg:h-105 rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                            src="/thera.png"
                            alt="Doctor"
                            width={800}
                            height={800}
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}