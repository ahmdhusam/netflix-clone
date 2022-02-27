export const parseData = (data = []) => {
    return data.map((item) => ({
        id: item.id,
        title: item.original_title,
        description: item.overview,
        poster: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
        vote: Math.round(item.vote_average * 10),
    }));
};
