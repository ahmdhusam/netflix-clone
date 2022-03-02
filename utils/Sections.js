const sections = [
    {
        header: "Popular on Nextflix",
        get: "/tv/popular",
    },
    {
        header: "Horror Movies",
        get: "/discover/movie?with_genres=27",
    },
    {
        header: "Only on Nextflix",
        get: "/discover/tv",
    },
    {
        header: "Trending Now",
        get: "/trending/movie/week",
    },
    {
        header: "Comedies",
        get: "/discover/movie?with_genres=35",
    },
    {
        header: "Top 10 in US Today",
        get: "/trending/tv/day",
        top: true,
    },
    {
        header: "Action",
        get: "/discover/movie?with_genres=28",
    },
    {
        header: "TV Sci-Fi and Horror",
        get: "/discover/tv?with_genres=10765",
    },
    {
        header: "Mystery Movies",
        get: "/discover/movie?with_genres=9648",
    },
    {
        header: "Animation",
        get: "/discover/tv?with_genres=16",
    },
    {
        header: "Drama",
        get: "/discover/movie?with_genres=18",
    },
];

export default sections;
