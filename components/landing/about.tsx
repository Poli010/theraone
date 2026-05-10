import Image from "next/image";
import { useEffect, useState } from "react";

export default function About(){
    const [years, setYears] = useState<number>(0);
    const [percent, setPercent] = useState<number>(0);
    useEffect(() => {
        const years = () => {
            let start = 0;
            const end = 15;
            const interval = setInterval(() => {
                start += 1;
                setYears(start)

                if(start === end){
                    clearInterval(interval)
                }
            }, 60);
            return () => clearInterval(interval);
        }
        const percent = () => {
            let start = 0;
            const end = 100;
            const interval = setInterval(() => {
                start += 1;
                setPercent(start)

                if(start === end){
                    clearInterval(interval)
                }
            }, 10);
            return () => clearInterval(interval);
        }
        years();
        percent();
    }, []);
    return(
        <>
            <section className="bg-[#EFF4FF] min-h-screen px-6 py-20 flex items-center justify-center overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
                    <div className="relative w-full flex justify-center">
                        <div className="w-full max-w-105 h-125 sm:h-150 lg:w-105 lg:h-135 rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                            src="/doc.png"
                            alt="Doctor"
                            width={800}
                            height={800}
                            className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute bottom-4 right-0 sm:-right-4 bg-white px-5 py-4 rounded-2xl shadow-xl w-52 sm:w-60">
                            <p className="italic text-[#0037b0] text-xs sm:text-sm leading-relaxed">“Real recovery is not cookie-cutter. Your goals matter.”</p>
                        </div>
                    </div>
                    <div className="max-w-xl text-left">
                        <h1 className="font-title text-4xl sm:text-5xl font-bold leading-tight text-[#0F172A]">TheraOne Movement & Recovery</h1>
                        <p className="pt-6 sm:pt-8 text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base">
                            Physical Therapy should feel personal — not rushed,
                            divided, or treated like a factory line. Too many
                            patients spend their sessions sharing their therapist’s
                            attention with multiple people at once, following the
                            same repetitive exercises regardless of progress.
                        </p>
                        <p className="pt-5 sm:pt-6 font-semibold text-[#0F172A] leading-7 sm:leading-8 text-sm sm:text-base">
                            That is not the level of care I believe people deserve.
                            My approach is different.
                        </p>
                        <p className="pt-5 sm:pt-6 text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base">
                            Every visit is one-on-one, individualized, and focused
                            entirely on you. Your treatment evolves as you improve,
                            because real recovery is not cookie-cutter. You are not
                            just another time slot here. Your goals, your recovery,
                            and your quality of care matter.
                        </p>
                        <div className="flex justify-start gap-10 sm:gap-16 pt-10 sm:pt-12">
                            <div>
                                <h2 className="text-4xl sm:text-5xl font-bold text-[#0037b0]">{years}+</h2>
                                <p className="text-xs sm:text-sm tracking-widest text-gray-600 pt-2">YEARS EXP.</p>
                            </div>
                            <div>
                                <h2 className="text-4xl sm:text-5xl font-bold text-[#0037b0]">{percent}%</h2>
                                <p className="text-xs sm:text-sm tracking-widest text-gray-600 pt-2">ONE-ON-ONE</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}