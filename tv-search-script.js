const main = document.querySelector(".main");
const head = document.querySelector(".main-c-cell")
const tvSearch = document.querySelector('#searchInput');
const allDiv = document.querySelector('.td');
const tvName = document.querySelector(".tvName");
const divv = document.querySelector("img");
const tvRate = document.querySelector('.ratingText');
const maindiv = document.querySelector(".tv-Div");
const popdiv = document.querySelectorAll(" .movies-Div .carousel-cell");
const tvpopdiv = document.querySelectorAll(".Tv-Div .carousel-cell");
const poptitle = document.querySelectorAll(" .movies-Div .pop-title");
const poprating = document.querySelectorAll(".movies-Div .pop-rating");
const Tvpoptitle = document.querySelectorAll(" .Tv-Div .pop-title");
const Tvpoprating = document.querySelectorAll(".Tv-Div .pop-rating");
const dramapopdiv = document.querySelectorAll(".Drama-Div .carousel-cell");
const Dramapoptitle = document.querySelectorAll(" .Drama-Div .pop-title");
const Dramapoprating = document.querySelectorAll(".Drama-Div .pop-rating");
const actionpopdiv = document.querySelectorAll(".Action-Div .carousel-cell");
const Actionpoptitle = document.querySelectorAll(" .Action-Div .pop-title");
const Actionpoprating = document.querySelectorAll(".Action-Div .pop-rating");
const fictionpopdiv = document.querySelectorAll(".Fiction-Div .carousel-cell");
const Fictionpoptitle = document.querySelectorAll(" .Fiction-Div .pop-title");
const Fictionpoprating = document.querySelectorAll(".Fiction-Div .pop-rating");
const usernamealpha = document.querySelector(".name-div");
const ioverlay = document.querySelectorAll("#ioverlay");
const movieEl = document.querySelector(".movies-Div .main-carousel");
const pstyle = document.querySelector(".movies-Div .main-carousel img");
const button = document.querySelector(".search_btn button");
//CALL THE TV GENRE API
const API_URL = "https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=1fb03ee047ea180033951faef79393f2"
const IMAGE_PATH = "https://image.tmdb.org/t/p/w200"
const TV_API_URL = "https://api.themoviedb.org/3/discover/tv?with_genres=9648&primary_release_year=2021&api_key=1fb03ee047ea180033951faef79393f2"
const ADVENTURE_TV_API = "https://api.themoviedb.org/3/discover/tv?with_genres=10768&primary_release_year=2021&api_key=1fb03ee047ea180033951faef79393f2"
const ACTION_TV_API = "https://api.themoviedb.org/3/discover/tv?with_genres=10759&primary_release_year=2021&api_key=1fb03ee047ea180033951faef79393f2&language=en-US&page=1"
const COMEDY_TV_API = "https://api.themoviedb.org/3/discover/tv?with_genres=35&primary_release_year=2020&api_key=1fb03ee047ea180033951faef79393f2"
ioverlay.forEach((elements) => {
    elements.addEventListener("click", () => {
        localStorage.setItem("popular_title", elements.childNodes[1].textContent);
        window.location.href = "list.html"
    });
});
button.addEventListener("click", () => {
    const searchInput = document.querySelector("input").value
    const TV_SEARCH_API_URL = `https://api.themoviedb.org/3/search/tv?api_key=1fb03ee047ea180033951faef79393f2&language=en-US&page=1&include_adult=true&query=${searchInput}`;
    movieSearch(TV_SEARCH_API_URL);

})
function getClassName(clicked_id) {
    const id = `#${clicked_id}`
    const element = document.querySelector(id);
    localStorage.setItem("popular_title", element.childNodes[1].textContent);
    const words = clicked_id.split("ioverlay");
    localStorage.setItem("search_id", words[1]);
    window.location.href = "list.html"
}

const movieSearch = async (TV_SEARCH_API_URL) => {
    const res1 = await axios.get(TV_SEARCH_API_URL);
    console.log(res1.data.results);
    movies(res1.data.results)
}
const movies = (moviedata) => {
    main.innerHTML = "";

    moviedata.forEach((data) => {
        const { name, poster_path, vote_average, backdrop_path, id } = data;
        if (poster_path != null && backdrop_path != null) {
            const poster = IMAGE_PATH + poster_path;
            main.classList.add('head_style');
            const moviesDiv = document.createElement('div');
            moviesDiv.classList.add('c-cell')
            moviesDiv.innerHTML = `
        <img src="${poster}">
        <div class="item-overlay" id="ioverlay${id}" onclick="getClassName(this.id)">
            <h4 class="pop-title"><span id="ispan">${name}</span></h4>
            <i class="fas fa-star">
                <h4 class="pop-rating">${vote_average}</h4>
            </i>
        </div>`
            main.appendChild(moviesDiv);
        }
    })
}
const popularMovies = async () => {
    const res1 = await axios.get(API_URL);
    console.log(res1.data);
    for (i = 0; i < popdiv.length; i++) {
        const poster = IMAGE_PATH + res1.data.results[i].poster_path;
        popdiv[i].firstElementChild.src = poster;
        poptitle[i].innerText = res1.data.results[i].name;
        if (res1.data.results[i].vote_average === 0) {
            poprating[i].innerText = "N/A";
        }
        else {
            poprating[i].innerText = res1.data.results[i].vote_average;
        }

    }
    popularMoviesShow(res1.data.results);
}
popularMovies();
const popularTvshows = async () => {
    const res1 = await axios.get(TV_API_URL);
    console.log(res1.data);
    for (i = 0; i < tvpopdiv.length; i++) {
        if (res1.data.results[i].poster_path == null) {
            tvpopdiv[i].firstElementChild.src = "D:\Projects/Netflix-1.png";
            Tvpoptitle[i].innerText = res1.data.results[i].name;
            if (res1.data.results[i].vote_average === 0) {
                Tvpoprating[i].innerText = "N/A";
            }
            else {
                Tvpoprating[i].innerText = res1.data.results[i].vote_average;
            }
        }
        else {
            const poster = IMAGE_PATH + res1.data.results[i].poster_path;
            tvpopdiv[i].firstElementChild.src = poster;
            Tvpoptitle[i].innerText = res1.data.results[i].name;
            if (res1.data.results[i].vote_average === 0) {
                Tvpoprating[i].innerText = "N/A";
            }
            else {
                Tvpoprating[i].innerText = res1.data.results[i].vote_average;
            }
        }
    }
}
popularTvshows();
const dramaMovies = async () => {
    const res1 = await axios.get(ADVENTURE_TV_API);
    console.log(res1.data);
    for (i = 0; i < dramapopdiv.length; i++) {
        const poster = IMAGE_PATH + res1.data.results[i].poster_path;
        dramapopdiv[i].firstElementChild.src = poster;
        Dramapoptitle[i].innerText = res1.data.results[i].name;
        if (res1.data.results[i].vote_average === 0) {
            Dramapoprating[i].innerText = "N/A";
        }
        else {
            Dramapoprating[i].innerText = res1.data.results[i].vote_average;
        }

    }
}
dramaMovies();
const actionMovies = async () => {
    const res1 = await axios.get(ACTION_TV_API);
    console.log(res1.data);
    for (i = 0; i < actionpopdiv.length; i++) {
        const poster = IMAGE_PATH + res1.data.results[i].poster_path;
        actionpopdiv[i].firstElementChild.src = poster;
        Actionpoptitle[i].innerText = res1.data.results[i].name;
        if (res1.data.results[i].vote_average === 0) {
            Actionpoprating[i].innerText = "IMDB: N/A";
        }
        else {
            Actionpoprating[i].innerText = res1.data.results[i].vote_average;
        }

    }
}
actionMovies();
const fictionMovies = async () => {
    const res1 = await axios.get(COMEDY_TV_API);
    console.log(res1.data);
    for (i = 0; i < fictionpopdiv.length; i++) {
        const poster = IMAGE_PATH + res1.data.results[i].poster_path;
        fictionpopdiv[i].firstElementChild.src = poster;
        Fictionpoptitle[i].innerText = res1.data.results[i].name;
        if (res1.data.results[i].vote_average === 0) {
            Fictionpoprating[i].innerText = "IMDB: N/A";
        }
        else {
            Fictionpoprating[i].innerText = res1.data.results[i].vote_average;
        }

    }
}
fictionMovies();
// const noneDisplay = () => {
//     console.log("hi");
//     const maindiv = document.querySelector(".tv-Div");
//     for (i = 0; i < maindiv.children.length; i++) {
//         console.log("hooo");
//         if (maindiv.children[i].children[0].naturalWidth === 0) {
//             console.log("hoookkkk");
//             maindiv.children[i].classList.add("hide-div");
//         }
//     }

// }

