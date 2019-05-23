var listaTareas = document.getElementById('Prueba');
var txtLista = document.getElementsByTagName('span');
var incrementoAvance = 1 / listaTareas.childElementCount;
var porcentajePrueba, volverPruebas, volverPruebasPuntos;
var checkList = document.getElementsByClassName("pruebasItem");
var i;
var arrayBorrados = ["0"], borradosDesafios, borradosEspecialidades;

var checkPruebaLocal = ["0"];
var checkdesSalirLocal = ["0"];
var checkdesVivirLocal=["0"];
var checkdesDarLocal=["0"];
var checkdesCrearLocal=["0"];
var checkdesBuscarLocal=["0"];
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
    setTimeout(function(){
        document.getElementById("Seccarga").className= "Seccarga ocultar";
        document.getElementById("Secbienvenidos").className="Secbienvenidos animated fadeInUpBig";
    }, 2000);     
    
    if (localStorage.getItem('borradosPruebas') !== null) {
        var borrados = localStorage.getItem('borradosPruebas');
        for (var i = 1, len = borrados.length; i < len; i++) {
            if (i % 2 == 0) {
                var value = borrados[i];
                document.getElementById(value).style.display = "none";
                arrayBorrados.push(value);
                localStorage.setItem('borradosPruebas', checkPruebaLocal);
            }
        }
    }
    if (localStorage.getItem('porcentajePrueba') === null) {
        porcentajePrueba = 0;
        localStorage.setItem('porcentajePrueba', porcentajePrueba);
        document.getElementById("avancePrueba").innerHTML=(porcentajePrueba*100).toFixed()+"%";
    }
    else {
        porcentajePrueba = parseFloat(localStorage.getItem('porcentajePrueba'), 10);
        document.getElementById("avancePrueba").innerHTML=(porcentajePrueba*100).toFixed()+"%";
    }
    agregandoBtnEliminar();

    chequeados();
    for (i = 0; i < txtLista.length; i++) {
        txtLista[i].addEventListener('click', function () {
            var div = this.parentElement;
            
            clickChecklist(div,(this.parentElement).parentElement.id);
        }, false);
    }
    volverPruebas = document.getElementById("volverPruebas");
    volverPruebasPuntos = document.getElementById("volverPruebasPuntos");
    volverPruebas.addEventListener('click', function () {
        document.getElementById("SecUnidad").className = "SecUnidad animated fadeInUpBig";
        document.getElementById("SecPruebas").className = "SecPruebas ocultar";
    }, false);
    volverPruebasPuntos.addEventListener('click', function () {
        document.getElementById("SecUnidad").className = "SecUnidad animated fadeInUpBig";
        document.getElementById("SecPruebas").className = "SecPruebas ocultar";
    }, false);

    // //ChecksList Desafio Salir

    if (localStorage.getItem('porcentajedesSalir') === null) {
        porcentajedesSalir = 0;
        localStorage.setItem('porcentajedesSalir', porcentajedesSalir);
        document.getElementById("avancedesSalir").innerHTML=(porcentajedesSalir*100).toFixed()+"%";
    }
    else {
        porcentajedesSalir = parseFloat(localStorage.getItem('porcentajedesSalir'), 10);
        document.getElementById("avancedesSalir").innerHTML=(porcentajedesSalir*100).toFixed()+"%";
    }
    if (localStorage.getItem('checkdesSalir') !== null) {    
        var chequeadosDes = localStorage.getItem('checkdesSalir');
        for (var i = 1, len = chequeadosDes.length; i < len; i++) {
            if (i % 2 == 0) {
                var value = chequeadosDes[i];
                document.getElementById(value).classList.add('checked');
                
                checkdesSalirLocal.push(value);
                localStorage.setItem('checkdesSalir', checkdesSalirLocal);
            }
        }
    }
    // //CheckList Desafio Vvir
    if (localStorage.getItem('porcentajedesVivir') === null) {
        porcentajedesVivir = 0;
        localStorage.setItem('porcentajedesVivir', porcentajedesVivir);
        document.getElementById("avancedesVivir").innerHTML=(porcentajedesVivir*100).toFixed()+"%";
    }
    else {
        porcentajedesVivir = parseFloat(localStorage.getItem('porcentajedesVivir'), 10);
        document.getElementById("avancedesVivir").innerHTML=(porcentajedesVivir*100).toFixed()+"%";        
    }
    if (localStorage.getItem('checkdesVivir') !== null) {    
        var chequeadosDes = localStorage.getItem('checkdesVivir');
        for (var i = 1, len = chequeadosDes.length; i < len; i++) {
            if (i % 2 == 0) {
                var value = chequeadosDes[i];
                document.getElementById(value).classList.add('checked');
                
                checkdesVivirLocal.push(value);
                localStorage.setItem('checkdesVivir', checkdesVivirLocal);
            }
        }
    }

    // //CheckList Desafio Dar
    if (localStorage.getItem('porcentajedesDar') === null) {
        porcentajedesDar = 0;
        localStorage.setItem('porcentajedesDar', porcentajedesDar);
        document.getElementById("avancedesDar").innerHTML=(porcentajedesDar*100).toFixed()+"%";
    }
    else {
        porcentajedesDar = parseFloat(localStorage.getItem('porcentajedesDar'), 10);
        document.getElementById("avancedesDar").innerHTML=(porcentajedesDar*100).toFixed()+"%";
    }
    if (localStorage.getItem('checkdesDar') !== null) {    
        var chequeadosDes = localStorage.getItem('checkdesDar');
        for (var i = 1, len = chequeadosDes.length; i < len; i++) {
            if (i % 2 == 0) {
                var value = chequeadosDes[i];
                document.getElementById(value).classList.add('checked');
                
                checkdesDarLocal.push(value);
                localStorage.setItem('checkdesDar', checkdesDarLocal);
            }
        }
    }

     // //CheckList Desafio Crear
     if (localStorage.getItem('porcentajedesCrear') === null) {
        porcentajedesCrear = 0;
        localStorage.setItem('porcentajedesCrear', porcentajedesCrear);
        document.getElementById("avancedesCrear").innerHTML=(porcentajedesCrear*100).toFixed()+"%";
    }
    else {
        porcentajedesCrear = parseFloat(localStorage.getItem('porcentajedesCrear'), 10);
        document.getElementById("avancedesCrear").innerHTML=(porcentajedesCrear*100).toFixed()+"%";
    }
    if (localStorage.getItem('checkdesCrear') !== null) {    
        var chequeadosDes = localStorage.getItem('checkdesCrear');
        for (var i = 1, len = chequeadosDes.length; i < len; i++) {
            if (i % 2 == 0) {
                var value = chequeadosDes[i];
                document.getElementById(value).classList.add('checked');
                
                checkdesCrearLocal.push(value);
                localStorage.setItem('checkdesCrear', checkdesCrearLocal);
            }
        }
    }

    // //CheckList Desafio Buscar
    if (localStorage.getItem('porcentajedesBuscar') === null) {
        porcentajedesBuscar = 0;
        localStorage.setItem('porcentajedesBuscar', porcentajedesBuscar);
        document.getElementById("avancedesBuscar").innerHTML=((porcentajedesBuscar*100).toFixed())+"%"
    }
    else {
        porcentajedesBuscar = parseFloat(localStorage.getItem('porcentajedesBuscar'), 10);
        document.getElementById("avancedesBuscar").innerHTML=(porcentajedesBuscar*100).toFixed()+"%"
        
    }
    if (localStorage.getItem('checkdesBuscar') !== null) {    
        var chequeadosDes = localStorage.getItem('checkdesBuscar');
        for (var i = 1, len = chequeadosDes.length; i < len; i++) {
            if (i % 2 == 0) {
                var value = chequeadosDes[i];
                document.getElementById(value).classList.add('checked');
                
                checkdesBuscarLocal.push(value);
                localStorage.setItem('checkdesBuscar', checkdesBuscarLocal);
            }
        }
    }
    var PondPorc=((porcentajedesBuscar+porcentajedesCrear+porcentajedesDar+porcentajedesVivir+porcentajedesSalir+porcentajePrueba)*100)/6;
    ImgPorcentaje(PondPorc);

}
function chequeados() {
    if (localStorage.getItem('checkPrueba') !== null) {

        var chequeados = localStorage.getItem('checkPrueba');
        for (var i = 1, len = chequeados.length; i < len; i++) {
            if (i % 2 == 0) {
                var value = chequeados[i];
                document.getElementById(value).classList.add('checked');
                checkPruebaLocal.push(value);
                localStorage.setItem('checkPrueba', checkPruebaLocal);
            }
        }
    }
}
function agregandoBtnEliminar() {
    for (i = 0; i < checkList.length; i++) {
        var span = document.createElement("IMG");
        span.setAttribute("src", "img/Todas/borrar.png");
        span.className = "btnEliminar";
        span.id = checkList[i].id;
        checkList[i].appendChild(span);
    }
    var btnEliminar = document.getElementsByClassName("btnEliminar");
    for (i = 0; i < btnEliminar.length; i++) {
        btnEliminar[i].onclick = function () {
            var div = this.parentElement;
            if (div.classList.contains('checked')) {
                var porcentajePrueba1 = (porcentajePrueba - incrementoAvance);
                localStorage.setItem('porcentajePrueba', porcentajePrueba1);
                document.getElementById("avancePrueba").innerHTML=(porcentajePrueba1*100).toFixed()+"%";
                var nuevoBorrado=checkPruebaLocal.indexOf(div.id);
                if (nuevoBorrado !== -1) checkPruebaLocal.splice(nuevoBorrado, 1);
                localStorage.setItem('checkPrueba', checkPruebaLocal);                
            }
            arrayBorrados.push(div.id);
            setTimeout(function () {
                div.style.display = "none";
            }, 400);
            localStorage.setItem('borradosPruebas', arrayBorrados);
        }
    }
}

function clickChecklist(div,idUl) {
    listaTareas = document.getElementById(idUl);
    incrementoAvance = 1 / listaTareas.childElementCount;
    var arrayLocal='check'+idUl +'Local';

    var porcentaje="porcentaje"+idUl+"";
    var avance="avance"+idUl;
    var check='check'+idUl;
    window['porcentaje' + idUl] = 0.0;
    
    if (div.classList.contains('checked')) {
        div.classList.remove('checked');
        if (localStorage.getItem(porcentaje) !== null) {
            window['porcentaje' + idUl ]= parseFloat(localStorage.getItem(porcentaje), 10);
            window['porcentaje' + idUl ] = parseFloat(localStorage.getItem(porcentaje),10) - incrementoAvance;
            localStorage.setItem(porcentaje, window['porcentaje' + idUl ]);   
            document.getElementById(avance).innerHTML=(window['porcentaje' + idUl ]*100).toFixed()+"%";        
            var PondPorc=((porcentajedesBuscar+porcentajedesCrear+porcentajedesDar+porcentajedesVivir+porcentajedesSalir+porcentajePrueba)*100)/6;
            ImgPorcentaje(PondPorc);
            window['check'+idUl +'Local'] = window['check'+idUl +'Local'].filter(function (item) {
                return item !== div.id
            })
            localStorage.setItem(check, arrayLocal);
        }        
    }
    else {
        div.classList.add('checked');
        window['porcentaje' + idUl] = parseFloat(localStorage.getItem(porcentaje),10) + incrementoAvance;
        localStorage.setItem(porcentaje, window['porcentaje' + idUl ]);
        document.getElementById(avance).innerHTML=(window['porcentaje' + idUl ]*100).toFixed()+"%";
        var PondPorc=((porcentajedesBuscar+porcentajedesCrear+porcentajedesDar+porcentajedesVivir+porcentajedesSalir+porcentajePrueba)*100)/6;
        ImgPorcentaje(PondPorc);
        window['check'+idUl +'Local'].push(div.id);    
        localStorage.setItem(check,window['check'+idUl +'Local']);
    }
}
function ImgPorcentaje(porcentaje)
{
    
    if(porcentaje<=25)
    {
        document.getElementById("barraSaludPruebas").src="img/Todas/porcentaje1.png";
        document.getElementById("barraExpPruebas").src="img/Todas/porcentaje1A.png";
        document.getElementById("procSaludPruebas").innerHTML=(porcentaje).toFixed()+"%";
        document.getElementById("procExpPruebas").innerHTML=(porcentaje).toFixed()+"%";
    }
    else if(porcentaje<=50)
    {
        document.getElementById("barraSaludPruebas").src="img/Todas/porcentaje2.png";
        document.getElementById("barraExpPruebas").src="img/Todas/porcentaje2A.png";
        document.getElementById("procSaludPruebas").innerHTML=(porcentaje).toFixed()+"%";
        document.getElementById("procExpPruebas").innerHTML=(porcentaje).toFixed()+"%";
    }
    else if(porcentaje>50&&porcentaje<100)
    {
        document.getElementById("barraSaludPruebas").src="img/Todas/porcentaje3.png";
        document.getElementById("barraExpPruebas").src="img/Todas/porcentaje3A.png";
        document.getElementById("procSaludPruebas").innerHTML=(porcentaje).toFixed()+"%";
        document.getElementById("procExpPruebas").innerHTML=(porcentaje).toFixed()+"%";
    }
    else if(porcentaje==100)
    {
        document.getElementById("barraSaludPruebas").src="img/Todas/porcentaje4.png";
        document.getElementById("barraExpPruebas").src="img/Todas/porcentaje4A.png";
        document.getElementById("procSaludPruebas").innerHTML=(porcentaje).toFixed()+"%";
        document.getElementById("procExpPruebas").innerHTML=(porcentaje).toFixed()+"%";
    }
}
app.initialize();