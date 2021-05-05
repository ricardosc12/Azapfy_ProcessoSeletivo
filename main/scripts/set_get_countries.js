
// Funções responsáveis pelo fornecimento do país selecionado, sendo apartir da memória ou API.

function filterByName(name,obj){
    if(obj.name === name){
        return obj
    }
}

function set_countrieSelect (country,get){
    try {
        var inner_html = ""
        var data;
        if(!get) data = data_countries.filter(filterByName.bind(this,country))[0]
        else data = country[0]

        selected_country = data.translations.br

        document.styleSheets[0].addRule('.countrie.left::before','background-image: url(\"'+data.flag+'\")');
        inner_html = html_Insert(data.translations.br,data.flag,data.nativeName,
                                data.languages[0].name,data.region,data.subregion,
                                data.timezones)
        document.getElementById("001").innerHTML = inner_html
    
        if(data.name == local_countrie && local_countrie!=null){
            if(document.getElementsByClassName("lottie_animation")[0] != undefined) return
            $(".box").append("<div class=\"lottie_animation\"><lottie-player class='luffy_animation' src=\"https://assets4.lottiefiles.com/datafiles/wgiOzY3AtuiCHHW/data.json\" background=\"transparent\" speed=\"0.5\" loop autoplay></lottie-player></div>")
        }
        else {
            $(".lottie_animation").remove()
        }
    }
    catch (TypeError){
        document.getElementById("001").innerHTML = "<p class='not_found'>not found</p> <div class=\"img_not_countrie\"></div>"
        console.log('Erro ao obter o país selecionado')
        $(".lottie_animation").remove()
    }
}


function get_countrieSelect (country) {
    
    if(country == "Lao Peoples Democratic Republic") country = "laos"

    timeout_animation = setTimeout(add_loadAnimation,200);
    fetch("https://restcountries.eu/rest/v2/name/"+country)
    .then(resp => resp.json())
    .then(function(data){

        remove_loadAnimation()

        set_countrieSelect(data,true)
    }) 
}