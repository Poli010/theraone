import { FaBriefcaseMedical, FaRegCheckCircle } from "react-icons/fa";

export default function Medicare(){
    return(
        <>
            <section className=" bg-white p-30">
                <div className="relative shadow-xl w-full bg-[#213145] rounded-lg p-20">
                    <FaBriefcaseMedical className="text-white absolute right-25 top-15 opacity-30" size={160}/>
                    <div className="bg-[#0037b0]/20 w-40 rounded-lg text-center">
                        <p className="text-[#cad3ff] text-[9pt] uppercase font-desc font-medium tracking-wide">Coverage Guidance</p>
                    </div>
                    <h1 className="font-title text-4xl md:text-4xl font-bold text-white mt-5">Medicare Part B Made Simple</h1>
                    <p className="text-[#cad3ff] leading-relaxed w-[85%] mt-5">We specialize in serving New York residents covered by Medicare Part B. Our practice is designed to remove the administrative burden, letting you focus on what matters most: your recovery.</p>
                    <div className="mt-5 space-y-3">
                        <p className="flex items-center gap-2 text-[#cad3ff]"><FaRegCheckCircle className="text-white"/>Cash Services</p>
                        <p className="flex items-center gap-2 text-[#cad3ff]"><FaRegCheckCircle className="text-white"/>Direct Medicare billing for seamless processing</p>
                        <p className="flex items-center gap-2 text-[#cad3ff]"><FaRegCheckCircle className="text-white"/>Full transparency on coverage and benefits</p>
                        <p className="flex items-center gap-2 text-[#cad3ff]"><FaRegCheckCircle className="text-white"/>Personalized treatment plans authorized under Part B</p>
                    </div>
                </div>
            </section>
        </>
    );
}