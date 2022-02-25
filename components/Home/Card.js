import React from "react";
import styles from "../../styles/Home/Card.module.scss";

const Card = ({ title, text, imgSrc, videoSrc, revers }) => {
    let style = styles.card;
    if (revers) {
        style = `${styles.card} ${styles.revers}`;
    }
    let content;
    if (videoSrc) {
        content = (
            <div className={styles.card__view_video}>
                <video autoPlay muted loop preload="auto" type="video/mp4">
                    <source src={videoSrc} />
                </video>
            </div>
        );
    }
    return (
        <article className={style}>
            <section className="container">
                <article className={styles.card__content}>
                    <h4>{title}</h4>
                    <p>{text}</p>
                </article>
                <article className={styles.card__view}>
                    <div className={styles.card__view_image}>
                        <img src={imgSrc} alt="content-tv" />
                        {content}
                    </div>
                </article>
            </section>
        </article>
    );
};

export default Card;
