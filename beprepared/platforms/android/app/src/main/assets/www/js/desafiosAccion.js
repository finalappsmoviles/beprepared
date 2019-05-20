var pruebasFooter, desFooter,checkListDesafios,checkListPruebas;
var DesSalir, DesVivir,DesDar,DesCrear,DesCrear,DesBuscar;
var DesMenu;
var DesSalirCheck;
var bodyInfoUsuario;
var volverPruebas, volverPruebasPuntos,porcentajedesSalir;
volverPruebas=document.getElementById("volverPruebas");
volverPruebasPuntos=document.getElementById("volverPruebasPuntos");
bodyInfoUsuario=document.getElementById("bodyInfoUsuario");
DesMenu=document.getElementById("DesMenu");
DesSalirCheck=document.getElementById("DesSalirCheck");
DesSalirInfo=document.getElementById("DesSalirInfo");
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
        DesMenu.className= "checklist animated fadeInLeftBig";
        DesSalirCheck.className="ocultar"; 
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
    DesSalirInfo.addEventListener("click",function()
    {
        DesSalirCheck.className= "checklist animated fadeInLeftBig";
        DesMenu.className="ocultar"; 
        bodyInfoUsuario.className="ocultar";
        volverPruebas.id="volverDesafios";
        volverPruebasPuntos.id="volverDesafiosPuntos";
        document.getElementById("volverDesafios").addEventListener("click",function()
        {
            
            document.getElementById("SecUnidad").className="SecUnidad ocultar";
            SecPruebas.className="SecPruebas animated fadeInUpBig";
            DesMenu.className= "checklist animated fadeInUpBig";
            DesSalirCheck.className="checklist ocultar";
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
            DesSalirCheck.className="checklist ocultar";
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
        
    });
    
    
    
}




