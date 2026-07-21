import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function About(){
    // ANIMATION SCROLL TRIGGER
    const [inView, setInView] = useState<boolean[]>([]);
    const refs = useRef<HTMLDivElement[]>([]);
    const [startCounter, setStartCounter] = useState<boolean>(false);

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
                        if (i === 6) {
                            setStartCounter(true);
                        }
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

    const [years, setYears] = useState<number>(0);
    const [percent, setPercent] = useState<number>(0);
    useEffect(() => {
    if (!startCounter) return;

    let startYears = 0;
    let startPercent = 0;

    const yearsInterval = setInterval(() => {
        startYears += 1;
        setYears(startYears);

        if (startYears >= 15) clearInterval(yearsInterval);
    }, 100);

    const percentInterval = setInterval(() => {
        startPercent += 1;
        setPercent(startPercent);

        if (startPercent >= 100) clearInterval(percentInterval);
    }, 20);

    return () => {
        clearInterval(yearsInterval);
        clearInterval(percentInterval);
    };
}, [startCounter]);
    return(
        <>
            <section id="About" className="bg-[#EFF4FF] min-h-screen px-6 py-20 flex items-center justify-center overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
                    <div className="relative w-full flex justify-center">
                        <div ref={(ref) => setRef(ref!, 0)} style={{animationDelay: '0s'}} className={`${inView[0] ? 'animate-fade_in' : 'opacity-0'} w-full max-w-105 h-125 sm:h-150 lg:w-105 lg:h-135 rounded-2xl overflow-hidden shadow-2xl`}>
                            <Image
                            src="/Professional_Image.jpg"
                            alt="Doctor"
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover"
                            />
                        </div>
                        <div ref={(ref) => setRef(ref!, 1)} style={{animationDelay: '0.3s'}} className={`${inView[1] ? 'animate-popup' : 'opacity-0'} absolute bottom-4 right-0 sm:-right-4 bg-white px-5 py-4 rounded-2xl shadow-xl w-52 sm:w-60`}>
                            <p className="italic text-[#0037b0] text-xs sm:text-sm leading-relaxed">“Real recovery is not cookie-cutter. Your goals matter.”</p>
                        </div>
                    </div>
                    <div className="max-w-xl text-left">
                        <h1 ref={(ref) => setRef(ref!, 2)} style={{animationDelay: '0.5s'}} className={`${inView[2] ? 'animate-fade_up' : 'opacity-0'} font-title text-4xl sm:text-5xl font-bold leading-tight text-[#0F172A]`}>TheraOne Movement & Recovery</h1>
                        <p ref={(ref) => setRef(ref!, 3)}  style={{animationDelay: '0.8s'}} className={`${inView[3] ? 'animate-fade_up' : 'opacity-0'} pt-6 sm:pt-8 text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base`}>
                            Physical therapy should feel personal, convenient, and built around your life—not the other way around.
                        </p>
                        <p ref={(ref) => setRef(ref!, 4)} style={{animationDelay: '1s'}} className={`${inView[4] ? 'animate-fade_up' : 'opacity-0'} pt-3 sm:pt-5 text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base`}>
                            At TheraOne Movement & Recovery, I bring high-quality physical therapy directly to your home, allowing you to receive expert care without the hassle of traveling to a clinic.
                        </p>
                        <p ref={(ref) => setRef(ref!, 5)} style={{animationDelay: '1s'}} className={`${inView[5] ? 'animate-fade_up' : 'opacity-0'} pt-5 sm:pt-5 text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base`}>
                            Every visit is one-on-one, individualized, and focused entirely on your goals. Whether you're recovering from surgery, managing pain, improving balance, or returning to the activities you love, your treatment is tailored to your needs and progresses with you every step of the way.
                        </p>
                        <p ref={(ref) => setRef(ref!, 6)} style={{animationDelay: '1s'}} className={`${inView[6] ? 'animate-fade_up' : 'opacity-0'} pt-5 sm:pt-5 font-semibold text-[#0F172A] leading-7 sm:leading-8 text-sm sm:text-base`}>
                           No crowded waiting rooms. No rushed appointments. Just attentive, hands-on care delivered in the comfort of your own home.
                        </p>

                        {/* <div ref={(ref) => setRef(ref!, 7)} className={` flex justify-start gap-10 sm:gap-16 pt-10 sm:pt-12`}>
                            <div>
                                <h2 className="text-4xl sm:text-5xl font-bold text-[#0037b0]">{years}+</h2>
                                <p className="text-xs sm:text-sm tracking-widest text-gray-600 pt-2">YEARS EXP.</p>
                            </div>
                            <div>
                                <h2 className="text-4xl sm:text-5xl font-bold text-[#0037b0]">{percent}%</h2>
                                <p className="text-xs sm:text-sm tracking-widest text-gray-600 pt-2">ONE-ON-ONE</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
}