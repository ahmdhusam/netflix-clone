// server side only
import fs from "fs/promises";
import path from "path";

import Head from "next/head";
import dynamic from "next/dynamic";

// components
const StartHome = dynamic(() => import("../components/Home"));

export default function MainPage({ sections }) {
    return (
        <div>
            <Head>
                <title>
                    Netflix - Watch TV Shows Online, Watch Movies Online
                </title>
                <meta name="description" content="Clone Netflix By NextJS" />
            </Head>
            <StartHome sections={sections} />
        </div>
    );
}

// server Auth

export const getStaticProps = async ({ req, res }) => {
    // const { fakeAuth } = req.cookies;

    // if (!!fakeAuth) {
    //     return {
    //         redirect: {
    //             destination: "/home",
    //             permanent: false,
    //         },
    //     };
    // }

    const SectionsFilePath = path.join(
        process.cwd(),
        "data",
        "home-sections.json"
    );
    const sectionsFile = await fs.readFile(SectionsFilePath);
    const sections = JSON.parse(sectionsFile);

    return {
        props: { sections },
    };
};
