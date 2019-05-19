var listaTareas = document.getElementById('pruebas');
// var txtLista = document.getElementsByClassName('pruebasItem');
var txtLista = document.getElementsByTagName('span');
var incrementoAvance = 1 / listaTareas.childElementCount;
var porcentajeTarea, volverPruebas, volverPruebasPuntos;
var checkList = document.getElementsByTagName("LI");
var i;
var borradosPruebas= ["0"], borradosDesafios, borradosEspecialidades;

var arrayCheck = ["0"];
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
    // setTimeout(function(){
    //     document.getElementById("Seccarga").className= "Seccarga ocultar";
    //     document.getElementById("Secbienvenidos").className="Secbienvenidos animated fadeInUpBig";
    // }, 2000);
    var bString="borradosPruebas";
   if (localStorage.getItem("borradosPruebas") != null){
        var borradosPruebasR=localStorage.getItem('borradosPruebas').split(',');
        for (i = 0; i < borradosPruebasR.length; i++) {
            if (borradosPruebasR[i] !== "0" && borradosPruebasR[i] !== "\"" && borradosPruebasR[i] !== "") {
                document.getElementById(borradosPruebasR[i]).style.display = "none";
                console.log(borradosPruebasR);                
                borradosPruebas.push(borradosPruebasR[i]);
                console.log(borradosPruebas);
                localStorage.setItem('borradosPruebas', borradosPruebas);
            }
        }
    } 
    
    if (localStorage.getItem('porcentajeTarea') === null) {
        porcentajeTarea = 0;
        localStorage.setItem('porcentajeTarea', porcentajeTarea);
    }
    else {
        porcentajeTarea = parseFloat(localStorage.getItem('porcentajeTarea'), 10);
    }
    agregandoBtnEliminar();

    if (localStorage.getItem('pruebasCompletas') !== null) {
        var chequeados = localStorage.getItem('pruebasCompletas');
        for (var i = 1, len = chequeados.length; i < len; i++) {
            if (i % 2 == 0) {
                var value = chequeados[i];
                document.getElementById(value).classList.add('checked');
                arrayCheck.push(value);
                localStorage.setItem('pruebasCompletas', arrayCheck);
            }
        }     
    }
    for (i = 0; i < txtLista.length; i++) {
        txtLista[i].addEventListener('click', function(){
            var div = this.parentElement;
            clickChecklist (div);
        },false); 
    }
    volverPruebas=document.getElementById("volverPruebas");
    volverPruebasPuntos=document.getElementById("volverPruebasPuntos");
    volverPruebas.addEventListener('click',function(){
        document.getElementById("SecUnidad").className= "SecUnidad animated fadeInUpBig";
        document.getElementById("SecPruebas").className="SecPruebas ocultar"; 
    },false);
    volverPruebasPuntos.addEventListener('click',function(){
        document.getElementById("SecUnidad").className= "SecUnidad animated fadeInUpBig";
        document.getElementById("SecPruebas").className="SecPruebas ocultar"; 
    },false);
    
}


function agregandoBtnEliminar()
{
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
                var porcentajeTarea1 = (porcentajeTarea - incrementoAvance);
                localStorage.setItem('porcentajeTarea', porcentajeTarea1);
            }            
            
            borradosPruebas.push(div.id);
            
            setTimeout(function(){
                div.style.display = "none";
            }, 400);
            localStorage.setItem('borradosPruebas', borradosPruebas);
        }
    }
}

function clickChecklist(div)
{
    if (div.classList.contains('checked')) {
        div.classList.remove('checked');
        if (localStorage.getItem('porcentajeTarea') !== null) {
            porcentajeTarea = parseFloat(localStorage.getItem('porcentajeTarea'), 10);
            porcentajeTarea = porcentajeTarea - incrementoAvance;
            localStorage.setItem('porcentajeTarea', porcentajeTarea);
            arrayCheck = arrayCheck.filter(function (item) {
                return item !== div.id
            })
            localStorage.setItem('pruebasCompletas', arrayCheck);
        }
        else {
            porcentajeTarea = porcentajeTarea - incrementoAvance;
            localStorage.setItem('porcentajeTarea', porcentajeTarea);
            arrayCheck = arrayCheck.filter(function (item) {
                return item !== div.id
            })
            localStorage.setItem('pruebasCompletas', arrayCheck);
        }
    }
    else {
        div.classList.add('checked');
        porcentajeTarea = porcentajeTarea + incrementoAvance;
        localStorage.setItem('porcentajeTarea', porcentajeTarea);
        arrayCheck.push(div.id);
        localStorage.setItem('pruebasCompletas', arrayCheck);
    }

}



app.initialize();