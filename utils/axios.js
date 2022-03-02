import axios from "axios";

const TMDB = () =>
    axios.create({
        baseURL: "https://api.themoviedb.org/3",
    });

export default TMDB;
