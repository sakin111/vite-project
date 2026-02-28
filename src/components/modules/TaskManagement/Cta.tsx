import { Button } from "@/components/ui/button";
import { Link } from "react-router";


const Cta = () => {
    return (
        <div>
              <section className="py-20 bg-[#1C6442]">
                <div className="container px-6 mx-auto text-center text-white">
                    <h2 className="text-3xl font-bold sm:text-4xl mb-6">Ready to transform your workflow?</h2>
                    <p className="text-[#e2f1ea] text-lg mb-10 max-w-2xl mx-auto font-medium">Join thousands of professionals who have optimized their daily productivity with TaskMaster.</p>
                    <Button size="lg" className="h-14 px-10 bg-white text-[#1C6442] hover:bg-slate-100 rounded-full font-extrabold shadow-xl shadow-black/10 transition-all hover:scale-105" asChild>
                        <Link to="/login">Get Started Now</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Cta;