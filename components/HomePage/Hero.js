import { useCallback, useContext, useEffect, useState } from "react";
import Image from "next/image";

// icons
import { AiOutlineInfoCircle as InfoIcon } from "react-icons/ai";
import { PlayIcon } from "../../utils/icons";

// global state
import ctx from "../../context";

// hooks
import useIsMobile from "../../hooks/useIsMobile";

// style
import styles from "../../styles/HomePage/Hero.module.scss";

export default function Hero({ banners }) {
    const [banner, setBanner] = useState(banners[0]);
    const { openModal } = useContext(ctx);
    const { isMobile } = useIsMobile();

    const randomIndex = useCallback(
        (bannerId) => {
            if (banners.length === 1) {
                return 0;
            }

            const newRandomIndex = Math.floor(Math.random() * banners.length);
            if (banners[newRandomIndex].id === bannerId) {
                return randomIndex(bannerId);
            }

            return newRandomIndex;
        },
        [banners]
    );

    // change banner every 30s
    useEffect(() => {
        const changebanner = setTimeout(function changeBannerFn() {
            let index = randomIndex(banner.id);
            setBanner(banners[index]);
        }, 30 * 1000);

        return () => {
            clearTimeout(changebanner);
        };
    }, [banners, banner, setBanner, randomIndex]);

    if (!banners.length) {
        return <div>Sorry Out Of Data</div>;
    }

    return (
        <header className={`pl ${styles.hero}`}>
            <div className={styles.hero_image}>
                <Image
                    src={isMobile ? banner?.poster : banner?.fullBackdrop}
                    alt="spotlight"
                    layout="fill"
                    priority={true}
                />
            </div>

            <div className={styles.hero__content}>
                <h1>
                    {banner?.title.substr(0, 20)}
                    {banner?.title.length > 20 && "..."}
                </h1>
                <p>{banner?.description?.substr(0, 150)}...</p>
                <div className={styles.hero__content_buttons}>
                    <button>
                        <PlayIcon /> <span>Play</span>
                    </button>
                    <button onClick={openModal.bind(null, banner)}>
                        <InfoIcon /> <span>More Info</span>
                    </button>
                </div>
            </div>
            <div></div>
        </header>
    );
}
