import { useContext } from "react";
import Image from "next/image";

import ctx from "../../../context";

// icons
import { IoIosArrowDropdown as DropDownIcon } from "react-icons/io";
import { PlayIcon, AddIcon, DislikeIcon, LikeIcon } from "../../../utils/icons";

// style
import styles from "../../../styles/Layout/Slider/Slide.module.scss";

export default function Slide(props) {
    const { openModal } = useContext(ctx);
    return (
        <article className={styles.slide}>
            <div className={styles.slide__image}>
                <Image
                    src={props?.backdrop}
                    alt={props?.title}
                    layout="fill"
                    priority={false}
                />
            </div>

            <div className={styles.slide__content}>
                <div className={styles.slide__content_icons}>
                    <div className={styles.slide__content_icons_controls}>
                        <PlayIcon />
                        <AddIcon />
                        <LikeIcon />
                        <DislikeIcon />
                    </div>
                    <div className={styles.slide__content_icons_drop}>
                        <DropDownIcon onClick={openModal.bind(null, props)} />
                    </div>
                </div>
                <h4 className={styles.slide__content_title}>
                    {props?.title.substr(0, 13)}
                    {props?.title.length > 13 && "..."}
                </h4>
                <div className={styles.slide__content_vote}>
                    {props?.vote}% Match
                </div>
                <div className={styles.slide__content_genre}>drama</div>
            </div>
        </article>
    );
}
