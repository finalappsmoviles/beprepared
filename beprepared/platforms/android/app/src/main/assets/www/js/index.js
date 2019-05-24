var porcentajePrueba, volverPruebas, volverPruebasPuntos;
var checkList = document.getElementsByClassName("pruebasItem");
var i;
var arrayBorrados = ["0"], borradosDesafios, borradosEspecialidades;

var checkdesSalirLocal = ["0"];
var checkdesVivirLocal = ["0"];
var checkdesDarLocal = ["0"];
var checkdesCrearLocal = ["0"];
var checkdesBuscarLocal = ["0"];
var Scout;
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        iniciarPrograma();
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
        // AndroidFullScreen.immersiveMode() 
        
        	
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
    
};

function iniciarPrograma() {
    if (localStorage.getItem("user") !== null) {
        Scout = JSON.parse(localStorage.getItem("user"));
        localStorage.setItem('nombreUsuario', JSON.stringify(Scout.Nombre));
        document.getElementById("nombreUsuario").value = Scout.Nombre;
    }
    else{
        localStorage.setItem('nombreUsuario', null);
    }
    if (localStorage.getItem("user") !== null) {

        var Scout = JSON.parse(localStorage.getItem("user"));
    }

    setTimeout(function () {
        if (localStorage.getItem("nombreUsuario") !== "null")
        {
            document.getElementById("Seccarga").className = "Seccarga ocultar";
            document.getElementById("Secbienvenidos").className = "Secbienvenidos animated fadeInUpBig";
        }
        else{
            document.getElementById("Seccarga").className = "Seccarga ocultar";
            document.getElementById("SecInstrucciones").className = "SecInstrucciones animated fadeIn";
        }
        
    }, 2000);
    document.getElementById("barraSaludPruebas").src = "img/Todas/porcentaje4.png";
    document.getElementById("barraSaludUni").src = "img/Todas/porcentaje4.png";
    document.getElementById("barraSaludEnf").src = "img/Todas/porcentaje4.png";
    if (localStorage.getItem('porcentajePrueba') === null) {
        porcentajePrueba = 0;
        localStorage.setItem('porcentajePrueba', porcentajePrueba);
        document.getElementById("avancePrueba").innerHTML = (porcentajePrueba * 100).toFixed() + "%";
    }
    else {
        porcentajePrueba = parseFloat(localStorage.getItem('porcentajePrueba'), 10);
        document.getElementById("avancePrueba").innerHTML = (porcentajePrueba * 100).toFixed() + "%";
    }
    //checkList desafio salir
    if (localStorage.getItem('porcentajedesSalir') === null) {
        porcentajedesSalir = 0;
        localStorage.setItem('porcentajedesSalir', porcentajedesSalir);
        document.getElementById("avancedesSalir").innerHTML = (porcentajedesSalir * 100).toFixed() + "%";
    }
    else {
        porcentajedesSalir = parseFloat(localStorage.getItem('porcentajedesSalir'), 10);
        document.getElementById("avancedesSalir").innerHTML = (porcentajedesSalir * 100).toFixed() + "%";
    }
    
    // //CheckList Desafio Vvir
    if (localStorage.getItem('porcentajedesVivir') === null) {
        porcentajedesVivir = 0;
        localStorage.setItem('porcentajedesVivir', porcentajedesVivir);
        document.getElementById("avancedesVivir").innerHTML = (porcentajedesVivir * 100).toFixed() + "%";
    }
    else {
        porcentajedesVivir = parseFloat(localStorage.getItem('porcentajedesVivir'), 10);
        document.getElementById("avancedesVivir").innerHTML = (porcentajedesVivir * 100).toFixed() + "%";
    }
    

    // //CheckList Desafio Dar
    if (localStorage.getItem('porcentajedesDar') === null) {
        porcentajedesDar = 0;
        localStorage.setItem('porcentajedesDar', porcentajedesDar);
        document.getElementById("avancedesDar").innerHTML = (porcentajedesDar * 100).toFixed() + "%";
    }
    else {
        porcentajedesDar = parseFloat(localStorage.getItem('porcentajedesDar'), 10);
        document.getElementById("avancedesDar").innerHTML = (porcentajedesDar * 100).toFixed() + "%";
    }
    

    // //CheckList Desafio Crear
    if (localStorage.getItem('porcentajedesCrear') === null) {
        porcentajedesCrear = 0;
        localStorage.setItem('porcentajedesCrear', porcentajedesCrear);
        document.getElementById("avancedesCrear").innerHTML = (porcentajedesCrear * 100).toFixed() + "%";
    }
    else {
        porcentajedesCrear = parseFloat(localStorage.getItem('porcentajedesCrear'), 10);
        document.getElementById("avancedesCrear").innerHTML = (porcentajedesCrear * 100).toFixed() + "%";
    }
    

    // //CheckList Desafio Buscar
    if (localStorage.getItem('porcentajedesBuscar') === null) {
        porcentajedesBuscar = 0;
        localStorage.setItem('porcentajedesBuscar', porcentajedesBuscar);
        document.getElementById("avancedesBuscar").innerHTML = ((porcentajedesBuscar * 100).toFixed()) + "%"
    }
    else {
        porcentajedesBuscar = parseFloat(localStorage.getItem('porcentajedesBuscar'), 10);
        document.getElementById("avancedesBuscar").innerHTML = (porcentajedesBuscar * 100).toFixed() + "%"

    }
    
    var PondPorc = ((porcentajedesBuscar + porcentajedesCrear + porcentajedesDar + porcentajedesVivir + porcentajedesSalir + porcentajePrueba) * 100) / 6;
    ImgPorcentaje(PondPorc);

}
function ImgPorcentaje(porcentaje) {
    if (porcentaje == 0) {
        document.getElementById("barraExpPruebas").src = "img/Todas/barra.png";
        document.getElementById("barraExpUni").src = "img/Todas/barra.png";
        document.getElementById("barraExpEnf").src = "img/Todas/barra.png";


        document.getElementById("procExpPruebas").innerHTML = (porcentaje).toFixed() + "%";
        document.getElementById("procExpUni").innerHTML = (porcentaje).toFixed() + "%";
        document.getElementById("procExpEnf").innerHTML = (porcentaje).toFixed() + "%";
        document.getElementById("porcenUniforme").innerHTML = (porcentaje).toFixed() + "%";

    }


    else if (porcentaje <= 25 && porcentaje > 0) {
        document.getElementById("barraExpPruebas").src = "img/Todas/porcentaje1A.png";
        document.getElementById("barraExpUni").src = "img/Todas/porcentaje1A.png";
        document.getElementById("barraExpEnf").src = "img/Todas/porcentaje1A.png";


        document.getElementById("procExpPruebas").innerHTML = (porcentaje).toFixed() + "%";
        document.getElementById("procExpUni").innerHTML = (porcentaje).toFixed() + "%";
        document.getElementById("procExpEnf").innerHTML = (porcentaje).toFixed() + "%";
        document.getElementById("porcenUniforme").innerHTML = (porcentaje).toFixed() + "%";


    }
    else if (porcentaje <= 50) {

        document.getElementById("barraExpPruebas").src = "img/Todas/porcentaje2A.png";
        document.getElementById("barraExpUni").src = "img/Todas/porcentaje2A.png";
        document.getElementById("barraExpEnf").src = "img/Todas/porcentaje2A.png";


        document.getElementById("procExpPruebas").innerHTML = (porcentaje).toFixed() + "%";
        document.getElementById("procExpUni").innerHTML = (porcentaje).toFixed() + "%";
        document.getElementById("procExpEnf").innerHTML = (porcentaje).toFixed() + "%";
        document.getElementById("porcenUniforme").innerHTML = (porcentaje).toFixed() + "%";
    }
    else if (porcentaje > 50 && porcentaje < 100) {

        document.getElementById("barraExpPruebas").src = "img/Todas/porcentaje3A.png";
        document.getElementById("barraExpUni").src = "img/Todas/porcentaje3A.png";
        document.getElementById("barraExpEnf").src = "img/Todas/porcentaje3A.png";

        document.getElementById("procExpPruebas").innerHTML = (porcentaje).toFixed() + "%";
        document.getElementById("procExpUni").innerHTML = (porcentaje).toFixed() + "%";
        document.getElementById("procExpEnf").innerHTML = (porcentaje).toFixed() + "%";
        document.getElementById("porcenUniforme").innerHTML = (porcentaje).toFixed() + "%";


    }
    else if (porcentaje == 100) {

        document.getElementById("barraExpPruebas").src = "img/Todas/porcentaje4A.png";
        document.getElementById("barraExpUni").src = "img/Todas/porcentaje4A.png";
        document.getElementById("barraExpEnf").src = "img/Todas/porcentaje4A.png";


        document.getElementById("procExpPruebas").innerHTML = (porcentaje).toFixed() + "%";
        document.getElementById("procExpUni").innerHTML = (porcentaje).toFixed() + "%";
        document.getElementById("procExpEnf").innerHTML = (porcentaje).toFixed() + "%";
        document.getElementById("porcenUniforme").innerHTML = (porcentaje).toFixed() + "%";


    }

}
function clicksgteBienvenidos()
{
    document.getElementById("SecInstrucciones").className = "SecInstrucciones ocultar";
    document.getElementById("Secbienvenidos").className = "Secbienvenidos animated fadeInUpBig";
}
app.initialize();