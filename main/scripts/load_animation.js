
// Animação para espera de resposta da API get name apenas

var timeout_animation;

function add_loadAnimation(){
    $(".box").append('<div id="load" class="loading"><div class="dot"></div><div class="dot"></div><div class="dot"></div><div>')
}
function remove_loadAnimation(){
    clearTimeout(timeout_animation)

    if(document.getElementById('load') != null){
        document.getElementById('load').remove()
    }
}