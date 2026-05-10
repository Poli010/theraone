import Image from "next/image";

export default function Credentials(){
    return(
        <>
            <section className="min-h-screen bg-[#EFF4FF] px-6 py-16 sm:py-20 flex flex-col items-center justify-center">
                <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] text-center">Professional Credentials</h1>
                <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl bg-white border border-gray-200 shadow rounded-md mt-10 p-6 sm:p-8 lg:p-10">
                    <div className="w-full h-55 sm:h-75 md:h-95 lg:h-105">
                        <Image src={`/certificate/certificate1.jpg`} alt="Certifcate 1" width={800} height={800} className="h-full w-full object-cover rounded-md shadow border border-gray-200"/>
                    </div>
                    <div className="mt-6 flex flex-col items-center text-center justify-center">
                        <h1 className="font-title font-bold text-[#0037b0] text-lg sm:text-xl lg:text-2xl">Vestibular Rehabilitation Specialist</h1>
                        <h4 className="font-title mt-2 font-medium text-xs sm:text-sm text-gray-700">American Institute of Balance</h4>
                        <p className="font-title mt-3 uppercase text-xs sm:text-sm font-semibold bg-gray-200 px-5 sm:px-7 py-1 rounded-full">Certified Specialist</p>
                    </div>
                   
                </div>
            </section>
        </>
    );
}