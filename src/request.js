const APIKEY = "4d40e372a066d33a221bf69d9680c8f6"

const request =
    [
        {
            endPoint: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
            type: "Trending Now"
        },
        {
            endPoint: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
            type: "Top Rated"
        },
        {
            endPoint: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
            type: "Action Movies"
        },
        {
            endPoint: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
            type: "Comedy Movies"
        },
        {
            endPoint: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
            type: "Horror Movies"
        },
        {
            endPoint: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
            type: "Romance Movies"
        },
        {
            endPoint: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
            type: "Documentries"
        }
    ]


export default request;