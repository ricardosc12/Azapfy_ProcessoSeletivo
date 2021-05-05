
// Animação para espera da API list all countries

var timeout_error;

function add_error(){
    $(".timeout_error").append("<h1>Está demorando mais do que o previsto...</h1><p onclick=\"document.location.reload(true)\">Recarregar</p>")
}

function add_animationTimeout(){
    timeout_error = setTimeout(add_error,3000)
    $(".list_countries").append("<div class='timeout_error'><div class=\"loader\">Loading...</div></div>")
    
}

function remove_animationTimeout(){
    clearTimeout(timeout_error)
    if(document.getElementsByClassName("timeout_error")[0] != null){
        document.getElementsByClassName("timeout_error")[0].remove()
    }
}