
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
    document.getElementById("barraSaludPruebas").src="img/Todas/porcentaje4.png";
    document.getElementById("barraSaludUni").src="img/Todas/porcentaje4.png";
    document.getElementById("barraSaludEnf").src="img/Todas/porcentaje4.png";

}
function ImgPorcentaje(porcentaje)
{
    if(porcentaje==0)
    {
        document.getElementById("barraExpPruebas").src="img/Todas/barra.png";
        document.getElementById("barraExpUni").src="img/Todas/barra.png";
        document.getElementById("barraExpEnf").src="img/Todas/barra.png";

        
        document.getElementById("procExpPruebas").innerHTML=(porcentaje).toFixed()+"%";
        document.getElementById("procExpUni").innerHTML=(porcentaje).toFixed()+"%";
        document.getElementById("procExpEnf").innerHTML=(porcentaje).toFixed()+"%";
        document.getElementById("porcenUniforme").innerHTML=(porcentaje).toFixed()+"%";

    }    


    else if(porcentaje<=25&&porcentaje>0)
    {
        document.getElementById("barraExpPruebas").src="img/Todas/porcentaje1A.png";
        document.getElementById("barraExpUni").src="img/Todas/porcentaje1A.png";
        document.getElementById("barraExpEnf").src="img/Todas/porcentaje1A.png";
        
        
        document.getElementById("procExpPruebas").innerHTML=(porcentaje).toFixed()+"%";
        document.getElementById("procExpUni").innerHTML=(porcentaje).toFixed()+"%";
        document.getElementById("procExpEnf").innerHTML=(porcentaje).toFixed()+"%";
        document.getElementById("porcenUniforme").innerHTML=(porcentaje).toFixed()+"%";

        
    }
    else if(porcentaje<=50)
    {
        
        document.getElementById("barraExpPruebas").src="img/Todas/porcentaje2A.png";
        document.getElementById("barraExpUni").src="img/Todas/porcentaje2A.png";
        document.getElementById("barraExpEnf").src="img/Todas/porcentaje2A.png";
        
        
        document.getElementById("procExpPruebas").innerHTML=(porcentaje).toFixed()+"%";
        document.getElementById("procExpUni").innerHTML=(porcentaje).toFixed()+"%";
        document.getElementById("procExpEnf").innerHTML=(porcentaje).toFixed()+"%";
        document.getElementById("porcenUniforme").innerHTML=(porcentaje).toFixed()+"%";
    }
    else if(porcentaje>50&&porcentaje<100)
    {
        
        document.getElementById("barraExpPruebas").src="img/Todas/porcentaje3A.png";
        document.getElementById("barraExpUni").src="img/Todas/porcentaje3A.png";
        document.getElementById("barraExpEnf").src="img/Todas/porcentaje3A.png";        
        
        document.getElementById("procExpPruebas").innerHTML=(porcentaje).toFixed()+"%";
        document.getElementById("procExpUni").innerHTML=(porcentaje).toFixed()+"%";
        document.getElementById("procExpEnf").innerHTML=(porcentaje).toFixed()+"%";
        document.getElementById("porcenUniforme").innerHTML=(porcentaje).toFixed()+"%";


    }
    else if(porcentaje==100)
    {
        
        document.getElementById("barraExpPruebas").src="img/Todas/porcentaje4A.png";
        document.getElementById("barraExpUni").src="img/Todas/porcentaje4A.png";
        document.getElementById("barraExpEnf").src="img/Todas/porcentaje4A.png";
        
        
        document.getElementById("procExpPruebas").innerHTML=(porcentaje).toFixed()+"%";
        document.getElementById("procExpUni").innerHTML=(porcentaje).toFixed()+"%";
        document.getElementById("procExpEnf").innerHTML=(porcentaje).toFixed()+"%";
        document.getElementById("porcenUniforme").innerHTML=(porcentaje).toFixed()+"%";

    
    }

}
app.initialize();