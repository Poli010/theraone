import { FaBriefcaseMedical, FaRegCheckCircle } from "react-icons/fa";

export default function Medicare(){
    return(
        <>
            <section className="bg-white px-6 py-16 sm:py-20 lg:py-30">
                <div className="relative w-full max-w-6xl mx-auto bg-[#213145] rounded-lg shadow-xl p-8 sm:p-12 lg:p-20 overflow-hidden">
                    <FaBriefcaseMedical className="text-white absolute right-4 sm:right-10 lg:right-20 top-6 sm:top-10 lg:top-15 opacity-20 sm:opacity-30" size={160}/>
                    <div className="bg-[#0037b0]/20 w-fit px-4 py-1 rounded-lg text-center">
                        <p className="text-[#cad3ff] text-[10px] sm:text-[11px] uppercase font-medium tracking-wide">Coverage Guidance</p>
                    </div>
                    <h1 className="font-title text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-5">Medicare Part B Made Simple</h1>
                    <p className="text-[#cad3ff] leading-relaxed text-sm sm:text-base mt-5 max-w-2xl">We specialize in serving New York residents covered by Medicare Part B. Our practice is designed to remove the administrative burden, letting you focus on what matters most: your recovery.</p>
                    <div className="mt-6 space-y-3">
                        <p className="flex items-start gap-2 text-[#cad3ff] text-sm sm:text-base"><FaRegCheckCircle className="text-white mt-1 shrink-0"/>Cash Services</p>
                        <p className="flex items-start gap-2 text-[#cad3ff] text-sm sm:text-base"><FaRegCheckCircle className="text-white mt-1 shrink-0"/>Direct Medicare billing for seamless processing</p>
                        <p className="flex items-start gap-2 text-[#cad3ff] text-sm sm:text-base"><FaRegCheckCircle className="text-white mt-1 shrink-0"/>Full transparency on coverage and benefits</p>
                        <p className="flex items-start gap-2 text-[#cad3ff] text-sm sm:text-base"><FaRegCheckCircle className="text-white mt-1 shrink-0"/>Personalized treatment plans authorized under Part B</p>
                    </div>
                </div>
            </section>
        </>
    );
}