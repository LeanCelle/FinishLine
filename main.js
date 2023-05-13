// JAVASCRIPT

const usuario = prompt("Ingrese su nombre de usuario")
const contrasena =  prompt("Ingrese su contraseña")
const edad = prompt("Ingrese su edad")
const bienvenido = `Bienvenido ${usuario}! Comienza a buscar tus productos favoritos en FinishLine.`

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

const remeraAdidas = 8500
const zapatillasNike = 25000
const botinesPuma = 22000


function productos() {
    const eleccion = prompt("Seleccione el producto que desea comprar: \n 1-Remera Adidas \n 2-Zapatillas Nike \n 3- Botines Puma \n 4- Todos los productos")
    if (eleccion === 8500 || eleccion === "Remera Adidas" || eleccion === "1") {
        alert(`Agregaste correctamente: Remera Adidas por $${remeraAdidas}`)
    }else if (eleccion === 25000 || eleccion === "Zapatillas Nike" || eleccion === "2"){
        alert(`Agregaste correctamente: Zapatillas Nike por $${zapatillasNike}`)
    }else if (eleccion === 22000|| eleccion === "Botines Puma" || eleccion === "3"){
        alert(`Agregaste correctamente: Botines Puma por $${botinesPuma}`)
    }else if (eleccion=== "Todos los productos" || eleccion === "4"){
        alert(`Agregaste correctamente todos los productos por $${remeraAdidas + zapatillasNike + botinesPuma}`)
    }else {
        console.log(`No seleccionó ningun producto`)
    }
}

function finalCompra() {
    for (let finalizarCompra = "no"; finalizarCompra = "si"; finalizarCompra++) {
        let finalizarCompra = prompt("Desea finalizar su compra? \n SI - NO")
        if (finalizarCompra === "no" || finalizarCompra === "No" || finalizarCompra === "NO") {
            productos()
        }else if (finalizarCompra === "si" || finalizarCompra === "Si" || finalizarCompra === "SI") {
            break
        }else {
            break
        }
    }
}

productos()
finalCompra()


alert(bienvenido)


const adidas = [
    producto0 = "Camperon adidas Argentina Condivo 2022",
    producto1 = "Camiseta Argentina Campeones Titular",
    producto2 = "Conjunto Adidas Essential Negro",
    producto3 = "Botines De Fútbol Adidas Predator Unisex Negro",
]

console.log(adidas[0])
console.log(adidas[1])
console.log(adidas[2])
console.log(adidas[3])
adidas.push("Campera Adidas Tiro Pride")
console.log(adidas[4])


function InfoProductos (nombre, precio, stock, marca) {
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.marcas = marca
    this.alertInfoProductos = function(){
        return `Agregaste correctamente: ${this.nombre} ${marca} por $${this.precio}. ${this.stock} `
    } 
}




const nike = new InfoProductos("Zapatillas", 25000, "(5 unidades disponibles).", "Nike")
console.log(nike)
console.log(nike.alertInfoProductos())

const puma = new InfoProductos("Botines", 22000, "(10 unidades disponibles).", "Puma")
console.log(puma)
console.log(puma.alertInfoProductos())





