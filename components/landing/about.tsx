import Image from "next/image";

export default function About(){
    return(
        <>
            <section className="bg-[#EFF4FF] min-h-screen px-6 py-20 flex items-center justify-center">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                    
                    {/* LEFT SIDE */}
                    <div className="relative">
                        <div className="w-105 h-135 rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/doc.png" alt="Doctor" width={800} height={800} className="w-full h-full object-cover"/>
                        </div>
                        {/* Floating Quote Card */}
                        <div className="absolute bottom-5 -right-5 bg-white px-6 py-5 rounded-2xl shadow-xl w-60 " >
                            <p className="italic text-[#1D4ED8] text-sm"> “Real recovery is not cookie-cutter. Your goals matter.”</p>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="max-w-xl">
                        <h1 className="font-title text-5xl font-bold leading-tight text-[#0F172A]">TheraOne Movement & Recovery</h1>
                        <p className="pt-8 text-gray-600 leading-8">
                            Physical Therapy should feel personal — not rushed,
                            divided, or treated like a factory line. Too many
                            patients spend their sessions sharing their therapist’s
                            attention with multiple people at once, following the
                            same repetitive exercises regardless of progress.
                        </p>
                        <p className="pt-6 font-semibold text-[#0F172A] leading-8">
                            That is not the level of care I believe people deserve.
                            My approach is different.
                        </p>
                        <p className="pt-6 text-gray-600 leading-8">
                            Every visit is one-on-one, individualized, and focused
                            entirely on you. Your treatment evolves as you improve,
                            because real recovery is not cookie-cutter. You are not
                            just another time slot here. Your goals, your recovery,
                            and your quality of care matter.
                        </p>
                    {/* STATS */}
                        <div className="flex gap-16 pt-12">
                            <div>
                            <h2 className="text-5xl font-bold text-[#1D4ED8]">
                                15+
                            </h2>
                            <p className="text-sm tracking-widest text-gray-600 pt-2">
                                YEARS EXP.
                            </p>
                            </div>

                            <div>
                            <h2 className="text-5xl font-bold text-[#1D4ED8]">
                                100%
                            </h2>
                            <p className="text-sm tracking-widest text-gray-600 pt-2">
                                ONE-ON-ONE
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}