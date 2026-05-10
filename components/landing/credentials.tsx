import Image from "next/image";

export default function Credentials(){
    return(
        <>
            <section className="min-h-screen bg-[#EFF4FF] flex flex-col items-center justify-center">
                <h1 className="font-title text-4xl md:text-5xl font-bold text-[#0F172A]">Professional Credentials</h1>
                <div className="w-150 bg-white border border-gray-200 shadow rounded-md mt-10 p-10">
                    <div className="h-100">
                        <Image src={`/certificate/certificate1.jpg`} alt="Certifcate 1" width={800} height={800} className="h-full w-full object-cover rounded-md shadow border border-gray-200"/>
                    </div>
                    <div className="mt-5 flex flex-col items-center justify-center">
                        <h1 className="font-title font-bold text-[#0037b0] text-2xl">Vestibular Rehabilitation Specialist</h1>
                        <h4 className="font-title mt-1 font-medium text-sm">American Institute of Balance</h4>
                        <p className="font-title mt-1 uppercase text-sm font-semibold bg-gray-200 px-7 py-1 rounded-full">Certified Specialist</p>
                    </div>
                   
                </div>
            </section>
        </>
    );
}