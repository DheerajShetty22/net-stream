const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1fb03ee047ea180033951faef79393f2"
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280"
const TV_API_URL = "https://api.themoviedb.org/3/tv/popular?api_key=1fb03ee047ea180033951faef79393f2&language=en-US&page=1"
const h1 = document.querySelector("h1");
const mainImage = document.querySelector(".carousel-cell")
const list_title = localStorage.getItem("popular_title");
const list_id = localStorage.getItem("search_id");
console.log(list_id);
const MOVIE_GENRE_API = "https://api.themoviedb.org/3/genre/movie/list?api_key=1fb03ee047ea180033951faef79393f2&language=en-US"
const TV_GENRE_API = "https://api.themoviedb.org/3/genre/tv/list?api_key=1fb03ee047ea180033951faef79393f2&language=en-US"
const VIDEO_PATH = "https://www.youtube.com/embed/"
const DRAMA_MOVIE_API = "https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2020&api_key=1fb03ee047ea180033951faef79393f2"
const ACTION_MOVIE_API = "https://api.themoviedb.org/3/discover/movie?with_genres=28&primary_release_year=2019&api_key=1fb03ee047ea180033951faef79393f2"
const FICTION_MOVIE_API = "https://api.themoviedb.org/3/discover/movie?with_genres=878&primary_release_year=2018&api_key=1fb03ee047ea180033951faef79393f2"
const MOVIE_SEARCH_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=1fb03ee047ea180033951faef79393f2&language=en-US&page=1&include_adult=true&query=${list_title}`;
const list_movie_genre = document.querySelector("#list-genre");
const title = document.querySelector("title");
title.textContent = list_title;
console.log(list_title);
const overview = document.querySelector("#overview");
const rating = document.querySelector("#rating");
const frame = document.querySelector("iframe");
const main = document.querySelector(".main-list");
const genre_movie_array = [];
const genre_tv_array = [];
const check = async () => {
    const res1 = await axios.get(MOVIE_SEARCH_API_URL);
    console.log(res1.data.results)
    for (i = 0; i < res1.data.results.length; i++) {
        if (res1.data.results[i].id === parseInt(list_id)) {
            console.log(list_id);
            movie_genre_axios(res1.data.results[i].genre_ids)
            check1(res1.data.results[i])
            console.log("hereeee");
        }
    }

}
check();
const check1 = (data) => {
    // data.forEach((elements) => {
    main.innerHTML = "";
    const { backdrop_path, overview, genre_ids, vote_average, id, title } = data;
    console.log(data);
    console.log(backdrop_path);
    const backimage = IMAGE_PATH + backdrop_path;
    const list_div = document.createElement('div');
    list_div.classList.add("list_div");
    list_div.innerHTML = `   <div class="carousel-cell" style="background-image:url(${backimage});margin-right:2rem;">
        <div class="main-infodiv">
            <h1>${title}</h1>

            <i class="fas fa-star">
                <h4 id="rating" style="font-weight:bolder;">${vote_average}</h4>
            </i>
            <h4 id="list-genre" style="color: red;font-weight: bolder; ">${genre_movie_array[0]} | ${genre_movie_array[1]}</h4>

            <h5 id="overview" style="font-weight:bold;">
                <br>
               ${overview}
            </h5>
        </div>
    </div>`
    main.appendChild(list_div);

    // })
}

// const check = async () => {
//     const res1 = await axios.get(API_URL);
//     console.log(res1.data);
//     const res2 = await axios.get(TV_API_URL);
//     console.log(res2.data);
//     const res3 = await axios.get(DRAMA_MOVIE_API);
//     console.log(res3.data);
//     const res4 = await axios.get(ACTION_MOVIE_API);
//     console.log(res3.data);
//     const res5 = await axios.get(FICTION_MOVIE_API);
//     console.log(res3.data);
//     //ASSIGNING MOVIE DATA TO DOM 
//     for (i = 0; i < res1.data.results.length; i++) {
//         if (list_title === res1.data.results[i].title) {
//             tempimage = IMAGE_PATH + res1.data.results[i].backdrop_path
//             mainImage.attributes[1].value = `background-image:url(${tempimage});margin-right:2rem;`
//             overview.textContent = res1.data.results[i].overview;
//             rating.textContent = res1.data.results[i].vote_average;
//             assign();
//             movie_genre_axios(res1.data.results[i].genre_ids)
//             const MOVIE_VIDEO_API_URL = `https://api.themoviedb.org/3/movie/${res1.data.results[i].id}/videos?api_key=1fb03ee047ea180033951faef79393f2&language=en-US`
//             movievideo(MOVIE_VIDEO_API_URL);
//         }


//     }
//     //ASSIGNING TV SHOW DATA TO DOM
//     for (i = 0; i < res2.data.results.length; i++) {
//         if (list_title === res2.data.results[i].name) {
//             tempimage = IMAGE_PATH + res2.data.results[i].backdrop_path
//             mainImage.attributes[1].value = `background-image:url(${tempimage});margin-right:2rem;`
//             overview.textContent = res2.data.results[i].overview;
//             rating.textContent = res2.data.results[i].vote_average;
//             console.log(list_title);
//             assign();
//             tv_genre_axios(res2.data.results[i].genre_ids)
//             const TV_VIDEO_API_URL = `https://api.themoviedb.org/3/tv/${res2.data.results[i].id}/videos?api_key=1fb03ee047ea180033951faef79393f2&language=en-US`
//             tvvideo(TV_VIDEO_API_URL);

//         }
//     }
//     //ASSIGNING DRAMA GENRE MOVIES TO DOM
//     for (i = 0; i < res3.data.results.length; i++) {
//         if (list_title === res3.data.results[i].title) {
//             tempimage = IMAGE_PATH + res3.data.results[i].backdrop_path
//             mainImage.attributes[1].value = `background-image:url(${tempimage});margin-right:2rem;`
//             overview.textContent = res3.data.results[i].overview;
//             rating.textContent = res3.data.results[i].vote_average;
//             console.log(list_title);
//             assign();
//             movie_genre_axios(res3.data.results[i].genre_ids)
//             const MOVIE_VIDEO_API_URL = `https://api.themoviedb.org/3/movie/${res3.data.results[i].id}/videos?api_key=1fb03ee047ea180033951faef79393f2&language=en-US`
//             movievideo(MOVIE_VIDEO_API_URL);

//         }
//     }
//     //ASSIGNING ACTION GENRE MOVIES TO DOM
//     for (i = 0; i < res4.data.results.length; i++) {
//         if (list_title === res4.data.results[i].title) {
//             tempimage = IMAGE_PATH + res4.data.results[i].backdrop_path
//             mainImage.attributes[1].value = `background-image:url(${tempimage});margin-right:2rem;`
//             overview.textContent = res4.data.results[i].overview;
//             rating.textContent = res4.data.results[i].vote_average;
//             console.log(list_title);
//             assign();
//             movie_genre_axios(res4.data.results[i].genre_ids)
//             const MOVIE_VIDEO_API_URL = `https://api.themoviedb.org/3/movie/${res4.data.results[i].id}/videos?api_key=1fb03ee047ea180033951faef79393f2&language=en-US`
//             movievideo(MOVIE_VIDEO_API_URL);

//         }
//     }
//     //ASSIGNING FICTION GENRE MOVIES TO DOM
//     for (i = 0; i < res5.data.results.length; i++) {
//         if (list_title === res5.data.results[i].title) {
//             tempimage = IMAGE_PATH + res5.data.results[i].backdrop_path
//             mainImage.attributes[1].value = `background-image:url(${tempimage});margin-right:2rem;`
//             overview.textContent = res5.data.results[i].overview;
//             rating.textContent = res5.data.results[i].vote_average;
//             console.log(list_title);
//             assign();
//             movie_genre_axios(res5.data.results[i].genre_ids)
//             const MOVIE_VIDEO_API_URL = `https://api.themoviedb.org/3/movie/${res5.data.results[i].id}/videos?api_key=1fb03ee047ea180033951faef79393f2&language=en-US`
//             movievideo(MOVIE_VIDEO_API_URL);

//         }
//     }
// }
// check();
const assign = () => {
    h1.textContent = list_title;
}
//assign movie genre to DOM
// const m_genre_assign = () => {

//     if (genre_movie_array[0] === undefined) {
//         list_movie_genre.textContent = "";
//     }
//     else {

//         list_movie_genre.textContent = genre_movie_array[0] + " | " + genre_movie_array[1];
//     }

// }
//assign tv genre to DOM
const t_genre_assign = () => {

    if (genre_tv_array[0] === undefined) {
        list_movie_genre.textContent = "";
    }
    else {

        list_movie_genre.textContent = genre_tv_array[0] + " | " + genre_tv_array[1];
    }

}
//this fuction gets genres of movies and push in the array genre_tv_array
const movie_genre_axios = async (movie_data) => {
    const res3 = await axios.get(MOVIE_GENRE_API);
    console.log(res3);
    for (genre of movie_data) {
        for (genre_API of res3.data.genres) {
            if (genre === genre_API.id) {

                genre_movie_array.push(genre_API.name);

            }
        }
    }
    m_genre_assign(genre_movie_array);
}

const tv_genre_axios = async (tv_data) => {
    const res3 = await axios.get(TV_GENRE_API);
    console.log(res3);
    for (genre of tv_data) {
        for (genre_API of res3.data.genres) {
            if (genre === genre_API.id) {

                genre_tv_array.push(genre_API.name);

            }
        }
    }
    t_genre_assign(genre_tv_array);
}
const movievideo = async (data) => {
    const res4 = await axios.get(data);
    console.log(res4);
    for (t of res4.data.results) {
        if (t.type === "Trailer") {
            console.log(t.key);
            break;
        }
    }
    frame.src = VIDEO_PATH + t.key;
}

const tvvideo = async (data) => {
    const res5 = await axios.get(data);
    console.log(res5);
    for (t of res5.data.results) {
        if (t.type === "Trailer") {
            console.log(t.key);
            break;
        }
    }
    frame.src = VIDEO_PATH + t.key;
}