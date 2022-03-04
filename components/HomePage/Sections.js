import React, { Fragment } from "react";
import dynamic from "next/dynamic";

// components
const Slider = dynamic(() => import("../layout/slider"));

export default function Sections({ sectionsData }) {
    return (
        <Fragment>
            {sectionsData.map((sectionData) => (
                <Slider key={sectionData.title} {...sectionData} />
            ))}
        </Fragment>
    );
}
