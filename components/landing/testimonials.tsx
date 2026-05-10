import { Star } from "lucide-react";
import { FaStar } from "react-icons/fa";

export default function Testimonials(){
    const testimonials = [
        {
            star: 5,
            comment:
            "Finally, a therapist who actually listens! I never felt rushed, and the one-on-one attention made all the difference in my knee recovery.",
            patient_name: "Robert H.",
            diagnosed: "ACL Tear Recovery",
        },
        {
            star: 5,
            comment:
            "After months of back pain, I can finally work comfortably again. The treatment plan was clear and very effective.",
            patient_name: "Maria L.",
            diagnosed: "Lower Back Pain",
        },
        {
            star: 4,
            comment:
            "The staff were professional and welcoming. My shoulder mobility improved a lot after only a few sessions.",
            patient_name: "James T.",
            diagnosed: "Frozen Shoulder",
        },
        {
            star: 5,
            comment:
            "I was struggling to walk properly after my ankle injury, but now I’m back to jogging without pain.",
            patient_name: "Angela P.",
            diagnosed: "Ankle Sprain Rehabilitation",
        },
        {
            star: 5,
            comment:
            "The therapists explained every exercise clearly and motivated me throughout my recovery journey.",
            patient_name: "Daniel R.",
            diagnosed: "Post-Surgery Rehabilitation",
        },
        {
            star: 4,
            comment:
            "I noticed major improvements in my posture and neck pain after just a few visits.",
            patient_name: "Sophia M.",
            diagnosed: "Cervical Strain",
        },
        {
            star: 5,
            comment:
            "Excellent care and personalized treatment. I’m finally able to sleep without hip pain.",
            patient_name: "Linda G.",
            diagnosed: "Hip Bursitis",
        },
        {
            star: 5,
            comment:
            "The sessions were very hands-on and tailored to my needs. My recovery was faster than expected.",
            patient_name: "Kevin S.",
            diagnosed: "Sports Injury",
        },
        {
            star: 4,
            comment:
            "Very clean facility and friendly staff. They helped reduce the numbness and pain in my wrist.",
            patient_name: "Patricia W.",
            diagnosed: "Carpal Tunnel Syndrome",
        },
        {
            star: 5,
            comment:
            "I regained confidence in walking again after my stroke therapy sessions. Truly grateful for the support.",
            patient_name: "George B.",
            diagnosed: "Stroke Rehabilitation",
        },
    ];
    return(
        <>
            <section className=" min-h-screen flex flex-col items-center justify-center">
                <h1 className="font-title text-4xl md:text-5xl font-bold text-[#0F172A] mt-20">Patient Success Stories</h1>
                <div className="overflow-hidden w-full py-4 mt-10">
                    <div className="flex w-max animate-marquee gap-6">
                        {/* Duplicate the array for seamless looping */}
                        {[...testimonials, ...testimonials].map((t, index) => (
                        <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition duration-300 w-100 shrink-0">
                            {/* Stars */}
                            <div className="flex items-center gap-1 mb-4">
                                {Array.from({ length: t.star }).map((_, i) => (
                                    <FaStar key={i} className="text-yellow-500" />
                                ))}
                            </div>
                            <p className="text-gray-600 italic">"{t.comment}"</p>

                            <div className="mt-4">
                                <h1 className="font-semibold">{t.patient_name}</h1>
                                <p className="text-sm text-gray-500">{t.diagnosed}</p>
                            </div>
                        </div>
                        ))}
                    </div>

                    {/* testimonials 2 */}
                    <div className="flex w-max animate-marquee2 gap-6 mt-10">
                        {/* Duplicate the array for seamless looping */}
                        {[...testimonials, ...testimonials].map((t, index) => (
                        <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition duration-300 w-100 shrink-0">
                            {/* Stars */}
                            <div className="flex items-center gap-1 mb-4">
                                {Array.from({ length: t.star }).map((_, i) => (
                                    <FaStar key={i} className="text-yellow-500" />
                                ))}
                            </div>
                            <p className="text-gray-600 italic">"{t.comment}"</p>

                            <div className="mt-4">
                                <h1 className="font-semibold">{t.patient_name}</h1>
                                <p className="text-sm text-gray-500">{t.diagnosed}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}