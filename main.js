/*
let usuario= prompt(`Ingrese su nombre de usuario`)
let contrasena= prompt(`Ingrese su contraseña`)
let edad= prompt(`Ingrese su edad`)
let bienvenido= alert(`Bienvenido` + " " + usuario + "!")

if (usuario === "leancelle" && contrasena === "12345" && edad >= 18) {
    alert(`Acceso permitido`)
}else if (usuario ==="leancelle" && contrasena === "12345" && edad <= 18){
    alert(`Acceso denegado (no cumple con la edad mínima)`)
}else {
    alert(`Acceso denegado`)
}*/

/*
let productos= prompt(`
1- Remera Adidas
2- Ojotas Kappa
3- Camperon de Independiente
4- Camiseta de San Lorenzo
5- Zapatillas Adidas rojas`)

switch (productos) {
    case "1":
        console.log(`Remera Adidas`)
        break;
    case "2":
        console.log(`Ojotas Kappa`)
        break
    case "3":
        console.log(`Camperon de Independiente`)
        break
    case "4":
        console.log(`Camiseta de San Lorenzo`)
        break
    case "5":
        console.log(`Zapatillas Adidas rojas`)
        break
    default:
        console.log(`No se ha encontrado producto para su búsqueda`)
        break;
}*/
/*
for (let precio = 100; precio <= 200; precio++){
    if(precio > 150) {
        break
    }
    console.log(`Precio ${precio}`)
}*/


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
        alert(`Seleccionanste remera Adidas $${remeraAdidas}`)
    }else if (eleccion === "2"){
        alert(`Seleccionaste zapatillas Nike $${zapatillasNike}`)
    }else if (eleccion === "3"){
        alert(`Seleccionaste botines Puma por un precio de $${botinesPuma}`)
    }else if (eleccion === "4"){
        alert(`Seleccionaste todos los productos por un precio de $${remeraAdidas + zapatillasNike + botinesPuma}`)
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





