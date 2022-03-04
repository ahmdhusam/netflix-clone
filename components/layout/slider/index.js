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

export default function Slider({ title, isNotDefault, sliderData }) {
    return (
        <section className={`${styles.slider} pl`}>
            <strong className={styles.slider__title}>{title}</strong>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={15}
                slidesPerView={isNotDefault ? 1.75 : 1.25}
                speed={500}
                breakpoints={handleBreakPoints(isNotDefault)}
                autoplay={{
                    delay: 15 * 1000,
                    disableOnInteraction: true,
                }}
            >
                {sliderData?.map((slideData) => (
                    <SwiperSlide key={slideData.title}>
                        <Slide isNotDefault={isNotDefault} {...slideData} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

function handleBreakPoints(isNotDefault) {
    if (isNotDefault) {
        return {
            768: {
                slidesPerView: 3.5,
            },
            992: {
                slidesPerView: 4.5,
            },
            1200: {
                slidesPerView: 5.5,
            },
        };
    }

    return {
        768: {
            slidesPerView: 2.5,
        },
        992: {
            slidesPerView: 3.5,
        },
        1200: {
            slidesPerView: 4.5,
        },
    };
}
