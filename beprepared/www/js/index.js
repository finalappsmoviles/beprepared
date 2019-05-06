var menuAzulAbierto, menuAzul,menu, listaPrueba;
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        iniciarPrograma();
        inicializarVariables();
        asignarEventos();
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {       
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
function iniciarPrograma()
{    
    var arrayCheck=["0"];
    if (localStorage.getItem('tareasCompletadas') !== null) {
        var chequeados=localStorage.getItem('tareasCompletadas');
        for(var i=1, len=chequeados.length; i<len; i++) {
            if(i%2==0)
            {
                var value = chequeados[i];
                document.getElementById(value).classList.add('checked');
                arrayCheck.push(value);
                localStorage.setItem('tareasCompletadas', arrayCheck);
            }            
        }
    }
    var listaTareas = document.querySelector('ul');
    var incrementoAvance=1/listaTareas.childElementCount;
    var porcentajeTarea;
    listaTareas.addEventListener('click', function (ev) {
        if (ev.target.classList.contains('checked')) {
            ev.target.classList.remove('checked');
            porcentajeTarea -= incrementoAvance;
            localStorage.setItem('porcentajeTarea', porcentajeTarea); 
            arrayCheck = arrayCheck.filter(function(item) { 
                return item !== ev.target.id
            })
            localStorage.setItem('tareasCompletadas', arrayCheck);
        }
        else
        {
            ev.target.classList.add('checked');
            if (typeof porcentajeTarea !== 'undefined') {                        
                porcentajeTarea += incrementoAvance;
                localStorage.setItem('porcentajeTarea', porcentajeTarea);  
                arrayCheck.push(ev.target.id);
                localStorage.setItem('tareasCompletadas', arrayCheck);
            }
            else{                        
                porcentajeTarea = incrementoAvance; 
                localStorage.setItem('porcentajeTarea', porcentajeTarea);              
                arrayCheck.push(ev.target.id);
                localStorage.setItem('tareasCompletadas', arrayCheck);
            }
        }
    },false);
}
function inicializarVariables(){
    menuAzul=document.getElementById("menuAzul");
    menuAzulAbierto=document.getElementById("menuAzulAbierto");
    menu=document.getElementById("menu");
    listaPrueba=document.getElementById("listaPrueba");
}
function asignarEventos()
{
    mostrarMenu();
    
}
function mostrarMenu()
{
    menuAzul.addEventListener("click",function(){
        menu.className="animated fadeInLeft"; 
        listaPrueba.className="ocultar";       
    });
    menuAzulAbierto.addEventListener("click",function(){
        menu.className="animated fadeOut"; 
        menuAzul.className="ocultar";
        listaPrueba.className="animated fadeInLeft";        
        setTimeout(function(){ 
            menu.className="ocultar"; 
            menuAzul.style.width = "40px";
            menuAzul.style.height = "40px";
            menuAzul.style.padding = "5px";
            menuAzul.className="animated rotateInDownLeft";
            menuAzulAbierto.src="img/menuAzul.png";            
        }, 600);
        
    });
}
app.initialize();