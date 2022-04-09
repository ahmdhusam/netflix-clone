import { parseData } from "./parseData";
import sectionsList from "./sectionsList";

export const parseSlide = (arrOfData, index) => ({
    title: sectionsList[index].title,
    isTopTen: sectionsList[index].topTen ?? false,
    isNotDefault: sectionsList[index].isNotDefault ?? false,
    sliderData: sectionsList[index].topTen
        ? parseData(arrOfData.slice(0, 10))
        : parseData(arrOfData),
});


