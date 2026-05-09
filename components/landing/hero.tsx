import Image from "next/image";

export default function Hero(){
    return(
        <>
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src={`/clinic.png`} alt="hero image" width={1200} height={1200} className="w-full w-full object-cover"/>
                    <div className="absolute inset-0 bg-linear-to-r from-background via-background/60 to-transparent bg-white/80"></div>
                </div>
                <div className="absolute z-7 max-w-160 x-auto left-30">
                    <p className="font-title text-sm font-medium tracking-wider text-gray-700">PREMIUM RECOVERY NY</p>
                    <h1 className="font-title font-bold text-5xl pt-3">One-on-One Physical Therapy Focused Entirely on You.</h1>
                    <p className="text-sm pt-5 text-gray-700 leading-relaxed">Individualized care for Medicare Part B patients in NY. No rushed sessions, no factory lines. Experience the difference of dedicated movement expertise.</p>
                    <div className="pt-5">
                        <button className="font-title py-3 px-7 bg-[#0037b0] hover:bg-[#142c6c] transition cursor-pointer text-white rounded-md text-[10pt] font-semibold">Book Your Evaluation</button>
                        <button className="font-title py-3 px-7 bg-gray-100 border border-gray-200 cursor-pointer hover:bg-gray-200 transition rounded-md text-[#0037b0] font-semibold text-[10pt] ml-5">Explore Services</button>
                    </div>
                </div>
            </section>
        </>
    );
}