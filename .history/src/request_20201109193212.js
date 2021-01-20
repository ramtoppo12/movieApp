const API_KEY ="4d985b549a4462ab7e93d987c24153c7";

const requests ={
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&language=en-US`,
fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchNetfixOriginals:`/discover/tv?api_key=${API_KEY}&with_network=213`,
fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomenticMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchDocumentaries:`discover/movie?api_key=${API_KEY}&with_genres=99`,

// https://api.themoviedb.org/3/genre/movie/list
// https://api.themoviedb.org/3/trending/all/week
// https://api.themoviedb.org/3/search/keyword?query=parasite
}


export default requests;