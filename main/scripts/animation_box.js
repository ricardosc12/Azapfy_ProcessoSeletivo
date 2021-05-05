

var element_anime = document.getElementById('selected')
var elementC = document.getElementsByClassName("content")[0] 

function add_animationBox() {

    element_anime.classList.add("anime")
    elementC.classList.add("animeC")
}

function remove_animationBox(){

    element_anime.classList.remove("anime")
    elementC.classList.remove("animeC")
}