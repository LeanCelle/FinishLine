// JAVASCRIPT

let usuario = prompt("Ingrese su nombre de usuario")
let contrasena =  prompt("Ingrese su contraseña")
let edad = prompt("Ingrese su edad")
let bienvenido = `Bienvenido ${usuario}! Comienza a buscar tus productos favoritos en FinishLine.`

function registrarse() {
    if (usuario === "leancelle" && contrasena === "12345" && edad >= 18) {
        console.log("Acceso concedido")
    }else if (usuario === "leancelle" && contrasena === "12345" && edad < 18){
        console.log("Acceso denegado (no cumple con la edad mínima)")
    }else {
        console.log("Acceso denegado")
    }
}

registrarse()

let remeraAdidas = 8500
let zapatillasNike = 25000
let botinesPuma = 22000

function productos() {
    let eleccion = prompt("Seleccione el producto que desea comprar: \n 1-Remera Adidas \n 2-Zapatillas Nike \n 3- Botines Puma \n 4- Todos los productos")

    if (eleccion === "1") {
        alert(`Agregaste correctamente: Remera Adidas por $${remeraAdidas}`)
    }else if (eleccion === "2"){
        alert(`Agregaste correctamente: Zapatillas Nike por $${zapatillasNike}`)
    }else if (eleccion === "3"){
        alert(`Agregaste correctamente: Botines Puma por $${botinesPuma}`)
    }else if (eleccion === "4"){
        alert(`Agregaste correctamente todos los productos por $${remeraAdidas + zapatillasNike + botinesPuma}`)
    }else {
        console.log(`No seleccionó ningun producto`)
    }
}

productos()


for (finalizarCompra = "no"; finalizarCompra = "si"; finalizarCompra++) {
    let finalizarCompra = prompt("Desea finalizar su compra? \n SI - NO")

    if (finalizarCompra === "no") {
        productos()
    }else if (finalizarCompra === "si") {
        break
    }else {
        break
    }
}

alert(`${bienvenido}`)

/*

function RemeraAdidas(nombre, precio, stock) {
    this.nombre = "Remera Adidas"
    this.precio = "$8.500"
    this.stock = "(8 unidades disponibles)"
    this.alertRemeraAdidas = function(){
        return alert(`Agregaste correctamente: ${this.nombre} por ${this.precio}. ${this.stock} `)
    } 
}

RemeraAdidas()
const nike = new RemeraAdidas(nombre = "Zapatillas Nike", precio = "25.000", stock = "(5 unidades disponibles")
const puma = new RemeraAdidas(nombre = "Botines Puma", precio = "22.000", stock = "(10 unidades disponibles")
alertRemeraAdidas()

*/





