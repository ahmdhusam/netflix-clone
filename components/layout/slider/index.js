import React from "react";
import dynamic from "next/dynamic";

import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slide = dynamic(() => import("./Slide"));

// style
import styles from "../../../styles/Layout/Slider/Index.module.scss";

export default function Slider({ title, section }) {
    return (
        <section className={`${styles.slider} pl`}>
            <strong className={styles.slider__title}>{title}</strong>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={15}
                slidesPerView={1}
                speed={500}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 5,
                    },
                }}
                autoplay={{
                    delay: 15 * 1000,
                    disableOnInteraction: true,
                }}
            >
                {section?.map((slideData) => (
                    <SwiperSlide key={slideData.title}>
                        <Slide {...slideData} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
