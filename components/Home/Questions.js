import { useState } from "react";

// icons used in Question
import { GrClose as CloseIcon } from "react-icons/gr";
import { AiOutlinePlus as OpenIcon } from "react-icons/ai";

//compnents
import Form from "./Form";

//style
import styles from "../../styles/Home/Questions.module.scss";

// dummyData
import { questionsList } from "../../data/QuestionsList";

const Questions = () => {
    const questions = questionsList().map((item) => (
        // imported From the Same File
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

function Question({ title, answer }) {
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
                    <p dangerouslySetInnerHTML={{ __html: answer }} />
                </main>
            )}
        </article>
    );
}
