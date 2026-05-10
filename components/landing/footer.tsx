import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer(){
    return(
        <>
            <footer className="bg-[#213145] px-6 py-10 sm:px-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                        <div className="space-y-3 max-w-sm">
                            <h1 className="text-white font-title font-bold text-2xl sm:text-3xl">TheraOne Movement & Recovery</h1>
                            <p className="text-[#cad3ff] text-sm sm:text-base">Premium, one-on-one movement and recovery care focused on your unique goals.</p>
                        </div>
                        <div className="text-[#cad3ff] flex items-center gap-6 md:justify-end">
                            <a href="#" className="hover:text-white transition"><FaFacebook size={20}/></a>
                            <a href="#" className="hover:text-white transition"><FaInstagram size={20}/></a>
                            <a href="#" className="hover:text-white transition"><FaLinkedin size={20}/></a>
                        </div>
                    </div>
                    <div className="border-t border-[#cad3ff]/30 mt-8"></div>
                    <p className="mt-6 text-[#cad3ff] text-xs sm:text-sm text-center md:text-left leading-relaxed">© {new Date().getFullYear()} TheraOne Movement & Recovery. Licensed Physical Therapy in NY. Website designed and developed by <a href="https://politechstudio.com/" target="_blank" className="font-bold hover:text-white transition">Politech Studio.</a></p>
                </div>    
            </footer>
        </>
    );
}