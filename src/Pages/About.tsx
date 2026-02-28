import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, Rocket, Shield } from "lucide-react";

const values = [
    {
        icon: <Users className="h-6 w-6 text-[#1C6442]" />,
        title: "Community Focused",
        description: "We build tools that bring people together and help teams thrive.",
    },
    {
        icon: <Rocket className="h-6 w-6 text-[#1C6442]" />,
        title: "Always Innovating",
        description: "We're constantly pushing the boundaries of what's possible in productivity.",
    },
    {
        icon: <Shield className="h-6 w-6 text-[#1C6442]" />,
        title: "Security First",
        description: "Your data is safe with us. We prioritize privacy and security in every line of code.",
    },
];

export default function About() {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto space-y-20">

                    <div className="text-center space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1C6442]">About Donezo</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We're on a mission to simplify task management and help teams achieve more with less effort.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">Our Story</h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Started in 2024, Donezo was born out of a simple frustration: most task management tools were either too complex or too simple.
                                </p>
                                <p>
                                    We wanted something that felt professional yet intuitive—a place where you could manage complex projects with the ease of a simple to-do list.
                                </p>
                                <div className="flex items-center gap-3 text-foreground font-medium pt-2">
                                    <div className="h-5 w-5 bg-[#1C6442] rounded-full flex items-center justify-center">
                                        <CheckCircle2 className="h-3 w-3 text-white" />
                                    </div>
                                    Built with modern technologies
                                </div>
                                <div className="flex items-center gap-3 text-foreground font-medium">
                                    <div className="h-5 w-5 bg-[#1C6442] rounded-full flex items-center justify-center">
                                        <CheckCircle2 className="h-3 w-3 text-white" />
                                    </div>
                                    Designed for speed and productivity
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-[#1C6442]/10 rounded-[2rem] -rotate-2" />
                            <div className="relative aspect-square bg-[#1C6442]/5 rounded-3xl border border-[#1C6442]/10 flex items-center justify-center p-12">
                                <div className="text-[120px] opacity-20 select-none">🌿</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold">Our Values</h2>
                            <p className="text-muted-foreground">What drives us every day to build the best tools for you.</p>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {values.map((v, i) => (
                                <Card key={i} className="border-none shadow-sm rounded-2xl bg-muted/30 p-2">
                                    <CardContent className="p-6 space-y-4">
                                        <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                            {v.icon}
                                        </div>
                                        <h3 className="text-lg font-bold">{v.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="text-center space-y-8 bg-slate-900 text-white rounded-[2.5rem] p-12 md:p-20 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-[#1C6442]/20 blur-3xl rounded-full translate-y-1/2" />
                        <h2 className="text-3xl md:text-4xl font-bold relative z-10">Join 10,000+ teams today</h2>
                        <p className="text-slate-400 max-w-xl mx-auto relative z-10">
                            Ready to take your productivity to the next level? Join the thousands of teams already using Donezo.
                        </p>
                        <button className="bg-[#1C6442] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#144d32] transition-colors relative z-10 shadow-xl shadow-[#1C6442]/20">
                            Get Started for Free
                        </button>
                    </div>

                </div>
            </div>
        </Layout>
    );
}
