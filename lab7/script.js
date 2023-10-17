let primerBoton = document.getElementById("primer-boton")
let primerEvento = document.getElementById("primer-evento")

primerBoton.addEventListener("click", () => {
    primerEvento.style.color = "green"
})


let segundoBoton = document.getElementById("segundo-boton")
let segundoEventoA = document.getElementById("segundo-evento-a")
let segundoEventoB = document.getElementById("segundo-evento-b")

segundoBoton.onclick = () => {
    segundoEventoB.innerHTML += segundoEventoA.value
}


let tercerBoton = document.getElementById("tercer-boton")
let tercerEventoA = document.getElementById("tercer-evento-a")
let tercerEventoB = document.getElementById("tercer-evento-b")
let tercerEventoC = document.getElementById("tercer-evento-c")

tercerBoton.onclick = () => {
    tercerEventoC.innerHTML = tercerEventoA.value + " " + tercerEventoB.value
}

let cuartoBoton = document.getElementById("cuarto-boton")
let cuartoEvento = document.getElementById("cuarto-evento")

cuartoBoton.onclick = () => {
    cuartoEvento.remove(0)
}

let quintoBoton = document.getElementById("quinto-boton")
let quintoEvento = document.getElementById("quinto-evento")

quintoBoton.onclick = () => {
    location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
}

let sextoBoton = document.getElementById("sexto-boton")

sextoBoton.onclick = () => {
    alert(tercerEventoC.innerHTML)
}

let septimoBoton = document.getElementById("septimo-boton")

septimoBoton.onclick = () => {
    console.log(navigator.userAgent)
}

let octavoBoton = document.getElementById("octavo-boton")
let octavoEvento = document.getElementById("octavo-evento")

octavoBoton.onclick = () => {
    if (octavoEvento.checked) {
        alert("Checked")
    } else {
        alert("Not Checked")
    }
}

let novenoBoton = document.getElementById("noveno-boton")
let novenoEvento = document.getElementById("noveno-evento")

novenoBoton.onclick = () => {
    if (novenoEvento.checked) {
        alert("Checked")
    } else {
        alert("Not Checked")
    }
}

let decimoBoton = document.getElementById("decimo-boton")
let decimoEvento = document.getElementById("decimo-evento")

decimoBoton.onclick = () => {
    try {
        if (/\d/.test(decimoEvento.value)) {
            alert("No se aceptan numeros en el campo")
        } else {

        }
    } catch (error) {
        console.log("Ha ocurrido un error")
    }
}

let url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data)
    let body = ''
    for (let i = 0; i < data.length; i++) {
        body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
}