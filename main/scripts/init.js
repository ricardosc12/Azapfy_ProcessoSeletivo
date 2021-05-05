
// Inicialização da lista de países. 

function init() {
    
    add_animation_localhost()
    add_animationTimeout()


    fetch("http://ip-api.com/json/")
    .then(resp => resp.json())
    .then(function (data){
        remove_animation_localhost()
        local_countrie = data.country
    })

    var x = document.getElementById("where").value;
    var countries = []

    fetch("https://restcountries.eu/rest/v2/all")
    .then((resp) => resp.json())
    .then(function (data){
        
        remove_animationTimeout()
        unload=false
        data_countries = data
        
        for(var i = 0;i<data.length;i++){

            data[i].name = data[i].name.replace("'","") 

            var countrie = list_countries(data[i].name,data[i].flag,data[i].translations.br,data[i].capital,data[i].population)
            countries.push(data[i].name)
            $(".list_countries").append(countrie)
            }
            
        autocomplete(document.getElementById("where"), countries);
    })
}

window.onload = init