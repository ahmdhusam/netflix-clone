import React, { Fragment, useState } from "react";
import Form from "./Form";
import styles from "../../styles/Home/Questions.module.scss";
import { GrClose as CloseIcon } from "react-icons/gr";
import { AiOutlinePlus as OpenIcon } from "react-icons/ai";

const Questions = () => {
    const questions = questionsList.map((item) => (
        <Question key={item.title} {...item} />
    ));
    return (
        <section className={styles.questions}>
            <div className="container">
                <header className={styles.questions__title}>
                    <h3>Frequently Asked Questions</h3>
                </header>
                <main>{questions}</main>
                <footer>
                    <Form />
                </footer>
            </div>
        </section>
    );
};

export default Questions;

const Question = ({ title, answer }) => {
    const [isOpen, setIsOpen] = useState();

    return (
        <article
            className={styles.questions__ques}
            onClick={() => setIsOpen((prev) => !prev)}
        >
            <header className={styles.questions__ques_title}>
                <h4>{title}</h4>
                <span>{isOpen ? <CloseIcon /> : <OpenIcon />}</span>
            </header>
            {isOpen && (
                <main>
                    <p>{answer}</p>
                </main>
            )}
        </article>
    );
};

const questionsList = [
    {
        title: "What is Netflix?",
        answer: [
            "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
            <>
                <br />
                <br />
            </>,
            "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
        ].map((item) => <Fragment key={item}>{item}</Fragment>),
    },
    {
        title: "How much does Netflix cost?",
        answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EGP120 to EGP200 a month. No extra costs, no contracts.",
    },
    {
        title: "Where can I watch?",
        answer: [
            "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
            <>
                <br />
                <br />
            </>,
            "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
        ].map((item) => <Fragment key={item}>{item}</Fragment>),
    },
    {
        title: "How do I cancel?",
        answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
        title: "What can I watch on Netflix?",
        answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
        title: "Is Netflix good for kids?",
        answer: [
            "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
            <>
                <br />
                <br />
            </>,
            "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
        ].map((item) => <Fragment key={item}>{item}</Fragment>),
    },
];