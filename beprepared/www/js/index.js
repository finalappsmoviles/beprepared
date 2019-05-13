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
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        iniciarPrograma();
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
    setTimeout(function(){
        document.getElementById("Seccarga").className= "Seccarga ocultar";
        document.getElementById("Secbienvenidos").className="Secbienvenidos animated fadeInUpBig";
    }, 2000);
    
    var checkList = document.getElementsByTagName("LI");
    var i;
    var borradosPruebas,borradosDesafios,borradosEspecialidades;
    for (i = 0; i < checkList.length; i++) {
        var span = document.createElement("IMG");
        span.setAttribute("src", "img/todas/borrar.png");  
        span.className = "close";
        checkList[i].appendChild(span);        
    } 
    var close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }    
    }

    var arrayCheck=["0"];
    if (localStorage.getItem('pruebasCompletas') !== null) {
        var chequeados=localStorage.getItem('pruebasCompletas');
        for(var i=1, len=chequeados.length; i<len; i++) {
            if(i%2==0)
            {
                var value = chequeados[i];
                document.getElementById(value).classList.add('checked');
                arrayCheck.push(value);
                localStorage.setItem('pruebasCompletas', arrayCheck);
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
            localStorage.setItem('pruebasCompletas', arrayCheck);
        }
        else
        {
            ev.target.classList.add('checked');
            if (typeof porcentajeTarea !== 'undefined') {                        
                porcentajeTarea += incrementoAvance;
                localStorage.setItem('porcentajeTarea', porcentajeTarea);  
                arrayCheck.push(ev.target.id);
                localStorage.setItem('pruebasCompletas', arrayCheck);
            }
            else{                        
                porcentajeTarea = incrementoAvance; 
                localStorage.setItem('porcentajeTarea', porcentajeTarea);              
                arrayCheck.push(ev.target.id);
                localStorage.setItem('pruebasCompletas', arrayCheck);
            }
        }  
        
    },false);
}
app.initialize();