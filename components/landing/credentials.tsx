"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const certificates = [
    {
        image: "/certificate/certificate1.jpg",
        title: "Vestibular Rehabilitation Specialist",
        organization: "American Institute of Balance",
        badge: "Certified Specialist",
    },
    {
        image: "/certificate/certificate2.png",
        title: "Basic Life Support",
        organization: "Certification of Completion",
        badge: "Completed Training",
    },
    {
        image: "/certificate/certificate3.png",
        title: "Mulligan Concept Upper Quadrant Course",
        organization: "Mulligan Concept Manual Therapy",
        badge: "Certificate of Completion",
    },
];

export default function Credentials() {
    const [inView, setInView] = useState<boolean[]>(
        Array(certificates.length).fill(false)
    );

    const refs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = refs.current.indexOf(
                        entry.target as HTMLDivElement
                    );

                    if (entry.isIntersecting && index !== -1) {
                        setInView((prev) => {
                            const updated = [...prev];
                            updated[index] = true;
                            return updated;
                        });

                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        refs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="Certificate" className="min-h-screen bg-[#EFF4FF] px-6 py-16 sm:py-20 lg:py-28">
            {/* Section Heading */}
            <div className="mx-auto max-w-4xl text-center">
                <h1 className="font-title text-3xl font-bold text-[#0F172A] sm:text-4xl md:text-5xl">  Professional Credentials</h1>
                <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base"> Our commitment to continuous education and professional development ensures the highest quality of care for every patient.</p>
            </div>

            {/* Certificates */}
            <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {certificates.map((certificate, index) => (
                    <div key={certificate.image}  ref={(ref) => {refs.current[index] = ref;}}style={{animationDelay: `${index * 0.2}s`,}} className={`${ inView[index] ? "animate-fade_up" : "opacity-0" } flex flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6`}>
                        {/* Certificate Image */}
                        <div className="flex aspect-4/3 w-full items-center justify-center overflow-hidden rounded-xl bg-gray-50">
                            <Image
                                src={certificate.image}
                                alt={certificate.title}
                                width={1200}
                                height={900}
                                className="h-full w-full object-contain"
                            />
                        </div>

                        {/* Certificate Information */}
                        <div className="flex flex-1 flex-col items-center justify-center text-center">
                            <h2 className="mt-6 font-title text-lg font-bold leading-tight text-[#0037B0] sm:text-xl">  {certificate.title} </h2>
                            <p className="mt-2 font-title text-sm font-medium text-gray-700"> {certificate.organization}</p>
                            <span className="mt-4 rounded-full bg-[#EFF4FF] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-[#0037B0]"> {certificate.badge} </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}