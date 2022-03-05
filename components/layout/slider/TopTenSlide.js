import { useContext } from "react";

import Image from "next/image";

import ctx from "../../../context";

import styles from "../../../styles/Layout/Slider/TopTen.module.scss";

export default function TopTenSlide(props) {
    const { openModal } = useContext(ctx);
    const { index } = props;

    return (
        <article className={styles.topten}>
            <div className={styles.topten__index}>{index}</div>
            <div
                className={styles.topten__image}
                onClick={openModal.bind(null, props)}
            >
                <Image
                    src={props.poster}
                    alt={props.title}
                    layout="fill"
                    priority={false}
                />
            </div>
        </article>
    );
}
