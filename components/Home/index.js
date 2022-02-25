import { Fragment } from "react";
import dynamic from "next/dynamic";

import styles from "../../styles/Home/Index.module.scss";

const Card = dynamic(() => import("./Card"));
const Landing = dynamic(() => import("./Landing"));
const Questions = dynamic(() => import("./Questions"));

const StartHome = ({ sections }) => {
    return (
        <Fragment>
            <Landing />
            <main className={styles.home}>
                {sections.map((item) => (
                    <Card key={item.title} {...item} />
                ))}
                <Questions />
            </main>
        </Fragment>
    );
};

export default StartHome;
