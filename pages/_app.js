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
                <title>NetFlix</title>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="icon" href="/imgs/nficon2016.png" />
                <meta name="description" content="NetFlix Clone By NextJS" />
            </Head>
            <div>
                <Component {...pageProps} />
                <Footer />
            </div>
        </Fragment>
    );
}

export default MyApp;
