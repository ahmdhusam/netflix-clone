import React from "react";
import styles from "../../styles/Home/Landing.module.scss";
import Form from "./Form";
import Header from "../layout/Header";

const Landing = () => {
    return (
        <Header withBtn={true}>
            <main className={styles.landing}>
                <section className="container">
                    <article className={styles.landing__content}>
                        <h1>Unlimited movies, TV shows, and more.</h1>
                        <h5>Watch anywhere. Cancel anytime.</h5>
                        <Form />
                    </article>
                </section>
            </main>
        </Header>
    );
};

export default Landing;
