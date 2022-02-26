import { Fragment } from "react";
import dynamic from "next/dynamic";

// style
import styles from "../../styles/Home/Index.module.scss";

// components
const Landing = dynamic(() => import("./Landing"));
const Card = dynamic(() => import("./Card"));
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
