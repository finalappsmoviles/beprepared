var pruebasFooter, desFooter,checkListDesafios,checkListPruebas;
var DesSalir, DesVivir,DesDar,DesCrear,DesCrear,DesBuscar;
var DesMenu;
var DesSalirCheck;
var bodyInfoUsuario;
var volverPruebas, volverPruebasPuntos;
volverPruebas=document.getElementById("volverPruebas");
volverPruebasPuntos=document.getElementById("volverPruebasPuntos");
bodyInfoUsuario=document.getElementById("bodyInfoUsuario");
DesMenu=document.getElementById("DesMenu");
DesSalirCheck=document.getElementById("DesSalirCheck");
DesSalir=document.getElementById("DesSalir");
pruebasFooter=document.getElementById("pruebasFooter");
desFooter=document.getElementById("desFooter");
checkListDesafios=document.getElementById("checkListDesafios");
checkListPruebas=document.getElementById("checkListPruebas");
function abrirDesafios()
{
    desFooter.addEventListener("click",function()
    {
        checkListDesafios.className= "checklist animated fadeInRightBig";
        checkListPruebas.className="checklist ocultar"; 
        pruebasFooter.src="img/pantallas/desafios/imagenes/pruebas.png";
        desFooter.src="img/pantallas/desafios/imagenes/desafios.png";
    });
}
function abrirPruebas()
{
    pruebasFooter.addEventListener("click",function()
    {
        checkListPruebas.className= "checklist animated fadeInLeftBig";
        checkListDesafios.className="checklist ocultar"; 
        pruebasFooter.src="img/pantallas/pruebas/imagenes/pruebas.png";
        desFooter.src="img/pantallas/pruebas/imagenes/desafios.png";
        bodyInfoUsuario.className="bodyInfoUsuario";
        volverPruebas.id="volverPruebas";
        volverPruebasPuntos.id="volverPruebasPuntos";
    });
}
function ClickDesSalirCheck()
{
    DesSalir.addEventListener("click",function()
    {
        DesSalirCheck.className= "checklist animated fadeInLeftBig";
        DesMenu.className="ocultar"; 
        bodyInfoUsuario.className="ocultar";
        volverPruebas.id="volverDesafios";
        document.getElementById("volverDesafios").addEventListener("click",function()
        {
            
        });
        volverPruebasPuntos.id="volverDesafiosPuntos";
    });
}


