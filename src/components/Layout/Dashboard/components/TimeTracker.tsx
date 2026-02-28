import { Pause, Square } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TimeTracker() {
    return (
        <Card className="border-none shadow-sm rounded-2xl bg-[#0a1a11] text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">

                <div className="w-24 h-24 border-4 border-white rounded-full flex items-center justify-center">
                    <div className="w-1 h-8 bg-white rounded-full origin-bottom" style={{ transform: 'rotate(45deg)' }} />
                </div>
            </div>

            <CardContent className="p-6 relative z-10 flex flex-col items-center">
                <span className="text-xs font-medium opacity-60 mb-4 uppercase tracking-[0.2em]">Time Tracker</span>
                <h3 className="text-4xl font-mono font-bold tracking-widest mb-6">01:24:08</h3>

                <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon" className="h-10 w-10 rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white">
                        <Pause className="h-5 w-5 fill-current" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-10 w-10 rounded-full bg-red-500/80 border-none hover:bg-red-500 text-white">
                        <Square className="h-4 w-4 fill-current" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
