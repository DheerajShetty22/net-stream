const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1fb03ee047ea180033951faef79393f2"
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280"
const IMAGE_PATH_MOBILE_POSTER = "https://image.tmdb.org/t/p/w200"
const TV_API_URL = "https://api.themoviedb.org/3/tv/popular?api_key=1fb03ee047ea180033951faef79393f2&language=en-US&page=1"
const ROMANCE_MOVIE_API = "https://api.themoviedb.org/3/discover/movie?with_genres=10749&primary_release_year=2021&api_key=1fb03ee047ea180033951faef79393f2"
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const mainImage = document.querySelector(".carousel-celll")
const castName = document.querySelectorAll(".carousel-cell")
const castcarousel = document.querySelector(".main-carousel")
const list_title = localStorage.getItem("popular_title");
const list_id = localStorage.getItem("search_id");
console.log(list_id);
const MOVIE_GENRE_API = "https://api.themoviedb.org/3/genre/movie/list?api_key=1fb03ee047ea180033951faef79393f2&language=en-US"
const TV_GENRE_API = "https://api.themoviedb.org/3/genre/tv/list?api_key=1fb03ee047ea180033951faef79393f2&language=en-US"
const VIDEO_PATH = "https://www.youtube.com/embed/"
const DRAMA_MOVIE_API = "https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2020&api_key=1fb03ee047ea180033951faef79393f2"
const ACTION_MOVIE_API = "https://api.themoviedb.org/3/discover/movie?with_genres=16&primary_release_year=2019&api_key=1fb03ee047ea180033951faef79393f2&language=en-US&page=1"
const FICTION_MOVIE_API = "https://api.themoviedb.org/3/discover/movie?with_genres=878&primary_release_year=2020&api_key=1fb03ee047ea180033951faef79393f2"
const MOVIE_SEARCH_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=1fb03ee047ea180033951faef79393f2&language=en-US&page=1&include_adult=true&query=${list_title}`;
const TV_SEARCH_API_URL = `https://api.themoviedb.org/3/search/tv?api_key=1fb03ee047ea180033951faef79393f2&language=en-US&page=1&include_adult=true&query=${list_title}`;
const ADVENTURE_TV_API = "https://api.themoviedb.org/3/discover/tv?with_genres=10768&primary_release_year=2021&api_key=1fb03ee047ea180033951faef79393f2"
const ACTION_TV_API = "https://api.themoviedb.org/3/discover/tv?with_genres=10759&primary_release_year=2021&api_key=1fb03ee047ea180033951faef79393f2&language=en-US&page=1"
const COMEDY_TV_API = "https://api.themoviedb.org/3/discover/tv?with_genres=35&primary_release_year=2021&api_key=1fb03ee047ea180033951faef79393f2"
const MYSTERY_TV_API = "https://api.themoviedb.org/3/discover/tv?with_genres=9648&primary_release_year=2021&api_key=1fb03ee047ea180033951faef79393f2"
const DRAMA_MOVIE_API_SEARCH = "https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2021&api_key=1fb03ee047ea180033951faef79393f2"
const ACTION_MOVIE_API_SEARCH = "https://api.themoviedb.org/3/discover/movie?with_genres=28&primary_release_year=2019&api_key=1fb03ee047ea180033951faef79393f2&language=en-US&page=1"
const downloadDiv = document.querySelectorAll(".download");
const list_movie_genre = document.querySelector("#list-genre");
const cast = document.querySelectorAll(".cast");
const title = document.querySelector("title");
const trailer_vid = document.querySelector(".trailer-vid");
const play_img_btn = document.querySelector(".img-play");
const online_player = document.querySelector(".online-player");
const mob_res = document.querySelector(".mobile-responsive");

title.textContent = list_title;
console.log(list_title);
const overview = document.querySelector("#overview");
const overview_mob = document.querySelector("#mob_desc")
const rating = document.querySelector("#rating");
const rating_mob = document.querySelector("#rating_mob");
const frame = document.querySelector("iframe");
const main = document.querySelector(".main-list");
const genre_movie_array = [];
const genre_tv_array = [];
// const check1 = async () => {

// for (i = 0; i < res1.data.results.length; i++) {
//     if (res1.data.results[i].id === parseInt(list_id)) {
//         console.log(list_id);
//         movie_genre_axios(res1.data.results[i].genre_ids)
//         check1(res1.data.results[i])
//         console.log("hereeee");
//     }
// }

// }
// check1();
// const check1 = (data) => {
//     // data.forEach((elements) => {
//     main.innerHTML = "";
//     const { backdrop_path, overview, genre_ids, vote_average, id, title } = data;
//     console.log(data);
//     console.log(backdrop_path);
//     const backimage = IMAGE_PATH + backdrop_path;
//     const list_div = document.createElement('div');
//     list_div.classList.add("list_div");
//     list_div.innerHTML = `   <div class="carousel-cell" style="background-image:url(${backimage});margin-right:2rem;">
//         <div class="main-infodiv">
//             <h1>${title}</h1>

//             <i class="fas fa-star">
//                 <h4 id="rating" style="font-weight:bolder;">${vote_average}</h4>
//             </i>
//             <h4 id="list-genre" style="color: red;font-weight: bolder; ">${genre_movie_array[0]} | ${genre_movie_array[1]}</h4>

//             <h5 id="overview" style="font-weight:bold;">
//                 <br>
//                ${overview}
//             </h5>
//         </div>
//     </div>`
//     main.appendChild(list_div);

//     // })
// }

const check = async () => {
    const res1 = await axios.get(API_URL);
    console.log(res1.data.results);
    const res2 = await axios.get(TV_API_URL);
    console.log(res2.data.results);
    const res3 = await axios.get(DRAMA_MOVIE_API);
    console.log(res3.data.results);
    const res4 = await axios.get(ACTION_MOVIE_API);
    console.log(res4.data.results);
    const res5 = await axios.get(FICTION_MOVIE_API);
    console.log(res5.data.results);
    const res6 = await axios.get(MOVIE_SEARCH_API_URL);
    console.log(res6.data.results)
    const res7 = await axios.get(TV_SEARCH_API_URL);
    console.log(res7.data.results)
    const res8 = await axios.get(ROMANCE_MOVIE_API);
    console.log(res8.data.results)
    const res9 = await axios.get(ADVENTURE_TV_API);
    console.log(res9.data.results)
    const res10 = await axios.get(ACTION_TV_API);
    console.log(res10.data.results)
    const res11 = await axios.get(COMEDY_TV_API);
    console.log(res11.data.results)
    const res12 = await axios.get(MYSTERY_TV_API);
    console.log(res12.data.results)
    const res13 = await axios.get(DRAMA_MOVIE_API_SEARCH);
    console.log(res13.data.results)
    const res14 = await axios.get(ACTION_MOVIE_API_SEARCH);
    console.log(res14.data.results)

    //OVERLAPPING ONLINE PLAYER OVER POSTER
    play_img_btn.addEventListener("click", () => {
        const mainImage = document.querySelector(".carousel-celll")
        const play_img_btn = document.querySelector(".img-play");
        const online_player = document.querySelector(".online-player");
        mainImage.style.zIndex = "-1";
        play_img_btn.style.display = "none";
        // online_player.allow = "autoplay";
    })
    //ASSIGNING MOVIE DATA TO DOM 
    for (i = 0; i < res1.data.results.length; i++) {
        if (list_title === res1.data.results[i].title) {
            tempimage = IMAGE_PATH + res1.data.results[i].backdrop_path
            mainImage.attributes[1].value = `background-image:url(${tempimage});margin-right:2rem;`
            temp = IMAGE_PATH_MOBILE_POSTER + res1.data.results[i].poster_path;
            mob_res.children[0].src = temp;
            overview.textContent = res1.data.results[i].overview;
            overview_mob.textContent = res1.data.results[i].overview;
            rating.textContent = res1.data.results[i].vote_average;
            rating_mob.textContent = res1.data.results[i].vote_average;
            assign();
            movie_genre_axios(res1.data.results[i].genre_ids)
            const MOVIE_VIDEO_API_URL = `https://api.themoviedb.org/3/movie/${res1.data.results[i].id}/videos?api_key=1fb03ee047ea180033951faef79393f2&language=en-US`
            movievideo(MOVIE_VIDEO_API_URL);
            castAssign(res1.data.results[i].id);
            movieDownload(res1.data.results[i].id);
        }


    }
    //ASSIGNING TV SHOW DATA TO DOM
    for (i = 0; i < res2.data.results.length; i++) {
        if (list_title === res2.data.results[i].name) {
            tempimage = IMAGE_PATH + res2.data.results[i].backdrop_path
            mainImage.attributes[1].value = `background-image:url(${tempimage});margin-right:2rem;`
            temp = IMAGE_PATH_MOBILE_POSTER + res2.data.results[i].poster_path;
            mob_res.children[0].src = temp;
            overview.textContent = res2.data.results[i].overview;
            overview_mob.textContent = res2.data.results[i].overview;
            rating.textContent = res2.data.results[i].vote_average;
            rating_mob.textContent = res2.data.results[i].vote_average;
            console.log(list_title);
            assign();
            tv_genre_axios(res2.data.results[i].genre_ids)
            const TV_VIDEO_API_URL = `https://api.themoviedb.org/3/tv/${res2.data.results[i].id}/videos?api_key=1fb03ee047ea180033951faef79393f2&language=en-US`
            tvvideo(TV_VIDEO_API_URL);
            castAssignTV(res2.data.results[i].id);

        }
    }
    //ASSIGNING DRAMA GENRE MOVIES TO DOM
    for (i = 0; i < res3.data.results.length; i++) {
        if (list_title === res3.data.results[i].title) {
            tempimage = IMAGE_PATH + res3.data.results[i].backdrop_path
            mainImage.attributes[1].value = `background-image:url(${tempimage});margin-right:2rem;`
            temp = IMAGE_PATH_MOBILE_POSTER + res3.data.results[i].poster_path;
            mob_res.children[0].src = temp;
            overview.textContent = res3.data.results[i].overview;
            overview_mob.textContent = res3.data.results[i].overview;
            rating.textContent = res3.data.results[i].vote_average;
            rating_mob.textContent = res3.data.results[i].vote_average;
            console.log(list_title);
            assign();
            movie_genre_axios(res3.data.results[i].genre_ids)
            const MOVIE_VIDEO_API_URL = `https://api.themoviedb.org/3/movie/${res3.data.results[i].id}/videos?api_key=1fb03ee047ea180033951faef79393f2&language=en-US`
            movievideo(MOVIE_VIDEO_API_URL);
            castAssign(res3.data.results[i].id);
            movieDownload(res3.data.results[i].id);


        }
    }
    //ASSIGNING ACTION GENRE MOVIES TO DOM
    for (i = 0; i < res4.data.results.length; i++) {
        if (list_title === res4.data.results[i].title) {

            tempimage = IMAGE_PATH + res4.data.results[i].backdrop_path
            mainImage.attributes[1].value = `background-image:url(${tempimage});margin-right:2rem;`
            temp = IMAGE_PATH_MOBILE_POSTER + res4.data.results[i].poster_path;
            mob_res.children[0].src = temp;
            overview.textContent = res4.data.results[i].overview;
            overview_mob.textContent = res4.data.results[i].overview;
            rating.textContent = res4.data.results[i].vote_average;
            rating_mob.textContent = res4.data.results[i].vote_average;
            console.log(list_title);
            assign();
            movie_genre_axios(res4.data.results[i].genre_ids)
            const MOVIE_VIDEO_API_URL = `https://api.themoviedb.org/3/movie/${res4.data.results[i].id}/videos?api_key=1fb03ee047ea180033951faef79393f2&language=en-US`
            movievideo(MOVIE_VIDEO_API_URL);
            castAssign(res4.data.results[i].id);
            movieDownload(res4.data.results[i].id);


        }
    }
    //ASSIGNING FICTION GENRE MOVIES TO DOM
    for (i = 0; i < res5.data.results.length; i++) {
        if (list_title === res5.data.results[i].title) {
            tempimage = IMAGE_PATH + res5.data.results[i].backdrop_path
            mainImage.attributes[1].value = `background-image:url(${tempimage});margin-right:2rem;`
            temp = IMAGE_PATH_MOBILE_POSTER + res5.data.results[i].poster_path;
            mob_res.children[0].src = temp;
            overview.textContent = res5.data.results[i].overview;
            overview_mob.textContent = res5.data.results[i].overview;
            rating.textContent = res5.data.results[i].vote_average;
            rating_mob.textContent = res5.data.results[i].vote_average;
            console.log(list_title);
            assign();
            movie_genre_axios(res5.data.results[i].genre_ids)
            const MOVIE_VIDEO_API_URL = `https://api.themoviedb.org/3/movie/${res5.data.results[i].id}/videos?api_key=1fb03ee047ea180033951faef79393f2&language=en-US`
            movievideo(MOVIE_VIDEO_API_URL);
            castAssign(res5.data.results[i].id);
            movieDownload(res5.data.results[i].id);


        }
    }
    //ASSIGNING SEARCHED MOVIES TO DOM
    for (i = 0; i < res6.data.results.length; i++) {
        if (parseInt(list_id) === res6.data.results[i].id) {
            tempimage = IMAGE_PATH + res6.data.results[i].backdrop_path
            mainImage.attributes[1].value = `background-image:url(${tempimage});margin-right:2rem;`
            temp = IMAGE_PATH_MOBILE_POSTER + res6.data.results[i].poster_path;
            mob_res.children[0].src = temp;
            overview.textContent = res6.data.results[i].overview;
            overview_mob.textContent = res6.data.results[i].overview;
            rating.textContent = res6.data.results[i].vote_average;
            rating_mob.textContent = res6.data.results[i].vote_average;
            console.log(list_id);
            assign();
            movie_genre_axios(res6.data.results[i].genre_ids)
            const MOVIE_VIDEO_API_URL = `https://api.themoviedb.org/3/movie/${res6.data.results[i].id}/videos?api_key=1fb03ee047ea180033951faef79393f2&language=en-US`
            movievideo(MOVIE_VIDEO_API_URL);
            castAssign(res6.data.results[i].id);
            movieDownload(res6.data.results[i].id);



        }
    }
    //ASSIGNING  SEARCH TV SHOW DATA TO DOM
    for (i = 0; i < res7.data.results.length; i++) {
        if (parseInt(list_id) === res7.data.results[i].id) {
            tempimage = IMAGE_PATH + res7.data.results[i].backdrop_path
            mainImage.attributes[1].value = `background-image:url(${tempimage});margin-right:2rem;`
            temp = IMAGE_PATH_MOBILE_POSTER + res7.data.results[i].poster_path;
            mob_res.children[0].src = temp;
            overview.textContent = res7.data.results[i].overview;
            overview_mob.textContent = res7.data.results[i].overview;
            rating.textContent = res7.data.results[i].vote_average;
            rating_mob.textContent = res7.data.results[i].vote_average;
            console.log(list_title);
            assign();
            tv_genre_axios(res7.data.results[i].genre_ids)
            const TV_VIDEO_API_URL = `https://api.themoviedb.org/3/tv/${res7.data.results[i].id}/videos?api_key=1fb03ee047ea180033951faef79393f2&language=en-US`
            tvvideo(TV_VIDEO_API_URL);
            castAssignTV(res7.data.results[i].id);


        }
    }
    //ASSIGNING ROMANCE GENRE MOVIES TO DOM
    for (i = 0; i < res8.data.results.length; i++) {
        if (list_title === res8.data.results[i].title) {
            tempimage = IMAGE_PATH + res8.data.results[i].backdrop_path
            mainImage.attributes[1].value = `background-image:url(${tempimage});margin-right:2rem;`
            temp = IMAGE_PATH_MOBILE_POSTER + res8.data.results[i].poster_path;
            mob_res.children[0].src = temp;
            overview.textContent = res8.data.results[i].overview;
            overview_mob.textContent = res8.data.results[i].overview;
            rating.textContent = res8.data.results[i].vote_average;
            rating_mob.textContent = res8.data.results[i].vote_average;
            console.log(list_title);
            assign();
            movie_genre_axios(res8.data.results[i].genre_ids)
            const MOVIE_VIDEO_API_URL = `https://api.themoviedb.org/3/movie/${res8.data.results[i].id}/videos?api_key=1fb03ee047ea180033951faef79393f2&language=en-US`
            movievideo(MOVIE_VIDEO_API_URL);
            castAssign(res8.data.results[i].id);
            movieDownload(res8.data.results[i].id);


        }
    }
    //ASSIGNING ADVETURE GENRE TV SHOWS TO DOM
    for (i = 0; i < res9.data.results.length; i++) {
        if (list_title === res9.data.results[i].name) {
            tempimage = IMAGE_PATH + res9.data.results[i].backdrop_path
            mainImage.attributes[1].value = `background-image:url(${tempimage});margin-right:2rem;`
            temp = IMAGE_PATH_MOBILE_POSTER + res9.data.results[i].poster_path;
            mob_res.children[0].src = temp;
            overview.textContent = res9.data.results[i].overview;
            overview_mob.textContent = res9.data.results[i].overview;
            rating.textContent = res9.data.results[i].vote_average;
            rating_mob.textContent = res9.data.results[i].vote_average;
            console.log(list_title);
            assign();
            tv_genre_axios(res9.data.results[i].genre_ids)
            const TV_VIDEO_API_URL = `https://api.themoviedb.org/3/tv/${res9.data.results[i].id}/videos?api_key=1fb03ee047ea180033951faef79393f2&language=en-US`
            tvvideo(TV_VIDEO_API_URL);
            castAssignTV(res1.data.results[i].id);


        }
    }
    //ASSIGNING ACTION GENRE TV SHOWS TO DOM
    for (i = 0; i < res10.data.results.length; i++) {
        if (list_title === res10.data.results[i].name) {
            tempimage = IMAGE_PATH + res10.data.results[i].backdrop_path
            mainImage.attributes[1].value = `background-image:url(${tempimage});margin-right:2rem;`
            temp = IMAGE_PATH_MOBILE_POSTER + res10.data.results[i].poster_path;
            mob_res.children[0].src = temp;
            overview.textContent = res10.data.results[i].overview;
            overview_mob.textContent = res10.data.results[i].overview;
            rating.textContent = res10.data.results[i].vote_average;
            rating_mob.textContent = res10.data.results[i].vote_average;
            console.log(list_title);
            assign();
            tv_genre_axios(res10.data.results[i].genre_ids)
            const TV_VIDEO_API_URL = `https://api.themoviedb.org/3/tv/${res10.data.results[i].id}/videos?api_key=1fb03ee047ea180033951faef79393f2&language=en-US`
            tvvideo(TV_VIDEO_API_URL);
            castAssignTV(res1.data.results[i].id);


        }
    }
    //ASSIGNING COMEDY GENRE TV SHOWS TO DOM
    for (i = 0; i < res11.data.results.length; i++) {
        if (list_title === res11.data.results[i].name) {
            tempimage = IMAGE_PATH + res11.data.results[i].backdrop_path
            mainImage.attributes[1].value = `background-image:url(${tempimage});margin-right:2rem;`
            temp = IMAGE_PATH_MOBILE_POSTER + res11.data.results[i].poster_path;
            mob_res.children[0].src = temp;
            overview.textContent = res11.data.results[i].overview;
            overview_mob.textContent = res11.data.results[i].overview;
            rating.textContent = res11.data.results[i].vote_average;
            rating_mob.textContent = res11.data.results[i].vote_average;
            console.log(list_title);
            assign();
            tv_genre_axios(res11.data.results[i].genre_ids)
            const TV_VIDEO_API_URL = `https://api.themoviedb.org/3/tv/${res11.data.results[i].id}/videos?api_key=1fb03ee047ea180033951faef79393f2&language=en-US`
            tvvideo(TV_VIDEO_API_URL);
            castAssignTV(res11.data.results[i].id);


        }
    }
    //ASSIGNING MYSTERY GENRE TV SHOWS TO DOM
    for (i = 0; i < res12.data.results.length; i++) {
        if (list_title === res12.data.results[i].name) {
            tempimage = IMAGE_PATH + res12.data.results[i].backdrop_path
            mainImage.attributes[1].value = `background-image:url(${tempimage});margin-right:2rem;`
            temp = IMAGE_PATH_MOBILE_POSTER + res12.data.results[i].poster_path;
            mob_res.children[0].src = temp;
            overview.textContent = res12.data.results[i].overview;
            overview_mob.textContent = res12.data.results[i].overview;
            rating.textContent = res12.data.results[i].vote_average;
            rating_mob.textContent = res12.data.results[i].vote_average;
            console.log(list_title);
            assign();
            tv_genre_axios(res12.data.results[i].genre_ids)
            const TV_VIDEO_API_URL = `https://api.themoviedb.org/3/tv/${res12.data.results[i].id}/videos?api_key=1fb03ee047ea180033951faef79393f2&language=en-US`
            tvvideo(TV_VIDEO_API_URL);
            castAssignTV(res12.data.results[i].id);


        }
    }
    //ASSIGNING DRAMA GENRE MOVIES(2021) TO DOM
    for (i = 0; i < res13.data.results.length; i++) {
        if (list_title === res13.data.results[i].title) {
            tempimage = IMAGE_PATH + res13.data.results[i].backdrop_path
            mainImage.attributes[1].value = `background-image:url(${tempimage});margin-right:2rem;`
            temp = IMAGE_PATH_MOBILE_POSTER + res13.data.results[i].poster_path;
            mob_res.children[0].src = temp;
            overview.textContent = res13.data.results[i].overview;
            overview_mob.textContent = res13.data.results[i].overview;
            rating.textContent = res13.data.results[i].vote_average;
            rating_mob.textContent = res13.data.results[i].vote_average;
            console.log(list_title);
            assign();
            movie_genre_axios(res13.data.results[i].genre_ids)
            const MOVIE_VIDEO_API_URL = `https://api.themoviedb.org/3/movie/${res13.data.results[i].id}/videos?api_key=1fb03ee047ea180033951faef79393f2&language=en-US`
            movievideo(MOVIE_VIDEO_API_URL);
            castAssign(res13.data.results[i].id);
            movieDownload(res13.data.results[i].id);


        }
    }
    //ASSIGNING ACTION GENRE MOVIES(2021) TO DOM
    for (i = 0; i < res14.data.results.length; i++) {
        if (list_title === res14.data.results[i].title) {
            tempimage = IMAGE_PATH + res14.data.results[i].backdrop_path
            mainImage.attributes[1].value = `background-image:url(${tempimage});margin-right:2rem;`
            temp = IMAGE_PATH_MOBILE_POSTER + res14.data.results[i].poster_path;
            mob_res.children[0].src = temp;
            overview.textContent = res14.data.results[i].overview;
            overview_mob.textContent = res14.data.results[i].overview;
            rating.textContent = res14.data.results[i].vote_average;
            rating_mob.textContent = res14.data.results[i].vote_average;
            console.log(list_title);
            assign();
            movie_genre_axios(res14.data.results[i].genre_ids)
            const MOVIE_VIDEO_API_URL = `https://api.themoviedb.org/3/movie/${res14.data.results[i].id}/videos?api_key=1fb03ee047ea180033951faef79393f2&language=en-US`
            movievideo(MOVIE_VIDEO_API_URL);
            castAssign(res14.data.results[i].id);
            movieDownload(res14.data.results[i].id);

        }
    }
}
check();
const assign = () => {
    h1.textContent = list_title;
    h2.textContent = list_title
}
// assign movie genre to DOM
const m_genre_assign = () => {

    if (genre_movie_array[0] === undefined) {
        list_movie_genre.textContent = "";
    }
    else {

        list_movie_genre.textContent = genre_movie_array[0] + " | " + genre_movie_array[1];
    }

}
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
    trailer_vid.src = VIDEO_PATH + t.key;
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
    trailer_vid.src = VIDEO_PATH + t.key;
}
const castAssign = (movie_id) => {
    const MOVIE_CAST_API = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=1fb03ee047ea180033951faef79393f2&language=en-US`
    const m_id = movie_id;
    castAssignFunc(MOVIE_CAST_API);
    watchOnlinebtn(m_id);
}

const watchOnlinebtn = (m_id) => {
    const online_player = document.querySelector(".online-player");
    online_player.src = ` https://www.2embed.to/embed/tmdb/movie?id=${m_id}`;
}
const castAssignFunc = async (MOVIE_CAST_API) => {
    const resA = await axios.get(MOVIE_CAST_API);
    for (i = 0; i < cast.length; i++) {
        const castimage = IMAGE_PATH + resA.data.cast[i].profile_path;
        cast[i].style.cssText = `background-image: url("${castimage}");`
        castName[i].children[1].textContent = resA.data.cast[i].name;
        castName[i].children[3].textContent = resA.data.cast[i].character;
    }

}

const castAssignTV = (tv_id) => {
    const TV_CAST_API = `https://api.themoviedb.org/3/tv/${tv_id}/credits?api_key=1fb03ee047ea180033951faef79393f2&language=en-US`
    castAssignFuncTV(TV_CAST_API);
    watchTvOnlinebtn(tv_id);
}
const watchTvOnlinebtn = (tv_id) => {
    const online_player = document.querySelector(".online-player");
    online_player.src = `https://www.2embed.to/embed/tmdb/tv?id=${tv_id}&s=1&e=1`;
}
const castAssignFuncTV = async (TV_CAST_API) => {
    const resA = await axios.get(TV_CAST_API);
    console.log(resA.data.cast);
    for (i = 0; i < cast.length; i++) {
        const castimage = IMAGE_PATH + resA.data.cast[i].profile_path;
        cast[i].style.cssText = `background-image: url("${castimage}");`
        castName[i].children[1].textContent = resA.data.cast[i].name;
        castName[i].children[3].textContent = resA.data.cast[i].character;
    }

}
const movieDownload = async (download_id) => {
    const DOWNLOAD_MOVIE = ` https://api.themoviedb.org/3/movie/${download_id}/external_ids?api_key=1fb03ee047ea180033951faef79393f2`
    const downloadRes = await axios.get(DOWNLOAD_MOVIE);
    movieDownloadTorrent(downloadRes.data.imdb_id);

}
const movieDownloadTorrent = async (external_id) => {
    const DOWNLOAD_MOVIE_TORRENT = `https://yts.mx/api/v2/list_movies.json?query_term=${external_id}`;
    const torrentRes = await axios.get(DOWNLOAD_MOVIE_TORRENT);
    console.log(torrentRes);
    if (torrentRes.data.data.movie_count === 0) {
        const mainDownloadDiv = document.querySelector(".download-div");
        mainDownloadDiv.innerHTML = "";
        const uploadingDiv = document.createElement('div');
        uploadingDiv.classList.add('uploading-div');
        uploadingDiv.innerHTML = `<h1>Uploading.....</h1>`
        mainDownloadDiv.appendChild(uploadingDiv);
    }
    else {
        for (i = 0; i < downloadDiv.length; i++) {
            if (i < torrentRes.data.data.movies[0].torrents.length) {
                downloadDiv[i].classList.add('download-active');
                downloadDiv[i].children[0].innerHTML = `Size :  ${torrentRes.data.data.movies[0].torrents[i].size}`;
                downloadDiv[i].children[1].innerHTML = `Quality :  ${torrentRes.data.data.movies[0].torrents[i].quality}-${torrentRes.data.data.movies[0].torrents[i].type}`;
                downloadDiv[i].children[0].innerHTML = `Size :  ${torrentRes.data.data.movies[0].torrents[i].size}`;
                downloadDiv[i].children[2].children[0].href = torrentRes.data.data.movies[0].torrents[i].url;
            }
            else {
                downloadDiv[i].classList.add('inactive');
            }
        }
    }
}
const castMovieData = (castData) => {

    // castcarousel.textContent = "";
    // castData.forEach((data) => {
    //     const { name, profile_path, character } = data;
    //     if (profile_path != null) {
    //         const castimage = IMAGE_PATH + profile_path;
    //         const cdiv = document.createElement('div');
    //         cdiv.classList.add('carousel-cell');
    //         cdiv.innerHTML = `
    //     <div class="cast" style="
    //     background-image: url(${castimage});
    // ">
    //     </div>
    //     <h4>${name}</h4>
    //     <h6>As ${character}</h6>`
    //         castcarousel.appendChild(cdiv);
    //     }
    // });

}