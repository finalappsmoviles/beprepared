var Usuario = {
    Personaje: "Ella",
    Nombre: "Sofia Álvarez",
    mostrarAna: true
}
var Scout ;

function clickEnSiguiente(){  

    
    if(localStorage.getItem("user") !== null){

        Scout = JSON.parse(localStorage.getItem("user"));

        if(Scout.Personaje === false){

            document.getElementById('imgpersonajeSeleccionado').src = "img/Todas/eleccion_el.png";   
        }
        if(Scout.Personaje === true){
    
            document.getElementById('imgpersonajeSeleccionado').src = "img/Todas/eleccion_ella.png";  
        }
        document.getElementById('textoNombre').innerHTML= Scout.Nombre;
        document.getElementById("Secbienvenidos").className= "Secbienvenidos ocultar";
        document.getElementById("SecUnidad").className="SecUnidad animated fadeInUpBig";

    }else{

    Usuario.Nombre =document.getElementById("nombreUsuario").value;
    
    localStorage.setItem('user',JSON.stringify(Usuario));

     Scout = JSON.parse(localStorage.getItem("user"));
    

    document.getElementById('textoNombre').innerHTML= Scout.Nombre;
   
    document.getElementById("Secbienvenidos").className= "Secbienvenidos ocultar";
    document.getElementById("SecUnidad").className="SecUnidad animated fadeInUpBig";

    }

}
function ellaSeleccionado(){
    
    Usuario.Personaje = true;
    document.getElementById('imgpersonajeSeleccionado').src = "img/Todas/eleccion_ella.png";
}
function elSeleccionado(){
   
    Usuario.Personaje = false;
    document.getElementById('imgpersonajeSeleccionado').src = "img/Todas/eleccion_el.png";
}
function clickEnSiguienteUnidad(){

     Scout = JSON.parse(localStorage.getItem("user"));
    if(Scout.Personaje === false){

        document.getElementById('imgpersonajeSeleccionadoEnf').src = "img/Todas/el_azul.png";   
    }
    if(Scout.Personaje === true){

        document.getElementById('imgpersonajeSeleccionadoEnf').src = "img/Todas/ella_azul.png";  
    }
    //var Nombre = Usuario.Nombre =document.getElementById("nombreUsuario").value;
    document.getElementById('textoNombreEnf').innerHTML= Scout.Nombre;
    document.getElementById("SecUnidad").className= "SecUnidad ocultar";
    document.getElementById("SecEnfoque").className="SecEnfoque animated fadeInUpBig";

    if(Scout.mostrarAna === true){
        setTimeout(()=>{
            lightbox.className = "animated fadeInUpBig"
            
        },1000);
    }
    
   
}
function siguienteTextoAna(){
    document.getElementById('ventanaAna').style.height="104px";
    document.getElementById('AnaText1').className="ocultar";
    document.getElementById('flechaDialogo').className="ocultar";
    document.getElementById('meQuedaClaro').className="animated fadeInUpBig";
    document.getElementById('AnaText2').className="animated fadeInUpBig";
}
function todoClaroText(){
    document.getElementById('lightbox').className="ocultar";
}
function clickEnVolverSecBienvenidos(){

    // location.reload(true);

    Scout = JSON.parse(localStorage.getItem("user"));
    Scout.mostrarAna = false;
    localStorage.setItem('user',JSON.stringify(Scout));

    document.getElementById("SecUnidad").className= "SecUnidad ocultar";
    document.getElementById("Secbienvenidos").className="Secbienvenidos animated fadeInUpBig";

}
function clickEnVolverSecUnidad(){
    Scout = JSON.parse(localStorage.getItem("user"));
    Scout.mostrarAna = false;
    localStorage.setItem('user',JSON.stringify(Scout));

    document.getElementById("SecEnfoque").className= "secEnfoque ocultar";
    document.getElementById("SecUnidad").className= "SecUnidad animated fadeInUpBig";

}

function irSeccionPruebas(){
    Scout = JSON.parse(localStorage.getItem("user"));
    if(Scout.Personaje === false){

        document.getElementById('usuarioPruebas').src = "img/Todas/el_azul.png";   
    }
    if(Scout.Personaje === true){

        document.getElementById('usuarioPruebas').src = "img/Todas/ella_azul.png";  
    }
     document.getElementById('nombreTextPrueba').innerHTML= Scout.Nombre;
    document.getElementById("SecEnfoque").className= "secEnfoque ocultar";
    document.getElementById("SecPruebas").className="SecPruebas animated fadeInUpBig";

}