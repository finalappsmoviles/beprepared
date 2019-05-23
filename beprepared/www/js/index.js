/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
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
    var listaTareas = document.querySelector('ul');
    var txtLista = document.getElementsByTagName('span');
    var incrementoAvance = 1 / listaTareas.childElementCount;
    var porcentajeTarea;
    var checkList = document.getElementsByTagName("LI");
    var i;
    var borradosPruebas = [], borradosDesafios, borradosEspecialidades;
    borradosPruebas = localStorage.getItem('borradosPruebas') != null ? JSON.parse(localStorage.getItem('borradosPruebas')) : [];
    for (i = 0; i < borradosPruebas.length; i++) {
        if (borradosPruebas[i] !== "0" && borradosPruebas[i] !== "\"" && borradosPruebas[i] !== "") {
            document.getElementById(borradosPruebas[i]).style.display = "none";
        }
    }
    if (localStorage.getItem('porcentajeTarea') === null) {
        porcentajeTarea = 0;
        localStorage.setItem('porcentajeTarea', porcentajeTarea);
    }
    else {
        porcentajeTarea = parseFloat(localStorage.getItem('porcentajeTarea'), 10);
        
    }

    for (i = 0; i < checkList.length; i++) {
        var span = document.createElement("IMG");
        span.setAttribute("src", "img/Todas/borrar.png");
        span.className = "btnEliminar";
        span.id = checkList[i].id;
        checkList[i].appendChild(span);
    }
    var btnEliminar = document.getElementsByClassName("btnEliminar");
    for (i = 0; i < btnEliminar.length; i++) {
        btnEliminar[i].removeEventListener('click', function () { });
        btnEliminar[i].onclick = function () {

            var div = this.parentElement;
            if (div.classList.contains('checked')) {
                var porcentajeTarea1 = (porcentajeTarea - incrementoAvance);
                localStorage.setItem('porcentajeTarea', porcentajeTarea1);
            }

            borradosPruebas.push(parseInt(div.id));
            div.style.display = "none";
            localStorage.setItem('borradosPruebas', JSON.stringify(borradosPruebas));
        }
    }

    var arrayCheck = ["0"];
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
        txtLista[i].addEventListener('click', function (ev) {
            var div = this.parentElement;
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

        }, false);

    }

    if(localStorage.getItem("user") !== null){
        var persoSelect = JSON.parse(localStorage.getItem("user"));
       var Scout = JSON.parse(localStorage.getItem("user"));

      
        document.getElementById("nombreUsuario").value = Scout.Nombre;
       
        Scout.mostrarAna = false;
        Scout.Personaje = persoSelect.Personaje;
        localStorage.setItem('user',JSON.stringify(Scout));
    }

}
app.initialize();