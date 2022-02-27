import { useCallback, useContext, useEffect, useState } from "react";
import Image from "next/image";

// icons
import { FaPlay as PlayIcon } from "react-icons/fa";
import { AiOutlineInfoCircle as InfoIcon } from "react-icons/ai";

// components
import Slider from "../layout/slider";

// global state
import ctx from "../../context";

// style
import styles from "../../styles/HomePage/Hero.module.scss";

export default function Hero({ banners }) {
    const { openModal } = useContext(ctx);
    const [banner, setBanner] = useState(banners[0]);

    const randomIndex = useCallback(
        (bannerId) => {
            const newRandomIndex = Math.floor(Math.random() * banners.length);

            if (banners[newRandomIndex].id === bannerId) {
                return randomIndex(bannerId);
            }

            return newRandomIndex;
        },
        [banners]
    );

    // change banner every 10s
    useEffect(() => {
        const changebanner = setTimeout(function changeBannerFn() {
            let index = randomIndex(banner.id);
            setBanner(banners[index]);
        }, 15 * 1000);

        return () => {
            clearTimeout(changebanner);
        };
    }, [banners, banner, setBanner, randomIndex]);

    if (!!banners.length) {
        return <div>Out of Data</div>;
    }

    return (
        <header className={styles.hero}>
            <div className={styles.hero_image}>
                <Image
                    src={banner?.poster}
                    alt="spotlight"
                    layout="fill"
                    // priority={true}
                />
            </div>

            <div className={styles.hero__content}>
                <h1>{banner?.title}</h1>
                <p>{banner?.description?.substr(0, 200)}...</p>
                <div className={styles.hero__content_buttons}>
                    <button>
                        <PlayIcon /> <span>Play</span>
                    </button>
                    <button onClick={openModal.bind(null, banner)}>
                        <InfoIcon /> <span> More Info</span>
                    </button>
                </div>
            </div>
            <div style={{ height: "100px", background: "grey" }}>
                <Slider />
            </div>
        </header>
    );
}
