import React from "react";

import styles from "../../../styles/Sign/Input/Error.module.scss";

export default function Error({ children }) {
    return <p className={styles.error}>{children}</p>;
}
