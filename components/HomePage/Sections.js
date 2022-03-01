import React, { Fragment } from "react";
import dynamic from "next/dynamic";

// components
const Slider = dynamic(() => import("../layout/slider"));

function dummySections() {
    return Array.from(new Array(5));
}

export default function Sections({ banners }) {
    return (
        <Fragment>
            {dummySections().map((i, index) => (
                <Slider key={index} banners={banners} />
            ))}
        </Fragment>
    );
}
