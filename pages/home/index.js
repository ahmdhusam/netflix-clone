import dynamic from "next/dynamic";
import axios from "axios";

// components
import NavBar from "../../components/layout/navbar";

const Modal = dynamic(() => import("../../components/layout/modal"));
const Hero = dynamic(() => import("../../components/HomePage/Hero"));

// global state proveder
import { ContextProveder } from "../../context";

// utils
import { parseData } from "../../utils/parseData";
import { useEffect } from "react";

export default function HomePage({ banners }) {
    useEffect(() => {
        console.log(banners);
        // navigator.serviceWorker.register("/sw.js");
    }, []);
    return (
        <ContextProveder>
            <Modal />
            <NavBar />
            <Hero banners={banners} />
        </ContextProveder>
    );
}

export const getStaticProps = async ({ req, res }) => {
    // server Auth
    // const { fakeAuth } = req.cookies;

    // if (!fakeAuth) {
    //     return {
    //         redirect: {
    //             destination: "/signin",
    //             permanent: false,
    //         },
    //     };
    // }

    let parsedData;
    try {
        const API_KEY = process.env.API_KEY;

        const getData = await axios.get(
            "https://api.themoviedb.org/3/movie/popular",
            {
                params: {
                    api_key: API_KEY,
                },
            }
        );

        const data = getData.data.results;

        parsedData = parseData(data);
    } catch (err) {
        console.log("Error", err.message);
        parsedData = [
            {
                id: 123,
                title: "Ahmed",
                description: "sadjnfsabdfhs",
                poster: "/imgs/avatar.png",
                vote: 1.6,
            },
        ];
    }

    return {
        props: { banners: parsedData },
        revalidate: 60,
    };
};
