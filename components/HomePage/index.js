import React, { Fragment } from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./Hero"));
const Sections = dynamic(() => import("./Sections"));

export default function Home({ banners, sectionsData }) {
    return (
        <div className="bg-sc">
            <Hero banners={banners} />
            <main className="mt--17vh">
                <Sections sectionsData={sectionsData} />
            </main>
        </div>
    );
}
