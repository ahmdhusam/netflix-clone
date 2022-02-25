import { ErrorMessage, Field } from "formik";
import React from "react";

import styles from "../../../styles/Sign/Input/Index.module.scss";
import Error from "./Error";

export default function FormikInput(props) {
    const { title, name, ...rest } = props;
    return (
        <article className={styles.input__content}>
            <label htmlFor={name}>{title}</label>
            <Field
                as="input"
                autoComplete="off"
                name={name}
                id={name}
                {...rest}
            />
            <ErrorMessage component={Error} name={name} />
        </article>
    );
}
