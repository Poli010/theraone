import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Credentials(){
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
            <section id="Certificate" className="min-h-screen bg-[#EFF4FF] px-6 py-16 sm:py-20 flex flex-col items-center justify-center">
                <h1 ref={(ref) => setRef(ref!, 0)} style={{animationDelay: '0s'}} className={`${inView[0] ? 'animate-fade_up' : 'opacity-0'} font-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] text-center`}>Professional Credentials</h1>
                <div ref={(ref) => setRef(ref!, 1)} style={{animationDelay: '0.3s'}} className={`${inView[1] ? 'animate-fade_up' : 'opacity-0'} w-full max-w-md sm:max-w-lg lg:max-w-xl bg-white border border-gray-200 shadow rounded-md mt-10 p-6 sm:p-8 lg:p-10`}>
                    <div className="w-full h-55 sm:h-75 md:h-95 lg:h-105">
                        <Image src={`/certificate/certificate1.jpg`} alt="Certifcate 1" width={800} height={800} className="h-full w-full object-cover rounded-md shadow border border-gray-200"/>
                    </div>
                    <div className="mt-6 flex flex-col items-center text-center justify-center">
                        <h1 className="font-title font-bold text-[#0037b0] text-lg sm:text-xl lg:text-2xl">Vestibular Rehabilitation Specialist</h1>
                        <h4 className="font-title mt-2 font-medium text-xs sm:text-sm text-gray-700">American Institute of Balance</h4>
                        <p className="font-title mt-3 uppercase text-xs sm:text-sm font-semibold bg-gray-200 px-5 sm:px-7 py-1 rounded-full">Certified Specialist</p>
                    </div>
                </div>
            </section>
        </>
    );
}