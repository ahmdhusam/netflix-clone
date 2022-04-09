import dynamic from "next/dynamic";
import TMDB from "../../utils/axios";

// components
import NavBar from "../../components/layout/navbar";
const Modal = dynamic(() => import("../../components/layout/modal"));
const Home = dynamic(() => import("../../components/HomePage"));

// global state proveder
import { ContextProveder } from "../../context";

// utils
import sectionsList from "../../utils/sectionsList";
import { parseSlide } from "../../utils/parseSlide";

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
        const getSectionsList = sectionsList.map(({ path }) =>
            TMDB().get(path, {
                params: {
                    api_key: API_KEY,
                },
            })
        );
        const resArr = await Promise.all(getSectionsList);

        parsedData = resArr.map((res, index) =>
            parseSlide(res.data.results, index)
        );
    } catch (err) {
        console.log(err.message);
        return {
            notFound: true
        }
    }

    return {
        props: {
            banners: parsedData[3].sliderData.slice(0, 5),
            sectionsData: parsedData,
        },
        revalidate: 60,
    };
};
