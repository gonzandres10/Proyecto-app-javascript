let cont = document.createElement("div")

document.body.appendChild(cont)

let intro = document.createElement("h1");
intro.innerText = " Cuestionario de la historia de LaLiga"
cont.appendChild(intro);

let enlace = document.createElement("A")
enlace.classList.add("enlace")
enlace.innerText = "Take quiz";
enlace.setAttribute("href", "quiz.html")
cont.appendChild(enlace)


