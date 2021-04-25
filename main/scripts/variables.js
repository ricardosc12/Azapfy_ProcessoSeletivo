
function html_Insert(name,flag,nativeName,lingua,region,subregion,timezones){
    var inner_html = 
        "<div class=\"countrie left\">"+
            "<div class=\"info_selected\">"+
            "</div>"+
        "</div>"+
        "<div class=\"countrie\">"+
            "<div class=\"details_image top\">"+name+""+
            "</div>"+
            "<img id=\"image\" src=\""+flag+"\" alt=\"image_clicked\">"+
            "<div class=\"details_image\">"+nativeName+""+
            "</div>"+
        "</div>"+
        "<div class=\"countrie right\">"+
            "<div class=\"info_countrie\">Linguage:  "+lingua+""+
                "<div class=\"pointer\">"+
                "</div>"+
            "</div>"+
            "<div class=\"info_countrie\">Region: "+region+""+
                "<div class=\"pointer\">"+
                "</div>"+
            "</div>"+
                "<div class=\"info_countrie\">Subregion:  "+subregion+""+
                    "<div class=\"pointer\">"+
                    "</div>"+
                "</div>"+
            "<div class=\"info_countrie\">Zone:  \""+timezones[0]+"\""+
                "<div class=\"pointer\">"+
                "</div>"+
            "</div>"+
        "</div>";
    return inner_html
}

function list_countries(name,flag,nameBr,capital,population) {
    var countrie = 
    "<div class='countries' onclick=\"open_Box('"+name+"')\">"+
            "<div class='info'>"+
                "<img src='"+flag+"' alt='countrie'>"+
                    "<div class='name_countrie'>"+nameBr+"</div>"+
            "</div>"+
                "<div class='most_info'>"+
                    "<div class='info1'>"+
                        "<div class='list'>"+
                        "<div class='pointer'>"+
                        "</div>"+
                        "<p>Capital: "+capital+"</p>"+
                    "</div>"+
                "</div>"+
            "<div class='info1'>"+
                "<div class='list'>"+
                    "<div class='pointer'>"+
                    "</div>"+
                    "<p>População: "+population+"</p>"+
                "</div>"+
            "</div>"+
        "</div>"+
    "</div>";
    return countrie
}
