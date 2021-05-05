
// Animação para mostrar a conclusão do resultado da API "ip-api"
function add_animation_localhost(){
    $(".head").append("<div class=\"load_animation-localhost\">Getting local country</div>")
}

function remove_animation_localhost(){
    $(".load_animation-localhost").remove()
}