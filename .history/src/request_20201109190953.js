const API_KEY ="4d985b549a4462ab7e93d987c24153c7";

const requests ={
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&language=en-US`,
fetch:`discover/movie?primary_release_year=2020&sort_by=vote_average.desc,
https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=18`,
https://api.themoviedb.org/3/genre/movie/list
https://api.themoviedb.org/3/trending/all/week
https://api.themoviedb.org/3/search/keyword?query=parasite
}


export default requests;