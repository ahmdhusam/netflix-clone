import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import sections from "../../utils/Sections";

// components
const Slider = dynamic(() => import("../layout/slider"));

export default function Sections({ sectionsData }) {
    return (
        <Fragment>
            {sectionsData.map((section, index) => (
                <Slider
                    key={sections[index].header}
                    title={sections[index].header}
                    section={section}
                />
            ))}
        </Fragment>
    );
}
