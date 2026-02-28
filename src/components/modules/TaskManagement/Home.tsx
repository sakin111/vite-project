

import Hero from "./Hero";
import Features from "./Features";
import Cta from "./Cta";
import Layout from "@/components/Layout/Layout";

const Home = () => {
    return (
        <Layout>
            <div className="flex flex-col min-h-screen pt-20">
                <Hero />
                <Features />
                <Cta />
            </div>
        </Layout>
    );
};

export default Home;
