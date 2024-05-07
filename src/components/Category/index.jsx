import React from "react";
import SexCategory from "./sex_category";
import TypeCategory from "./type_category";
import UseCategory from "./use_category";
import PriceCategory from "./price_category";
import ColorCategory from "./colors_category";

export default function Category() {
    return (
        <div className="category_section">
            <SexCategory />
            <TypeCategory />
            <UseCategory />
            <PriceCategory />
            <ColorCategory />
           
        </div>
    );
}
