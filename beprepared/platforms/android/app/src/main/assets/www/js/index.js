var listaTareas = document.getElementById('Prueba');
var txtLista = document.getElementsByTagName('span');
var incrementoAvance = 1 / listaTareas.childElementCount;
var porcentajePrueba, volverPruebas, volverPruebasPuntos;
var checkList = document.getElementsByClassName("pruebasItem");
var i;
var arrayBorrados = ["0"], borradosDesafios, borradosEspecialidades;

var checkPruebaLocal = ["0"];
var checkdesSalirLocal = ["0"];
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
                localStorage.setItem('borradosPruebas', checkPrueba);
            }
        }
    }
    if (localStorage.getItem('porcentajePrueba') === null) {
        porcentajePrueba = 0;
        localStorage.setItem('porcentajePrueba', porcentajePrueba);
    }
    else {
        porcentajePrueba = parseFloat(localStorage.getItem('porcentajePrueba'), 10);
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

    // //CheckList Desafio Salir
    if (localStorage.getItem('porcentajedesSalir') === null) {
        porcentajedesSalir = 0;
        localStorage.setItem('porcentajedesSalir', porcentajedesSalir);
    }
    else {
        porcentajedesSalir = parseFloat(localStorage.getItem('porcentajedesSalir'), 10);
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
                var nuevoBorrado=checkPrueba.indexOf(div.id);
                if (nuevoBorrado !== -1) checkPrueba.splice(nuevoBorrado, 1);
                localStorage.setItem('checkPrueba', checkPrueba);                
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
    var check='check'+idUl;
    window['porcentaje' + idUl] = 0.0;
    
    if (div.classList.contains('checked')) {
        div.classList.remove('checked');
        if (localStorage.getItem(porcentaje) !== null) {
            window['porcentaje' + idUl ]= parseFloat(localStorage.getItem(porcentaje), 10);
            window['porcentaje' + idUl ] = parseFloat(localStorage.getItem(porcentaje),10) - incrementoAvance;
            localStorage.setItem(porcentaje, window['porcentaje' + idUl ]);           
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
        window['check'+idUl +'Local'].push(div.id);    
        localStorage.setItem(check,window['check'+idUl +'Local']);
    }
}
app.initialize();