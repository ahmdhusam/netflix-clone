import dynamic from "next/dynamic";
import TMDB from "../../utils/axios";

// components
import NavBar from "../../components/layout/navbar";
const Modal = dynamic(() => import("../../components/layout/modal"));
const Home = dynamic(() => import("../../components/HomePage"));

// global state proveder
import { ContextProveder } from "../../context";

// utils
import { parseData } from "../../utils/parseData";
import sections from "../../utils/Sections";

export default function HomePage(props) {
    return (
        <ContextProveder>
            <Modal />
            <NavBar />
            <Home {...props} />
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

    const API_KEY = process.env.API_KEY;
    let parsedData;
    try {
        let data;
        const getSections = sections.map(({ get }) =>
            TMDB().get(get, {
                params: {
                    api_key: API_KEY,
                },
            })
        );
        data = await Promise.all(getSections);

        parsedData = data.map((data, index) =>
            parseData(
                sections[index].top
                    ? data.data.results.slice(0, 10)
                    : data.data.results
            )
        );
    } catch (err) {
        console.log(err);
    }

    return {
        props: { banners: parsedData[3].slice(0, 5), sectionsData: parsedData },
        revalidate: 60,
    };
};
