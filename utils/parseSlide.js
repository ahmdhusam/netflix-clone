import sectionsList from "./sectionsList";

export const parseSlide = (arrOfData, index) => ({
    title: sectionsList[index].title,
    isTopTen: sectionsList[index].topTen ?? false,
    isNotDefault: sectionsList[index].isNotDefault ?? false,
    sliderData: sectionsList[index].topTen
        ? parseData(arrOfData.slice(0, 10))
        : parseData(arrOfData),
});

const parseData = (data = []) => {
    return data.map((item) => ({
        id: item.id,
        title: item.original_title ?? item.name,
        description: item.overview,
        fullPoster: `https://image.tmdb.org/t/p/original${
            item.poster_path ?? item.backdrop_path
        }`,
        poster: `https://image.tmdb.org/t/p/w300${
            item.poster_path ?? item.backdrop_path
        }`,
        fullBackdrop: `https://image.tmdb.org/t/p/original${
            item.backdrop_path ?? item.poster_path
        }`,
        backdrop: `https://image.tmdb.org/t/p/w300${
            item.backdrop_path ?? item.poster_path
        }`,
        vote: Math.round(item.vote_average * 10),
    }));
};
