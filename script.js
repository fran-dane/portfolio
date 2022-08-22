//funcion que aplica estilo a la opcion seleccionada en el menu y remueve la seleccionada previamente

function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
}

// hacer desaparecer el menu hamburguesa una vez seleccionado una opcion

var x = document.getElementById("nav");
x.className = ""

// funcion para mostrar menu responsive
function responsiveMenu () {
    let x = document.getElementById("nav");
    if(x.className === ""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

// detectar scroll para la barra de habilidades

window.onscroll = function() {
    efectoHabilidades()
};

// funcion para aplicar la animacion de la barra de habilidades

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bs").classList.add("barra-progreso3");
        document.getElementById("base").classList.add("barra-progreso4");
        document.getElementById("ux").classList.add("barra-progreso5");
    }
}