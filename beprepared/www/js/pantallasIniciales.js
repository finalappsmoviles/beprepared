var Usuario = {
    Personaje: "Ella",
    Nombre: "Alba",
    Unidad: true
}
var esSeleccion ;
function clickEnSiguiente(){
    var seleccionPersonaje;
    if(esSeleccion === true){
        seleccionPersonaje = "Mujer";
    }else if(esSeleccion === false){
        seleccionPersonaje = "Hombre";
    }else{
        seleccionPersonaje = "Ninguna";
    }
    
    var Nombre = Usuario.Nombre =document.getElementById("nombreUsuario").value;
    
    document.getElementById('textoNombre').innerHTML= Nombre;
   
     document.getElementById("Secbienvenidos").className= "Secbienvenidos ocultar";
    document.getElementById("SecUnidad").className="SecUnidad animated fadeInUpBig";

}

function ellaSeleccionado(){
    
    esSeleccion = true;
    document.getElementById('personajeSeleccionado').src = "img/Todas/eleccion_ella.png";
}
function elSeleccionado(){
   
    esSeleccion = false;
    document.getElementById('imgpersonajeSeleccionado').src = "img/Todas/eleccion_el.png";
}
function clickEnSiguienteUnidad(){
    if(esSeleccion === false){
        document.getElementById('imgpersonajeSeleccionadoEnf').src = "img/Todas/el_azul.png";
        
    }
    var Nombre = Usuario.Nombre =document.getElementById("nombreUsuario").value;
    document.getElementById('textoNombreEnf').innerHTML= Nombre;
    document.getElementById("SecUnidad").className= "SecUnidad ocultar";
    document.getElementById("SecPruebas").className="SecPruebas animated fadeInUpBig";
    

}
function clickEnVolverSecBienvenidos(){
    document.location.reload(true);
    document.getElementById("SecUnidad").className= "SecUnidad ocultar";
    document.getElementById("Secbienvenidos").className="Secbienvenidos animated fadeInUpBig";

}
function clickEnVolverSecUnidad(){
  
    document.getElementById("SecEnfoque").className= "secEnfoque ocultar";
    document.getElementById("SecUnidad").className="SecUnidad animated fadeInUpBig";

}