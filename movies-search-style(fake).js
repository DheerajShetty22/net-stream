/* //Removing default styles */
* {
    margin: 0px;
    padding: 0px;
    box- sizing: border - box;
}
html{
    scroll - behavior: smooth;
}
body{
    background - color: black;
}
.nav - links{
    display: flex;
    justify - content: space - around;
    width: 30 %;
}
.nav - links li{
    list - style: none;
}
.flickity - page - dots{
    display: none;
}
.nav - links a{
    text - decoration: none;
    color: rgb(248, 248, 248);
    letter - spacing: 2px;
    font - weight: bold;
}
.logo{
    display: grid;
    place - items: center;
    height: 40px;
    width: 20px;
    margin - right: 50 %;
    background - size: contain;
    background - repeat: no - repeat;
    background - image: url("Netflix-1.png");
}
nav{
    display: flex;
    justify - content: space - around;
    align - items: center;
    margin - top: 2px;
    min - height: 6vh;
    font - family: 'Poppins', sans - serif;
    font - weight: bold;
    background - color: black;
    /* // border-bottom:5px solid rgba(255, 0, 0, 0.644); */
}
.search_btn{
    display: flex;
    flex - direction: row;
    padding - bottom: 2px;
}
.search_btn i{
    color: black;
    font - size: 20px;
}

input{
    font - family: 'Poppins', sans - serif;
    font - size: 20px;
    padding: 1em;
    height: 40px;
    border: none;

}
input: focus{
    outline: none;
}
.search_btn button{
    height: 40px;
    width: 40px;
    font - size: 20px;
    border: none;
    background - color:#f5eded;
    cursor: pointer;
}
.search_btn button: hover{
    background - color: red;
    transition: 1s ease;
    color: white;
}
.m2.main - carousel{
    background - size: cover;
    background - color: black;
    height: 92vh;
    box - sizing: border - box;
    position: relative;
}
 .m2.main - carousel.carousel - cell{
    display: flex;
    height: 88vh;
    background - color: white;
    width: 96 %;
    background - size: cover;
}
.main - infodiv{
    display: flex;
    flex - direction: column;
    justify - content: center;
    height: 88vh;
    width: 50 %;
    /* background-color:rgba(0, 0, 0, 0.664); */
    background - image: linear - gradient(to right, black 30 %, rgba(20, 20, 20, 0));
}
.m2.main - carousel.carousel - cell.main - infodiv  img{
    width: inherit;
}
.main - infodiv h1{
    font - family: 'Poppins', sans - serif;
    font - weight: bolder;
    color: white;
    font - size: 2.125rem;
    z - index: 1;
}
.main - infodiv h3{
    font - family: 'Poppins', sans - serif;
    font - weight: bolder;
    position: absolute;
    margin - left: 0rem;
    margin - top: -11rem;
    color: white;
    font - size: 1.625rem;
    z - index: 1;
}
.main - infodiv h5{
    font - family: 'Poppins', sans - serif;
    font - weight: bolder;
    color: white;
    font - size: 20px;
    font - weight: 500;
}
.m2.main - carousel.flickity - button {
    display: none;
}
.flickity - button{
    background: transparent;
    color: red;
    right: 20px;
    font - weight: bolder;
}
.c - cell img{
    position: absolute;
    border - radius: 5px;
    box - shadow: 2px 2px 2px rgba(0, 0, 0, 0.582);
    border: 1px solid black;
    margin - right: 25px;
    margin - top: 35px;
    width: 200px;
    height: 298px;
}
.c - cell.item - overlay{
    position: relative;
    left: 0;
    bottom: 0;
    right: 0;
    width: 200px;
    margin - top: 35px;
    background - image: linear - gradient(to bottom, black, rgba(20, 20, 20, 0.137));
    border - radius: 5px;
    height: 302px;
    opacity: 0;
}
 .c - cell.item - overlay: hover{
    opacity: 1;
    transition: all 0.5s;
    cursor: pointer;
}
h4{
    font - family: 'Poppins', sans - serif;
    font - size: 26px;
}
 .carousel - cell h4{
    font - family: 'Poppins', sans - serif;
    font - weight: bolder;
    color: white;
    font - size: 20px;
    font - weight: 500;
}
.c - cell i{
    color: gold;
    font - size: 20px;
}
/* .main{
     display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content:space-evenly; 
}  */
.main - carousel{
    background - color: black;

}
.movies - Div.main - carousel img{
    border - radius: 5px;
    box - shadow: 2px 2px 2px rgba(0, 0, 0, 0.582);
    border: 1px solid black;
    margin - right: 25px;
    margin - top: 35px;
    width: 200px;
    height: 298px;

}
.Tv - Div.main - carousel img{
    border - radius: 5px;
    box - shadow: 2px 2px 2px rgba(0, 0, 0, 0.582);
    border: 1px solid black;
    margin - right: 25px;
    margin - top: 35px;
    width: 200px;
    height: 298px;

}
.Drama - Div.main - carousel img{
    border - radius: 5px;
    box - shadow: 2px 2px 2px rgba(0, 0, 0, 0.582);
    border: 1px solid black;
    margin - right: 25px;
    margin - top: 35px;
    width: 200px;
    height: 298px;

}
.Action - Div.main - carousel img{
    border - radius: 5px;
    box - shadow: 2px 2px 2px rgba(0, 0, 0, 0.582);
    border: 1px solid black;
    margin - right: 25px;
    margin - top: 35px;
    width: 200px;
    height: 298px;

}
.Fiction - Div.main - carousel img{
    border - radius: 5px;
    box - shadow: 2px 2px 2px rgba(0, 0, 0, 0.582);
    border: 1px solid black;
    margin - right: 25px;
    margin - top: 35px;
    width: 200px;
    height: 298px;

}
.movies - Div h4{
    font - size: 26px;
}
.Tv - Div h4{
    font - size: 26px;
}
.Drama - Div h4{
    font - size: 26px;
}
.Action - Div h4{
    font - size: 26px;
}
.Fiction - Div h4{
    font - size: 26px;
}
.item - overlay{
    position: inherit;
    left: 0;
    bottom: 0;
    right: 0;
    width: 200px;
    margin - top: 35px;
    /* background-color: rgba(20, 20, 20, 0.644); */
    background - image: linear - gradient(to bottom, black, rgba(20, 20, 20, 0.137));
    border - radius: 5px;
    height: 302px;
    opacity: 0;
}
.main - carousel.item - overlay: hover{
    opacity: 1;
    transition: all 0.5s;
    cursor: pointer;
}
.pop - title{
    color: red;
    font - weight: bolder;
}
.pop - rating{
    display: inline - block;
    /* color:#226089; */
    color: blue;
    font - weight: bolder;
}
h1{
    font - family: 'Poppins', sans - serif;
    font - weight: bolder;
    position: absolute;
    margin - left: 2rem;
    margin - top: -19rem;
    color: white;
    font - size: 32px;
    z - index: 1;
}
h3{
    font - family: 'Poppins', sans - serif;
    font - weight: bolder;
    position: absolute;
    margin - left: 0rem;
    margin - top: -11rem;
    color: white;
    font - size: 20px;
    z - index: 1;
}
h4{
    font - family: 'Poppins', sans - serif;
    font - weight: bolder;
    color: white;
    font - size: 20px;
    font - weight: 500;
}
i{
    color: gold;
    font - weight: revert;
    font - size: 20px;
}
