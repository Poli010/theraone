import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaBriefcaseMedical, FaRegCheckCircle } from "react-icons/fa";
import { HiCash } from "react-icons/hi";

export default function Medicare(){
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

    const partner = [
        {
            name: "Aetna",
            src: '/logo/aetna.png'
        },
        {
            name: "Cigna",
            src: '/logo/Cigna_crop.jpeg'
        },
       {
            name: "Emblem Health",
            src: '/logo/Emblemhealth.jpeg'
        },
        {
            name: "United Health Care",
            src: '/logo/UHC.png'
        },
    ];
    return(
        <>
            <section id="Insurance" className="bg-white px-6 py-16 sm:py-20 lg:py-30">
                {/* Insurance Logos */}
                <h1 className="font-title text-center text-3xl font-bold text-[#0F172A] sm:text-4xl md:text-5xl"> We Accept</h1>
                <p className="mt-3 text-center text-slate-500">  We accept the following insurance plans</p>
                <div className="mt-10 w-full overflow-hidden">
                    <div className="flex w-max animate-marquee items-center gap-6 sm:gap-10 lg:gap-16">
                        {/* Duplicate the array for seamless looping */}
                        {[...partner, ...partner].map((t, index) => (
                            <div key={`${t.name}-${index}`} className="flex w-70 h-50 items-center justify-center rounded-xl bg-white transition duration-200 ">
                                <Image
                                    src={t.src}
                                    alt={t.name}
                                    width={800}
                                    height={800}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:gap-5 xl:gap-0 mt-10">
                    <div ref={(ref) => setRef(ref!, 0)} style={{animationDelay: '0s'}} className={`${inView[0] ? 'animate-fade_up' : 'opacity-0'} relative w-full max-w-2xl mx-auto bg-[#213145] rounded-lg shadow-xl p-8 sm:p-12 lg:p-15 overflow-hidden`}>
                        <FaBriefcaseMedical className="text-white absolute right-4 sm:right-10 lg:right-20 top-6 sm:top-10 lg:top-15 opacity-10 sm:opacity-20" size={160}/>
                        <div className="bg-[#0037b0]/20 w-fit px-4 py-1 rounded-lg text-center">
                            <p className="text-[#cad3ff] text-[10px] sm:text-[11px] uppercase font-medium tracking-wide">Coverage Guidance</p>
                        </div>
                        <h1 className="font-title text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-5">Medicare Part B Made Simple</h1>
                        <p className="text-[#cad3ff] leading-relaxed text-sm sm:text-base mt-5 max-w-2xl">We specialize in serving New York residents covered by Medicare Part B. Our practice is designed to remove the administrative burden, letting you focus on what matters most: your recovery.</p>
                        <div className="mt-6 space-y-3">
                        
                            <p className="flex items-start gap-2 text-[#cad3ff] text-sm sm:text-base"><FaRegCheckCircle className="text-white mt-1 shrink-0"/>Direct Medicare billing for seamless processing</p>
                            <p className="flex items-start gap-2 text-[#cad3ff] text-sm sm:text-base"><FaRegCheckCircle className="text-white mt-1 shrink-0"/>Full transparency on coverage and benefits</p>
                            <p className="flex items-start gap-2 text-[#cad3ff] text-sm sm:text-base"><FaRegCheckCircle className="text-white mt-1 shrink-0"/>Personalized treatment plans authorized under Part B</p>
                        </div>
                    </div>
                    <div ref={(ref) => setRef(ref!, 1)} style={{animationDelay: '0.3s'}} className={`${inView[1] ? 'animate-fade_up' : 'opacity-0'} relative w-full max-w-2xl mx-auto bg-[#213145] rounded-lg shadow-xl p-8 sm:p-12 lg:p-15 overflow-hidden`}>
                        <HiCash className="text-white absolute right-4 sm:right-10 lg:right-20 top-6 sm:top-10 lg:top-15 opacity-10 sm:opacity-20" size={160}/>
                        <div className="bg-[#0037b0]/10 w-fit px-4 py-1 rounded-lg text-center">
                            <p className="text-[#cad3ff] text-[10px] sm:text-[11px] uppercase font-bold tracking-wide">Self-Pay Options</p>
                        </div>
                        <h1 className="font-title text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-5">Cash Services</h1>
                        <p className="text-[#cad3ff] leading-relaxed text-sm sm:text-base mt-5 max-w-2xl">For patients without Medicare or those seeking elective wellness care, we offer transparent, direct-pay rates.</p>
                        <div className="mt-6 space-y-10">
                            <div className="flex items-center justify-between border-b border-[#cad3ff]/20 px-1 text-[#cad3ff] text-sm">
                                <p>Initial Evaluation</p>
                                <p>$150</p>
                            </div>
                            <div className="flex items-center justify-between border-b border-[#cad3ff]/20 px-1 text-[#cad3ff] text-sm">
                                <p>Follow-up Session</p>
                                <p>$125</p>
                            </div>
                            <div className="flex items-center justify-between border-b border-[#cad3ff]/20 px-1 text-[#cad3ff] text-sm">
                                <p>Welness Consultation</p>
                                <p>$100</p>
                            </div>
                        </div>
                            
                    </div>
                </div>
            </section>
        </>
    );
}