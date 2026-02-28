import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/AuthContext";

const Hero = () => {


  const {user} = useAuth()

    return (
        <div>
            <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 py-24 sm:py-32">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1C6442]/5 via-transparent to-transparent pointer-events-none" />
                <div className="container px-6 mx-auto relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
                            Master Your Tasks with <span className="text-[#1C6442] bg-gradient-to-r from-[#1C6442] to-[#2a8f5e] bg-clip-text text-transparent italic">Precision</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
                            The ultimate task management suite designed for speed, security, and elegance. Experience the power of evergreen productivity.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="h-14 px-8 bg-[#1C6442] hover:bg-[#144d32] text-white rounded-full font-bold shadow-lg shadow-[#1C6442]/20 transition-all hover:scale-105 active:scale-95 group" asChild>
                              {
                                user ? (  <Link to="/dashboard" className="flex items-center gap-2">
                                    Launch Dashboard <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>) : (
                                      <Link to="/login" className="flex items-center gap-2">
                                    Launch Dashboard <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                )
                              }
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-8 rounded-full font-bold border-slate-200 dark:border-slate-800 transition-all hover:bg-slate-100 dark:hover:bg-slate-900" asChild>
                                <Link to="/login">Create Free Account</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;