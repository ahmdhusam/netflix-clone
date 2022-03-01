import React from "react";
import dynamic from "next/dynamic";

import { Navigation, Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

const Slide = dynamic(() => import("./Slide"));

// style
import styles from "../../../styles/Layout/Slider/Index.module.scss";

export default function Slider({ banners }) {
    return (
        <section className={`${styles.slider} pl`}>
            <strong className={styles.slider__title}>popular</strong>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={10}
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
                    delay: 500000,
                    disableOnInteraction: false,
                }}
            >
                {banners?.map((banner) => (
                    <SwiperSlide key={banner.title}>
                        <Slide {...banner} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
