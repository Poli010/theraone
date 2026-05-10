import Image from "next/image";

export default function Hero(){
    return(
        <>
            <section className="relative min-h-screen flex items-center md:pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src={`/clinic.png`} alt="hero image" fill priority className="object-cover"/>
                    <div className="absolute inset-0 bg-linear-to-r from-background via-background/60 to-transparent bg-white/80"></div>
                </div>
                <div className="relative z-10 px-6 sm:px-10 lg:px-20 max-w-3xl py-28">
                    <p className="font-title text-xs sm:text-sm font-medium tracking-[0.2em] text-gray-700">PREMIUM RECOVERY NY</p>
                    <h1 className="font-title font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight pt-4 text-[#0f172a]">One-on-One Physical Therapy Focused Entirely on You.</h1>
                    <p className="text-sm sm:text-base pt-6 text-gray-700 leading-relaxed max-w-2xl">Individualized care for Medicare Part B patients in NY. No rushed sessions, no factory lines. Experience the difference of dedicated movement expertise.</p>
                    <div className="pt-8 flex flex-col sm:flex-row gap-4">
                        <button className="font-title py-3 px-7 bg-[#0037b0] hover:bg-[#142c6c] transition cursor-pointer text-white rounded-md text-[10pt] font-semibold">Book Your Evaluation</button>
                        <button className="font-title py-3 px-7 bg-gray-100 border border-gray-200 cursor-pointer hover:bg-gray-200 transition rounded-md text-[#0037b0] font-semibold text-[10pt] lg:ml-5">Explore Services</button>
                    </div>
                </div>
            </section>
        </>
    );
}