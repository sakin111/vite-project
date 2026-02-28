import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
    {
        id: 1,
        title: "Mastering Task Management with Donezo",
        description: "Learn how to organize your workflow and boost productivity using Donezo's intuitive features.",
        date: "May 15, 2024",
        author: "Alex Johnson",
        category: "Productivity",
    },
    {
        id: 2,
        title: "Why Code Splitting Matters for Modern Web Apps",
        description: "Deep dive into performance optimization techniques and why we used lazy loading in our dashboard.",
        date: "May 10, 2024",
        author: "Sarah Chen",
        category: "Technical",
    },
    {
        id: 3,
        title: "Designing for Mobile: Best Practices",
        description: "Exploring the mobile-first approach we took for the Donezo dashboard redesign.",
        date: "May 5, 2024",
        author: "David Smith",
        category: "Design",
    },
];

export default function Blogs() {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1C6442]">Our Blog</h1>
                        <p className="text-xl text-muted-foreground">Stay updated with the latest news, tips, and insights from the Donezo team.</p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {blogPosts.map((post) => (
                            <Card key={post.id} className="border-none shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden group">
                                <div className="aspect-video bg-muted/50 w-full group-hover:bg-muted/30 transition-colors" />
                                <CardHeader>
                                    <div className="flex items-center gap-2 text-xs font-semibold text-[#1C6442] uppercase tracking-wider mb-2">
                                        <span>{post.category}</span>
                                        <span className="h-1 w-1 rounded-full bg-slate-300" />
                                        <span className="text-muted-foreground">{post.date}</span>
                                    </div>
                                    <CardTitle className="text-2xl font-bold group-hover:text-[#1C6442] transition-colors cursor-pointer">{post.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">{post.description}</p>
                                    <div className="mt-6 flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-[#1C6442]/10 flex items-center justify-center text-[#1C6442] font-bold text-xs">
                                            {post.author[0]}
                                        </div>
                                        <span className="text-sm font-medium">{post.author}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="bg-[#1C6442]/5 rounded-3xl p-8 md:p-12 text-center space-y-6 border border-[#1C6442]/10">
                        <h2 className="text-2xl font-bold">Never miss an update</h2>
                        <p className="text-muted-foreground max-w-md mx-auto">Subscribe to our newsletter and get the latest articles delivered straight to your inbox.</p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#1C6442] transition-all outline-none"
                            />
                            <button className="bg-[#1C6442] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#144d32] transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
