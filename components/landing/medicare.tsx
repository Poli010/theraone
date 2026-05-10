import { FaBriefcaseMedical, FaRegCheckCircle } from "react-icons/fa";
import { HiCash } from "react-icons/hi";

export default function Medicare(){
    return(
        <>
            <section className="bg-white px-6 py-16 sm:py-20 lg:py-30">
                <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center">
                    <div className="relative w-full max-w-2xl mx-auto bg-[#213145] rounded-lg shadow-xl p-8 sm:p-12 lg:p-15 overflow-hidden">
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
                    <div className="relative w-full max-w-2xl mx-auto bg-[#213145] rounded-lg shadow-xl p-8 sm:p-12 lg:p-15 overflow-hidden">
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