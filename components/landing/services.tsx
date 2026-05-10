import { CiMedicalCase } from "react-icons/ci";
import { FaBalanceScale, FaBriefcaseMedical, FaHeadSideVirus, FaWalking } from "react-icons/fa";
import { FaBone } from "react-icons/fa6";
import { PiBandaidsFill } from "react-icons/pi";

export default function Services(){
    const services = [
        {
            icon: <FaBone className="text-gray-600"/>,
            title: "Orthopedic Rehab",
            description: "Comprehensive recovery for bone, joint, and muscle conditions tailored to your pace."
        },
        {
            icon: <FaWalking className="text-gray-600"/>,
            title: "Balance & Mobility",
            description: "Improving stability and confidence in movement for daily living and fall prevention."
        },
        {
            icon: <FaBriefcaseMedical className="text-gray-600"/>,
            title: "Post-Surgical",
            description: "Personalized protocols to ensure optimal healing and restoration of function after surgery."
        },
        {
            icon: <PiBandaidsFill className="text-gray-600"/>,
            title: "Pain Management",
            description: "Innovative strategies to manage and reduce chronic pain through movement and therapy."
        },
        {
            icon: <FaBalanceScale className="text-gray-600"/>,
            title: "Vertigo Rehabilitation",
            description: "Specialized assessment and treatment for BPPV and other balance disorders to help you stop the spinning and feel steady again."
        },
    ]
    return(
        <>
            <section className="min-h-screen bg-[#EFF4FF] px-6 py-16 sm:py-20 flex flex-col items-center">
                <div className="text-center max-w-2xl">
                    <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A]">Our Specialized Care</h1>
                    <p className="mt-5 sm:mt-6 text-gray-600 text-sm sm:text-base md:text-lg leading-7"> Focused on evidence-based practices to restore your function and enhance your quality of life.</p>
                </div>
                <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full max-w-6xl">
                    {services.map((s, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition duration-300">
                            <div className="bg-[#39b8fd] w-10 h-10 flex items-center justify-center rounded-lg text-white">
                                {s.icon}
                            </div>
                            <h3 className="font-title font-semibold text-base sm:text-lg mt-4 sm:mt-5 text-[#0F172A]">{s.title}</h3>
                            <p className="text-gray-600 text-sm mt-2 leading-6"> {s.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}