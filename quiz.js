let cont1 = document.createElement("div")
document.body.appendChild(cont1)

let cont = document.createElement("div")
cont.classList.add("cont")
document.body.appendChild(cont)



let preguntaActual = 0;

const preguntas = [{
    titulo: '¿Qué jugador marcó el hat-trick más rápido de la historia en LaLiga?',
    respuestas: [
        {
            label: "Cristiano Ronaldo",
            for: "cristiano1",
            id: "cristiano1",
            name: "delantero",
            value: "cristiano_ronaldo",
            class: "classLabel"
        },
        {
            label: "Lionel Messi",
            for: "leo1",
            id: "leo1",
            name: "delantero",
            value: "lionel_messi",
            class: "classLabel"
        },
        {
            label: "Bebeto",
            for: "bebeto1",
            id: "bebeto1",
            name: "delantero",
            value: "bebeto",
            class: "classLabel"
        },
        {
            label: "Luis Suárez",
            for: "luis_suarez1",
            id: "luis_suarez1",
            name: "delantero",
            value: "luis_suarez",
            class: "classLabel"
        },
        {
            label: "Karim Benzema",
            for: "karim_benzema1",
            id: "karim_benzema1",
            name: "delantero",
            value: "karim_benzema",
            class: "classLabel"
        }
    ],

    respuestaCorrecta: "bebeto1"
}, {
    titulo: '¿Quién es el jugador que más veces vio la tarjeta roja en la historia de LaLiga?',
    respuestas: [
        {
            label: "Gerard Piqué",
            for: "pique1",
            id: "pique1",
            name: "defensa",
            value: "gerard_pique",
            class: "classLabel"
        },
        {
            label: "Sergio Ramos",
            for: "sergio1",
            id: "sergio1",
            name: "defensa",
            value: "sergio_ramos",
            class: "classLabel"
        },
        {
            label: "Pepe",
            for: "pepe1",
            id: "pepe1",
            name: "defensa",
            value: "pepe",
            class: "classLabel"
        },
        {
            label: "Diego Godin",
            for: "diego_godin1",
            id: "diego_godin1",
            name: "defensa",
            value: "diego-godin",
            class: "classLabel"
        },
        {
            label: "Ronald Koeman",
            for: "ronald_koeman1",
            id: "ronald_koeman1",
            name: "defensa",
            value: "ronald-koeman",
            class: "classLabel"
        }
    ],
    respuestaCorrecta: "sergio1"

}, {
    titulo: '¿Quién fue el primer campeón en la Primera División?',
    respuestas: [
        {
            label: "Sevilla",
            for: "sevilla1",
            id: "sevilla1",
            name: "club",
            value: "sevilla",
            class: "classLabel"
        },
        {
            label: "Real Madrid",
            for: "real_madrid1",
            id: "real_madrid1",
            name: "club",
            value: "real-madrid",
            class: "classLabel"
        },
        {
            label: "Atlético de Madrid",
            for: "atletico_madrid1",
            id: "atletico_madrid1",
            name: "club",
            value: "atletico-madrid",
            class: "classLabel"
        },
        {
            label: "FC Barcelona",
            for: "barcelona1",
            id: "barcelona1",
            name: "club",
            value: "barcelona",
            class: "classLabel"
        },
        {
            label: "Atlético de Bilbao",
            for: "atleti1",
            id: "atleti1",
            name: "club",
            value: "atleti",
            class: "classLabel"
        }
    ],
    respuestaCorrecta: "barcelona1"

}, {
    titulo: '¿Qué equipo ha sumado más puntos a lo largo de las 89 temporadas de LaLiga?',
    respuestas: [
        {
            label: "Sevilla",
            for: "sevilla2",
            id: "sevilla2",
            name: "club",
            value: "sevilla",
            class: "classLabel"
        },
        {
            label: "Real Madrid",
            for: "real_madrid2",
            id: "real_madrid2",
            name: "club",
            value: "real-madrid",
            class: "classLabel"
        },
        {
            label: "Atlético de Madrid",
            for: "atletico_madrid2",
            id: "atletico_madrid2",
            name: "club",
            value: "atletico-madrid",
            class: "classLabel"
        },
        {
            label: "FC Barcelona",
            for: "barcelona2",
            id: "barcelona2",
            name: "club",
            value: "barcelona",
            class: "classLabel"
        },
        {
            label: "Atlético de Bilbao",
            for: "atleti2",
            id: "atleti2",
            name: "club",
            value: "atleti",
            class: "classLabel"
        }
    ],
    respuestaCorrecta: "real_madrid2"

},
{
    titulo: "¿A partir de qué temporada se implantó el VAR?",
    respuestas: [
        {
            label: "2015",
            for: "año_2015",
            id: "año_2015",
            name: "año",
            value: "año_2015",
            class: "classLabel"
        },
        {
            label: "2016",
            for: "año_2016",
            id: "año_2016",
            name: "año",
            value: "año_2016",
            class: "classLabel"
        },
        {
            label: "2017",
            for: "año_2017",
            id: "año_2017",
            name: "año",
            value: "año_2017",
            class: "classLabel"
        },
        {
            label: "2018",
            for: "año_2018",
            id: "año_2018",
            name: "año",
            value: "año_2018",
            class: "classLabel"
        },
        {
            label: "2019",
            for: "año_2019",
            id: "año_2019",
            name: "año",
            value: "año_2019",
            class: "classLabel"
        }
    ],
    respuestaCorrecta: "año_2018"
}
]

function printTitle(pregunta, divNuevo) {
    let title = document.createElement("h2");
    divNuevo.appendChild(title);
    title.classList.add("title")
    let mainQuestion = title.innerText = pregunta.titulo;
    return [title, mainQuestion];
}


function printAllAnswers(pregunta, divNuevo) {
    let arrayAnswers = pregunta.respuestas;
    let wrapp = document.createElement("div")
    wrapp.classList.add("wrapp")
    divNuevo.appendChild(wrapp);

    for (i = 0; i < arrayAnswers.length; i++) {
        let respuesta = document.createElement("label");
        wrapp.appendChild(respuesta);
        respuesta.classList.add("label")

        let answers = document.createTextNode(arrayAnswers[i].label);
        respuesta.appendChild(answers);

        let identificador = document.createAttribute(arrayAnswers[i].id);
        // console.log(identificador)
        respuesta.setAttribute("id", arrayAnswers[i].id);

        let name = document.createAttribute(arrayAnswers[i].name);
        // console.log(name);
        respuesta.setAttribute("name", arrayAnswers[i].name);

        let value = document.createAttribute(arrayAnswers[i].value);
        // console.log(value);
        respuesta.setAttribute("value", arrayAnswers[i].value);

        let form = document.createAttribute(arrayAnswers[i].for);
        // console.log(form);
        respuesta.setAttribute("for", arrayAnswers[i].for);


        let idCorrecta = arrayAnswers[i].id;

        respuesta.addEventListener("click", function () {
            respuestaCorecta(idCorrecta, pregunta.respuestaCorrecta, divNuevo)
        });

    }
}

function respuestaCorecta(seleccionada, respuesta, divNuevo) {
    if (respuesta === seleccionada) {
        document.getElementById(respuesta).classList.add("correcto");
        if (seleccionada) {
            divNuevo.remove();
            preguntaNueva(preguntas[++preguntaActual]);
            congrats(preguntas[preguntaActual]);
        }
    }
    else {
        document.getElementById(seleccionada).classList.add("incorrecto");
    }
}

function preguntaNueva(pregunta) {
    let divNuevo = document.createElement("div");
    cont.appendChild(divNuevo)
    printTitle(pregunta, divNuevo)
    printAllAnswers(pregunta, divNuevo);
}


function congrats() {
    if (preguntas.length) {
        for (let i = 4; i < preguntas.length; i++) {
            if (preguntas) {
                let nuevisimoDiv = document.createElement("p")
                nuevisimoDiv.classList.add("felicidad")
                nuevisimoDiv.innerHTML = "Has acertado la pregunta";
                cont1.appendChild(nuevisimoDiv)
                console.log([i])
            }
        }
    }
}

preguntaNueva(preguntas[preguntaActual]);

congrats(preguntas[preguntaActual]);

let botonEnvi = document.createElement("a")
botonEnvi.innerText = "Inicio"
botonEnvi.setAttribute("href", "index.html")
botonEnvi.classList.add("enlace")
document.body.appendChild(botonEnvi);



function resetear() {
    let labelCorrecto = document.querySelectorAll(".correcto")
    let labelIncorrecto = document.querySelectorAll(".incorrecto")
    console.log(labelCorrecto)
    console.log(labelIncorrecto)
    for (let i = 0; i < labelCorrecto.length; i++) {
        labelCorrecto[i].classList.remove(".correcto");
    }
    for (let i = 0; i < labelIncorrecto.length; i++) {
        labelIncorrecto[i].classList.remove("incorrecto");
    }
}

let botonCanc = document.createElement("div")
botonCanc.innerText = "Reset"
botonCanc.classList.add("boton");
document.body.appendChild(botonCanc);


botonCanc.addEventListener("click", resetear)