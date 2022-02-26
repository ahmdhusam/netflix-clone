import { Fragment } from "react";
import Head from "next/head";

// components
import Footer from "../components/layout/footer";

// style
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="icon" href="/imgs/nficon2016.png" />
                <meta name="description" content="NetFlix Clone By NextJS" />
            </Head>
            <Fragment>
                <Component {...pageProps} />
                <Footer />
            </Fragment>
        </Fragment>
    );
}

export default MyApp;
