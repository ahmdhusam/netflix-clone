import dynamic from "next/dynamic";
import axios from "axios";

// components
import NavBar from "../../components/layout/navbar";
const Modal = dynamic(() => import("../../components/layout/modal"));
const Home = dynamic(() => import("../../components/HomePage"));

// global state proveder
import { ContextProveder } from "../../context";

// utils
import { parseData } from "../../utils/parseData";

export default function HomePage({ banners }) {
    return (
        <ContextProveder>
            <Modal />
            <NavBar />
            <Home banners={banners} />
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
        parsedData = [];
    }

    return {
        props: { banners: parsedData },
        revalidate: 60,
    };
};
