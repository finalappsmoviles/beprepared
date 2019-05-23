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
    DesMenu.className= "checklist animated fadeInRightBig";
    DesSalirInfoCheck.className="ocultar"; 
    DesVivirInfoCheck.className="ocultar"; 
    bodyInfoUsuario.className="bodyInfoUsuario";  
}

function abrirPruebas()
{
    checkListPruebas.className= "checklist animated fadeInRightBig";
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
    desafioCheck.className= "checklist animated fadeInRightBig";
    DesMenu.className="ocultar"; 
    bodyInfoUsuario.className="ocultar";
    //volverPruebas.id="volverDesafios";
    // volverPruebasPuntos.id="volverDesafiosPuntos";
    // document.getElementById("volverDesafios").onclick=function()
    // {        
    //     document.getElementById("SecUnidad").className="SecUnidad ocultar";
    //     SecPruebas.className="SecPruebas animated fadeInLeftBig";
    //     DesMenu.className= "checklist animated fadeInRightBig";
    //     desafioCheck.className="checklist ocultar";
    //     volverPruebas.id="volverPruebas";
    //     bodyInfoUsuario.className="bodyInfoUsuario";
    //     document.getElementById("tituloMenDes").style.marginTop="60px";
    //     volverPruebas.id="volverPruebas";
    //     volverPruebasPuntos.id="volverPruebasPuntos";  
    //     volverPruebas.onclick=function(){
    //         document.getElementById("SecEnfoque").className= "SecUnidad animated fadeInUpBig";
    //         document.getElementById("SecPruebas").className="SecPruebas ocultar"; 
    //     };
    //     volverPruebasPuntos.onclick=function(){
    //         document.getElementById("SecEnfoque").className= "SecUnidad animated fadeInUpBig";
    //         document.getElementById("SecPruebas").className="SecPruebas ocultar"; 
    //     };
    // };
    // document.getElementById("volverDesafiosPuntos").onclick=function()
    // {
    //     document.getElementById("SecUnidad").className="SecUnidad ocultar";
    //     SecPruebas.className="SecPruebas animated fadeInLeftBig";
    //     DesMenu.className= "checklist animated fadeInRightBig";
    //     desafioCheck.className="checklist ocultar";
    //     volverPruebasPuntos.id="volverPruebasPuntos";
    //     bodyInfoUsuario.className="bodyInfoUsuario";
    //     volverPruebas.id="volverPruebas";
    //     volverPruebasPuntos.id="volverPruebasPuntos";
    //     document.getElementById("tituloMenDes").style.marginTop="60px";  
    //     volverPruebas.onclick=function(){
    //         document.getElementById("SecEnfoque").className= "SecUnidad animated fadeInUpBig";
    //         document.getElementById("SecPruebas").className="SecPruebas ocultar"; 
    //     };
    //     volverPruebasPuntos.onclick=function(){
    //         document.getElementById("SecEnfoque").className= "SecUnidad animated fadeInUpBig";
    //         document.getElementById("SecPruebas").className="SecPruebas ocultar"; 
    //     };        
    // };  
}
function clickCambioId(id)
{
    var desafioCheck=document.getElementById(id.id+"Check");    
    document.getElementById("SecUnidad").className="SecUnidad ocultar";
        SecPruebas.className="SecPruebas animated fadeInLeftBig";
        DesMenu.className= "checklist animated fadeInRightBig";
        desafioCheck.className="checklist ocultar";
        volverPruebas.setAttribute("onclick",clickvolverPruebas());
        volverPruebasPuntos.setAttribute("onclick",clickvolverPruebas());
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
}




