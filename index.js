// console.log("Funciona JS")

// let numero = prompt()

// let par = numero % 2

// console.log(par)

// function esPar (numero){
//     let par = numero % 2
//     // if (par === 0) {
//      console.log(par)
//     // }
//     // else {
//     //     console.log("el numero es impar")
//     // }
// }

// esPar(46545)
// esPar(546456548)
// esPar(654645643)
// esPar(8)
// esPar(174171717)


// gritar(str)
// Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo

// gritar('hola') // ¡hola!
// gritar('aaaaaa') // ¡aaaaaa!



// ------------------------------
// toUpperCase() -->convierte a mayuscula
// toLowerCase() -->convierte a minuscula
// charAt(0) --> quedarnos con una letra
// slice() --> corta el string desde donde yo le indico

//version larga para que eMiLIaNo se convierta en Emiliano
// function mejorarNombre (string) {
//     let primeraLetra = string.charAt(0)
//     let mayuscula = primeraLetra.toUpperCase()
//     let cortarString = string.slice(1)
//     let minuscula = cortarString.toLowerCase()
//     let unir = mayuscula + minuscula

//     console.log(unir)
// }


// //version corta para que eMiLIaNo se convierta en Emiliano
// function mejorarNombreCorta (string) {
//     let primeraLetra = string.charAt(0).toUpperCase()
//     let cortarString = string.slice(1).toLowerCase()
//     let unir = primeraLetra + cortarString
//     console.log(unir)
// }


// mejorarNombre("eMiLIaNo")
// mejorarNombreCorta("eMiLIaNo")




//¿como contamos las posiciones en Javascript? EMPEZAMOS A CONTAR DESDE CERO

//0 1 2 3 4 5 6 7
//E M I L I A N O

//.length --> me indica la longitud que tiene el string
// let nombreLength = "EmilianoarfjsadfjZ"
// let edadEmiliano = 30
// let largo = nombreLength.length 
// console.log(nombreLength.charAt(nombreLength.length -1))



//Ejercicio: realizar una funcion que reciba un string y muestre en consola(console.log) la ultima letra en mayuscula


// respuesta:

// function ultimaLetra (string){
//     let uLetraMayuscula = string.charAt(string.length - 1).toUpperCase()
//     console.log(uLetraMayuscula)
// }

// ultimaLetra("sdkfsdjfsdl")

//////////////////////////////////////////////////////

const body = document.querySelector("body")
const imagenUno = document.querySelector("#uno")
const imagenDos = document.querySelector("#dos")
const imagenTres = document.querySelector("#tres")
const btn = document.querySelector("button")
const modal = document.querySelector(".modal")
const divModal = document.querySelector(".div-modal")

function cambioDeColor (){
    body.style.backgroundColor = "yellow"
    imagenDos.style.display = "none"
}

function agregarImagen (){
    imagenDos.style.display = "block"
    imagenUno.style.border = "solid red 5px"
}

function cerrarModal(){
    modal.style.display ="none"
    divModal.style.display = "none"
}


imagenUno.onclick = cambioDeColor
imagenTres.onclick = agregarImagen
btn.ondblclick = cerrarModal


// TAREA 
//agregar un h1 que diga tu nombre 
// un boton que diga cambio de color nombre y que al hacer DOBLE clik cambie el color del h1
// un boton que cambie el color de fondo del body al hacer CLICK
// un modal que no te deje interactuar con la pagina hasta que lo cierres