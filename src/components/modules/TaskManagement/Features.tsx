import { CheckCircle, Shield, Zap } from "lucide-react";


const Features = () => {
    return (
        <div>
                 <section id="features" className="py-24 bg-white dark:bg-slate-900">
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Built for Modern Teams</h2>
                        <div className="h-1 w-20 bg-[#1C6442] mx-auto mt-4 rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: Zap,
                                title: "Instant Updates",
                                desc: "Experience real-time sync across all your devices with zero latency.",
                            },
                            {
                                icon: Shield,
                                title: "Bank-Level Security",
                                desc: "Your data is encrypted and secured using the latest industry standards.",
                            },
                            {
                                icon: CheckCircle,
                                title: "Smart Automations",
                                desc: "Let our platform handle the routine work so you can focus on what matters.",
                            },
                        ].map((feature, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-[#1C6442]/30 hover:shadow-xl hover:shadow-[#1C6442]/5 transition-all duration-300 group">
                                <div className="w-16 h-16 rounded-2xl bg-[#1C6442]/10 flex items-center justify-center text-[#1C6442] mb-6 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">{feature.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed italic">"{feature.desc}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;