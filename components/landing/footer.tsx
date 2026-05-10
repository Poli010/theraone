import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer(){
    return(
        <>
            <footer className="bg-[#213145] p-10">
                <div className="mt-10 flex items-center justify-between">
                    <div className=" w-110 space-y-3">
                        <h1 className="text-white font-title font-bold text-3xl">TheraOne Movement & Recovery</h1>
                        <p className="text-[#cad3ff]">Premium, one-on-one movement and recovery care focused on your unique goals.</p>
                    </div>
                    <div className="text-[#cad3ff] flex items-center justify-between w-30">
                        <a href="#"><FaFacebook size={20}/></a>
                        <a href="#"><FaInstagram size={20}/></a>
                        <a href="#"><FaLinkedin size={20}/></a>
                    </div>
                </div>
                    <div className="border-t border-[#cad3ff]/30 mt-5"></div>
                    <p className="mt-5 font-title text-[#cad3ff] text-[10pt]">© {new Date().getFullYear()} TheraOne Movement & Recovery. Licensed Physical Therapy in NY. Website designed and developed by <a href="https://politechstudio.com/" target="_blank" className="font-bold">Politech Studio.</a></p>
    
                
            </footer>
        </>
    );
}