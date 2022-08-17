const nav=document.querySelector(".nav-links");
const burger=document.querySelector(".burger");
const navLinks=document.querySelectorAll(".nav-links li");
const popdiv=document.querySelector(".popular-div");
burger.addEventListener('click',()=>{
    //nav toggle
    nav.classList.toggle('nav-hover');
    //Nav annimation
    navLinks.forEach((link,index)=>{
        if(link.style.animation)
        {
            link.style.animation="";
        }
        else{
        link.style.animation=`navLinkFade 0.5s ease forwards ${index/4 + 0.2}s`;
        }
    }
    );
    burger.classList.toggle('toggle');
}
    );

    //Accessing Tv searches
    const tvSearch = document.querySelector('#searchInput');
tvSearch.addEventListener('submit', async (e)=>{
    e.preventDefault();
    imageDelete();
    const searchInput=tvSearch.elements.query.value;
    const res= await axios.get(`http://api.tvmaze.com/search/shows?q=${searchInput}`);
    imageContent(res.data);   
    }
)
const imageContent=(shows)=>{
    for ( let result of shows)
    {   
        const img=document.createElement("img");
        img.src=result.show.image.medium;
         document.body.append(img);
         img.classList.add("design");
    }
}
const imageDelete=()=>
{
    let img=document.querySelectorAll('img');
    for(i=0;i<img.length;i++)
    {
        img[i].src='';
    }
}

    
    