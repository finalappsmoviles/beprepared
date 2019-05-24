var listaTareas = document.getElementById('Prueba');
var txtLista = document.getElementsByTagName('span');
var incrementoAvance = 1 / listaTareas.childElementCount;

var checkPruebaLocal = ["0"];
var Usuario = {
    Personaje: "Ella",
    Nombre: "Sofia Álvarez",
    mostrarAna: true
}
var Scout;

function clickEnSiguiente() {
    StatusBar.hide();
    
    if (localStorage.getItem("user") !== null) {

        Scout = JSON.parse(localStorage.getItem("user"));

        if (Scout.Personaje === false) {

            document.getElementById('imgpersonajeSeleccionado').src = "img/Todas/eleccion_el.png";
        }
        if (Scout.Personaje === true) {

            document.getElementById('imgpersonajeSeleccionado').src = "img/Todas/eleccion_ella.png";
        }
        document.getElementById('textoNombre').innerHTML = Scout.Nombre;
        document.getElementById("Secbienvenidos").className = "Secbienvenidos ocultar";
        document.getElementById("SecUnidad").className = "SecUnidad animated fadeIn";

    } else {

        Usuario.Nombre = document.getElementById("nombreUsuario").value;

        localStorage.setItem('user', JSON.stringify(Usuario));

        Scout = JSON.parse(localStorage.getItem("user"));


        document.getElementById('textoNombre').innerHTML = Scout.Nombre;

        document.getElementById("Secbienvenidos").className = "Secbienvenidos ocultar";
        document.getElementById("SecUnidad").className = "SecUnidad animated fadeIn";

    }

}
function ellaSeleccionado() {

    Usuario.Personaje = true;
    document.getElementById('imgpersonajeSeleccionado').src = "img/Todas/eleccion_ella.png";
}
function elSeleccionado() {

    Usuario.Personaje = false;
    document.getElementById('imgpersonajeSeleccionado').src = "img/Todas/eleccion_el.png";
}
function clickEnSiguienteUnidad() {
     
    Scout = JSON.parse(localStorage.getItem("user"));
    if (Scout.Personaje === false) {

        document.getElementById('imgpersonajeSeleccionadoEnf').src = "img/Todas/el_azul.png";
    }
    if (Scout.Personaje === true) {

        document.getElementById('imgpersonajeSeleccionadoEnf').src = "img/Todas/ella_azul.png";
    }
    //var Nombre = Usuario.Nombre =document.getElementById("nombreUsuario").value;
    document.getElementById('textoNombreEnf').innerHTML = Scout.Nombre;
    document.getElementById("SecUnidad").className = "SecUnidad ocultar";

    document.getElementById("SecEnfoque").className = "SecEnfoque animated fadeInUpBig";

    if (Scout.mostrarAna == true) {

        setTimeout(() => {
            lightbox.className = "animated fadeInUpBig"

        }, 1000);
    }


}
function siguienteTextoAna() {

    document.getElementById('ventanaAna').style.height = "126px";
    document.getElementById('AnaText1').className = "ocultar";
    document.getElementById('flechaDialogo').className = "ocultar";
    document.getElementById('meQuedaClaro').className = "animated fadeInUpBig";
    document.getElementById('AnaText2').className = "animated fadeInUpBig";
}
function todoClaroText() {
    document.getElementById('lightbox').className = "ocultar";
}
function clickEnVolverSecBienvenidos() {

    // location.reload(true);

    Scout = JSON.parse(localStorage.getItem("user"));
    Scout.mostrarAna = false;
    localStorage.setItem('user', JSON.stringify(Scout));

    document.getElementById("SecUnidad").className = "SecUnidad ocultar";
    document.getElementById("Secbienvenidos").className = "Secbienvenidos animated fadeIn";

}
function clickEnVolverSecUnidad() {
    Scout = JSON.parse(localStorage.getItem("user"));
    Scout.mostrarAna = false;
    localStorage.setItem('user', JSON.stringify(Scout));

    document.getElementById("SecEnfoque").className = "secEnfoque ocultar";
    document.getElementById("SecUnidad").className = "SecUnidad animated fadeInUpBig";

}

function irSeccionPruebas() {
    
    Scout = JSON.parse(localStorage.getItem("user"));
    if (Scout.Personaje === false) {

        document.getElementById('usuarioPruebas').src = "img/Todas/el_azul.png";
    }
    if (Scout.Personaje === true) {

        document.getElementById('usuarioPruebas').src = "img/Todas/ella_azul.png";
    }
    document.getElementById('nombreTextPrueba').innerHTML = Scout.Nombre;
    document.getElementById("SecEnfoque").className = "secEnfoque ocultar";
    document.getElementById("SecPruebas").className = "SecPruebas animated fadeInUpBig";



    if (localStorage.getItem("user") !== null) {
        var persoSelect = JSON.parse(localStorage.getItem("user"));
        var Scout = JSON.parse(localStorage.getItem("user"));


        document.getElementById("nombreUsuario").value = Scout.Nombre;

        Scout.mostrarAna = false;
        Scout.Personaje = persoSelect.Personaje;
        localStorage.setItem('user', JSON.stringify(Scout));
    }

    if (localStorage.getItem('borradosPruebas') !== null) {
        var borrados = localStorage.getItem('borradosPruebas');
        for (var i = 1, len = borrados.length; i < len; i++) {
            if (i % 2 == 0) {
                var value = borrados[i];
                document.getElementById(value).style.display = "none";
                arrayBorrados.push(value);
                localStorage.setItem('borradosPruebas', checkPruebaLocal);
            }
        }
    }
   
    agregandoBtnEliminar();

    chequeados();
    for (i = 0; i < txtLista.length; i++) {
        txtLista[i].addEventListener('click', function () {
            var div = this.parentElement;

            clickChecklist(div, (this.parentElement).parentElement.id);
        }, false);
    }

    

}
function clickvolverPruebas() {
    document.getElementById("SecEnfoque").className = "SecUnidad animated fadeIn";
    document.getElementById("SecPruebas").className = "SecPruebas ocultar";
    document.getElementById("bodyInfoUsuario").className="bodyInfoUsuario";
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
    if (localStorage.getItem('checkdesVivir') !== null) {
        var chequeadosDes = localStorage.getItem('checkdesVivir');
        for (var i = 1, len = chequeadosDes.length; i < len; i++) {
            if (i % 2 == 0) {
                var value = chequeadosDes[i];
                document.getElementById(value).classList.add('checked');

                checkdesVivirLocal.push(value);
                localStorage.setItem('checkdesVivir', checkdesVivirLocal);
            }
        }
    }

    if (localStorage.getItem('checkdesDar') !== null) {
        var chequeadosDes = localStorage.getItem('checkdesDar');
        for (var i = 1, len = chequeadosDes.length; i < len; i++) {
            if (i % 2 == 0) {
                var value = chequeadosDes[i];
                document.getElementById(value).classList.add('checked');

                checkdesDarLocal.push(value);
                localStorage.setItem('checkdesDar', checkdesDarLocal);
            }
        }
    }
    if (localStorage.getItem('checkdesCrear') !== null) {
        var chequeadosDes = localStorage.getItem('checkdesCrear');
        for (var i = 1, len = chequeadosDes.length; i < len; i++) {
            if (i % 2 == 0) {
                var value = chequeadosDes[i];
                document.getElementById(value).classList.add('checked');

                checkdesCrearLocal.push(value);
                localStorage.setItem('checkdesCrear', checkdesCrearLocal);
            }
        }
    }
    if (localStorage.getItem('checkdesBuscar') !== null) {
        var chequeadosDes = localStorage.getItem('checkdesBuscar');
        for (var i = 1, len = chequeadosDes.length; i < len; i++) {
            if (i % 2 == 0) {
                var value = chequeadosDes[i];
                document.getElementById(value).classList.add('checked');

                checkdesBuscarLocal.push(value);
                localStorage.setItem('checkdesBuscar', checkdesBuscarLocal);
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
                document.getElementById("avancePrueba").innerHTML = (porcentajePrueba1 * 100).toFixed() + "%";
                //console.log((parseFloat(localStorage.getItem('porcentajePrueba'))));
                var PondPorc = ((porcentajedesBuscar + porcentajedesCrear + porcentajedesDar + porcentajedesVivir + porcentajedesSalir + parseFloat(localStorage.getItem('porcentajePrueba')) * 100) / 6);
                ImgPorcentaje(PondPorc);
                var nuevoBorrado = checkPruebaLocal.indexOf(div.id);
                if (nuevoBorrado !== -1) checkPruebaLocal.splice(nuevoBorrado, 1);
                localStorage.setItem('checkPrueba', checkPruebaLocal);
            }
            arrayBorrados.push(div.id);
            setTimeout(function () {
                div.style.display = "none";
            }, 400);
            localStorage.setItem('borradosPruebas', arrayBorrados);
        }
    }
}

function clickChecklist(div, idUl) {
    listaTareas = document.getElementById(idUl);
    incrementoAvance = 1 / listaTareas.childElementCount;
    var arrayLocal = 'check' + idUl + 'Local';

    var porcentaje = "porcentaje" + idUl + "";
    var avance = "avance" + idUl;
    var check = 'check' + idUl;
    window['porcentaje' + idUl] = 0.0;

    if (div.classList.contains('checked')) {
        div.classList.remove('checked');
        if (localStorage.getItem(porcentaje) !== null) {
            window['porcentaje' + idUl] = parseFloat(localStorage.getItem(porcentaje), 10);
            window['porcentaje' + idUl] = parseFloat(localStorage.getItem(porcentaje), 10) - incrementoAvance;
            localStorage.setItem(porcentaje, window['porcentaje' + idUl]);
            document.getElementById(avance).innerHTML = (window['porcentaje' + idUl] * 100).toFixed() + "%";
            var PondPorc = ((porcentajedesBuscar + porcentajedesCrear + porcentajedesDar + porcentajedesVivir + porcentajedesSalir + porcentajePrueba) * 100) / 6;
            ImgPorcentaje(PondPorc);
            window['check' + idUl + 'Local'] = window['check' + idUl + 'Local'].filter(function (item) {
                return item !== div.id
            })
            localStorage.setItem(check, arrayLocal);
        }
    }
    else {
        div.classList.add('checked');
        window['porcentaje' + idUl] = parseFloat(localStorage.getItem(porcentaje), 10) + incrementoAvance;
        localStorage.setItem(porcentaje, window['porcentaje' + idUl]);
        document.getElementById(avance).innerHTML = (window['porcentaje' + idUl] * 100).toFixed() + "%";
        var PondPorc = ((porcentajedesBuscar + porcentajedesCrear + porcentajedesDar + porcentajedesVivir + porcentajedesSalir + porcentajePrueba) * 100) / 6;
        ImgPorcentaje(PondPorc);
        window['check' + idUl + 'Local'].push(div.id);
        localStorage.setItem(check, window['check' + idUl + 'Local']);
    }
}
