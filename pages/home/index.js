import axios from "axios";

// components
import Modal from "../../components/layout/modal";
import NavBar from "../../components/layout/navbar";
import Hero from "../../components/HomePage/Hero";

// global state proveder
import { ContextProveder } from "../../context";

// utils
import { parseData } from "../../utils/parseData";

export default function HomePage({ banners }) {
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

        const data = getData.data.results.slice(0, 10);

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
