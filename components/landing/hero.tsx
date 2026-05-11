import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero(){
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
            <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src={`/clinic.png`} alt="hero image" fill priority className="object-cover"/>
                    <div className="absolute inset-0 bg-linear-to-r from-background via-background/60 to-transparent bg-white/80"></div>
                </div>
                <div className="relative z-10 px-6 sm:px-10 lg:px-20 max-w-3xl py-28">
                    <p ref={(ref) => setRef(ref!, 0)} style={{animationDelay: '0s'}} className={`${inView[0] ? 'animate-fade_up' : 'opacity-0'} font-title text-xs sm:text-sm font-medium tracking-[0.2em] text-gray-700`}>PREMIUM RECOVERY NY</p>
                    <h1 ref={(ref) => setRef(ref!, 1)} style={{animationDelay: '0.3s'}} className={`${inView[1] ? 'animate-fade_up' : 'opacity-0'} font-title font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight pt-4 text-[#0f172a]`}>One-on-One Physical Therapy Focused Entirely on You.</h1>
                    <p ref={(ref) => setRef(ref!, 2)} style={{animationDelay: '0.5s'}} className={`${inView[2] ? 'animate-fade_up' : 'opacity-0'} text-sm sm:text-base pt-6 text-gray-700 leading-relaxed max-w-2xl`}>Individualized care for Medicare Part B and cash-based patients in NY. No rushed sessions, no factory lines. Experience the difference of dedicated movement expertise.</p>
                    <div ref={(ref) => setRef(ref!, 3)} style={{animationDelay: '0.8s'}} className={`${inView[3] ? 'animate-fade_up' : 'opacity-0'} pt-8 flex flex-col sm:flex-row gap-3 lg:gap-0`}>
                        <a href="#" className="text-center font-title py-3 px-7 bg-[#0037b0] hover:bg-[#142c6c] transition cursor-pointer text-white rounded-md text-[10pt] font-semibold">Book Your Evaluation</a>
                        <a href="#Services" className="text-center font-title py-3 px-7 bg-gray-100 border border-gray-200 cursor-pointer hover:bg-gray-200 transition rounded-md text-[#0037b0] font-semibold text-[10pt] lg:ml-5">Explore Services</a>
                    </div>
                </div>
            </section>
        </>
    );
}