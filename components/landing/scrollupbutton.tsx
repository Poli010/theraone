'use client'

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollUpButton() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            // show after scrolling down 500px
            if (window.scrollY > 500) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
        <a
            href="#home"
            className={`
                fixed bottom-6 right-6 z-50
                flex items-center gap-2
                rounded-full bg-[#0037b0]
                px-4 py-3 text-white shadow-xl
                transition-all duration-500
                hover:-translate-y-1 hover:bg-[#002b8a]
                ${showButton
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10 pointer-events-none"}
            `}
        >
            <ChevronUp size={18} />
            <span className="text-sm font-medium">
                Scroll Up
            </span>
        </a>
    );
}