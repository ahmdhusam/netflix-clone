import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { Form, Formik } from "formik";
import * as Yup from "yup";

import Header from "../layout/Header";
import FormikInput from "./input";

// styles
import styles from "../../styles/Sign/Index.module.scss";

// for Formik Component
const initialValues = (withUserName) => {
    if (withUserName) {
        return {
            username: "",
            ...initialValues(),
        };
    }

    return {
        email: "",
        password: "",
    };
};

const validetSchemaOptions = (withUserName) => {
    if (withUserName) {
        return {
            username: Yup.string()
                .min(5, "Too Short!")
                .max(50, "Too Long!")
                .required("Required"),
            ...validetSchemaOptions(),
        };
    }

    return {
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string()
            .min(8, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
    };
};

const validetSchema = (withUserName) =>
    Yup.object(validetSchemaOptions(withUserName));

export default function MainSignForm(props) {
    const { btnSubValue, redirectTo, msgBeforLink, insertInputName } = props;

    const router = useRouter();

    const onSubmit = (values) => {
        router.replace("/home");
        window.document.cookie = `fakeAuth=${true}`;
    };

    return (
        <Fragment>
            <Head>
                <title>NetFlex | Sign {btnSubValue}</title>
                <meta
                    name="description"
                    content={`Sign ${btnSubValue} To Clone Netflix By NextJS`}
                />
            </Head>
            <Header>
                <main className={styles.mainSign}>
                    <section className={styles.mainSign__content}>
                        <h3>Sign {btnSubValue}</h3>
                        <Formik
                            initialValues={initialValues(insertInputName)}
                            validationSchema={validetSchema(insertInputName)}
                            onSubmit={onSubmit}
                        >
                            <Form className={styles.mainSign__form}>
                                {insertInputName && (
                                    <FormikInput
                                        placeholder="Enter Your Name"
                                        type="text"
                                        name="username"
                                        title="User Name"
                                    />
                                )}
                                <FormikInput
                                    placeholder="Enter Your Email"
                                    type="email"
                                    name="email"
                                    title="Email"
                                />
                                <FormikInput
                                    placeholder="Enter Your Password"
                                    type="passowrd"
                                    name="password"
                                    title="Password"
                                />
                                <button
                                    type="submit"
                                    className={styles.mainSign__btnSubmit}
                                >
                                    Sign {btnSubValue}
                                </button>
                            </Form>
                        </Formik>
                        <footer className={styles.mainSign__msg}>
                            <span>{msgBeforLink}</span>{" "}
                            <Link
                                href={`/sign${redirectTo.trim().toLowerCase()}`}
                            >
                                <a>Sign {redirectTo}</a>
                            </Link>
                        </footer>
                    </section>
                </main>
            </Header>
        </Fragment>
    );
}
