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
const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1fb03ee047ea180033951faef79393f2"
const IMAGE_PATH = "https://image.tmdb.org/t/p/w200"
const TV_API_URL = "https://api.themoviedb.org/3/tv/popular?api_key=1fb03ee047ea180033951faef79393f2&language=en-US&page=1"
const DRAMA_MOVIE_API = "https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2022&api_key=1fb03ee047ea180033951faef79393f2"
const ACTION_MOVIE_API = "https://api.themoviedb.org/3/discover/movie?with_genres=28&primary_release_year=2019&api_key=1fb03ee047ea180033951faef79393f2&language=en-US&page=1"
const FICTION_MOVIE_API = "https://api.themoviedb.org/3/discover/movie?with_genres=878&primary_release_year=2020&api_key=1fb03ee047ea180033951faef79393f2"
var signupname = localStorage.getItem("signupname");
usernamealpha.textContent = signupname[0];
ioverlay.forEach((elements) => {
    elements.addEventListener("click", () => {
        localStorage.setItem("popular_title", elements.childNodes[1].textContent);
        window.location.href = "list.html"
    });
});
const popularMovies = async () => {
    const res1 = await axios.get(API_URL);
    console.log(res1.data);
    for (i = 0; i < popdiv.length; i++) {
        const poster = IMAGE_PATH + res1.data.results[i].poster_path;
        popdiv[i].firstElementChild.src = poster;
        poptitle[i].innerText = res1.data.results[i].title;
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
    const res1 = await axios.get(DRAMA_MOVIE_API);
    console.log(res1.data);
    for (i = 0; i < dramapopdiv.length; i++) {
        const poster = IMAGE_PATH + res1.data.results[i].poster_path;
        dramapopdiv[i].firstElementChild.src = poster;
        Dramapoptitle[i].innerText = res1.data.results[i].title;
        if (res1.data.results[i].vote_average === 0) {
            Dramapoprating[i].innerText = "IMDB: N/A";
        }
        else {
            Dramapoprating[i].innerText = res1.data.results[i].vote_average;
        }

    }
}
dramaMovies();
const actionMovies = async () => {
    const res1 = await axios.get(ACTION_MOVIE_API);
    console.log(res1.data);
    for (i = 0; i < actionpopdiv.length; i++) {
        const poster = IMAGE_PATH + res1.data.results[i].poster_path;
        actionpopdiv[i].firstElementChild.src = poster;
        Actionpoptitle[i].innerText = res1.data.results[i].title;
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
    const res1 = await axios.get(FICTION_MOVIE_API);
    console.log(res1.data);
    for (i = 0; i < fictionpopdiv.length; i++) {
        const poster = IMAGE_PATH + res1.data.results[i].poster_path;
        fictionpopdiv[i].firstElementChild.src = poster;
        Fictionpoptitle[i].innerText = res1.data.results[i].title;
        if (res1.data.results[i].vote_average === 0) {
            Fictionpoprating[i].innerText = "IMDB: N/A";
        }
        else {
            Fictionpoprating[i].innerText = res1.data.results[i].vote_average;
        }

    }
}
fictionMovies();
const noneDisplay = () => {
    console.log("hi");
    const maindiv = document.querySelector(".tv-Div");
    for (i = 0; i < maindiv.children.length; i++) {
        console.log("hooo");
        if (maindiv.children[i].children[0].naturalWidth === 0) {
            console.log("hoookkkk");
            maindiv.children[i].classList.add("hide-div");
        }
    }

}

