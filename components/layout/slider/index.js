import React from "react";
import dynamic from "next/dynamic";

import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slide = dynamic(() => import("./Slide"));
const TopTenSlide = dynamic(() => import("./TopTenSlide"));

// style
import styles from "../../../styles/Layout/Slider/Index.module.scss";

export default function Slider({ title, isTopTen, isNotDefault, sliderData }) {
    const slideStyle = `${styles.slider__swiper} ${
        isNotDefault && !isTopTen && styles.isNotDefault
    }`;

    return (
        <section className={`${styles.slider} pl`}>
            <strong className={styles.slider__title}>{title}</strong>
            <Swiper
                className={slideStyle}
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
                {sliderData?.map((slideData, index) => (
                    <SwiperSlide
                        className={styles.slider__swiper_swiperSlide}
                        key={slideData.id}
                    >
                        {!isTopTen ? (
                            <Slide isNotDefault={isNotDefault} {...slideData} />
                        ) : (
                            <TopTenSlide index={index + 1} {...slideData} />
                        )}
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
                slidesPerView: 2.75,
            },
            992: {
                slidesPerView: 3.5,
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
            slidesPerView: 3.25,
        },
        1200: {
            slidesPerView: 4.5,
        },
    };
}
