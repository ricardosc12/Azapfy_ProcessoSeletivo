
// Definição de obtenção do país selecionado Memória/API

var pre_load = true;

function set_preload(){
    if(pre_load){
        pre_load=false
        document.getElementsByClassName("pre_load")[0].innerHTML = "False"
    }else{
        pre_load=true
        document.getElementsByClassName("pre_load")[0].innerHTML = "True"
    }
}