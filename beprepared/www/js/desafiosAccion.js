var pruebasFooter, desFooter,checkListDesafios,checkListPruebas;
var DesSalir, DesVivir,DesDar,DesCrear,DesCrear,DesBuscar;
var DesMenu;
var DesSalirInfoCheck;
var bodyInfoUsuario;
var volverPruebas, volverPruebasPuntos,porcentajedesSalir,headInfoUsuario;
volverPruebas=document.getElementById("volverPruebas");
volverPruebasPuntos=document.getElementById("volverPruebasPuntos");
bodyInfoUsuario=document.getElementById("bodyInfoUsuario");
DesMenu=document.getElementById("DesMenu");
DesSalirInfoCheck=document.getElementById("DesSalirInfoCheck");
DesVivirInfoCheck=document.getElementById("DesVivirInfoCheck");
pruebasFooter=document.getElementById("pruebasFooter");
desFooter=document.getElementById("desFooter");
checkListDesafios=document.getElementById("checkListDesafios");
checkListPruebas=document.getElementById("checkListPruebas");
headInfoUsuario=document.getElementById("headInfoUsuario");
var nombrePruebas=document.getElementById("nombrePruebas");
var volverPruebasPuntos=document.getElementById("volverPruebasPuntos");


function abrirDesafios()
{
    checkListDesafios.className= "checklist animated fadeInRightBig";
    checkListPruebas.className="checklist ocultar"; 
    pruebasFooter.src="img/pantallas/desafios/imagenes/pruebas.png";
    desFooter.src="img/pantallas/desafios/imagenes/desafios.png";
    DesMenu.className= "checklist animated fadeInLeftBig";
    DesSalirInfoCheck.className="ocultar"; 
    DesVivirInfoCheck.className="ocultar"; 
    bodyInfoUsuario.className="bodyInfoUsuario";    
}

function abrirPruebas()
{
    checkListPruebas.className= "checklist animated fadeInLeftBig";
    checkListDesafios.className="checklist ocultar"; 
    pruebasFooter.src="img/pantallas/pruebas/imagenes/pruebas.png";
    desFooter.src="img/pantallas/pruebas/imagenes/desafios.png";
    bodyInfoUsuario.className="bodyInfoUsuario";
    volverPruebas.id="volverPruebas";
    volverPruebasPuntos.id="volverPruebasPuntos";
   
}
function ClickDesCheck(id)
{
    var desafioCheck=document.getElementById(id.id+"Check");    
    desafioCheck.className= "checklist animated fadeInLeftBig";
    DesMenu.className="ocultar"; 
    bodyInfoUsuario.className="ocultar";
    volverPruebas.id="volverDesafios";
    volverPruebasPuntos.id="volverDesafiosPuntos";
    document.getElementById("volverDesafios").addEventListener("click",function()
    {        
        document.getElementById("SecUnidad").className="SecUnidad ocultar";
        SecPruebas.className="SecPruebas animated fadeInUpBig";
        DesMenu.className= "checklist animated fadeInUpBig";
        desafioCheck.className="checklist ocultar";
        volverPruebas.id="volverPruebas";
        bodyInfoUsuario.className="bodyInfoUsuario";
        document.getElementById("tituloMenDes").style.marginTop="60px";  
        volverPruebas.addEventListener('click',function(){
            document.getElementById("SecUnidad").className= "SecUnidad animated fadeInUpBig";
            document.getElementById("SecPruebas").className="SecPruebas ocultar"; 
        },false);
        volverPruebasPuntos.addEventListener('click',function(){
            document.getElementById("SecUnidad").className= "SecUnidad animated fadeInUpBig";
            document.getElementById("SecPruebas").className="SecPruebas ocultar"; 
        },false);
    });
    document.getElementById("volverDesafiosPuntos").addEventListener("click",function()
    {
        document.getElementById("SecUnidad").className="SecUnidad ocultar";
        SecPruebas.className="SecPruebas animated fadeInUpBig";
        DesMenu.className= "checklist animated fadeInUpBig";
        desafioCheck.className="checklist ocultar";
        volverPruebasPuntos.id="volverPruebasPuntos";
        bodyInfoUsuario.className="bodyInfoUsuario";
        document.getElementById("tituloMenDes").style.marginTop="60px";  
        volverPruebas.addEventListener('click',function(){
            document.getElementById("SecUnidad").className= "SecUnidad animated fadeInUpBig";
            document.getElementById("SecPruebas").className="SecPruebas ocultar"; 
        },false);
        volverPruebasPuntos.addEventListener('click',function(){
            document.getElementById("SecUnidad").className= "SecUnidad animated fadeInUpBig";
            document.getElementById("SecPruebas").className="SecPruebas ocultar"; 
        },false);          
    });  
}




