export const parseData = (data = []) => {
    return data.map((item) => ({
        id: item.id,
        title: item.original_title ?? item.name,
        description: item.overview,
        poster: `https://image.tmdb.org/t/p/original${
            item.poster_path ?? item.backdrop_path
        }`,
        fullBackdrop: `https://image.tmdb.org/t/p/original${
            item.backdrop_path ?? item.poster_path
        }`,
        backdrop: `https://image.tmdb.org/t/p/w400${
            item.backdrop_path ?? item.poster_path
        }`,
        vote: Math.round(item.vote_average * 10),
    }));
};
