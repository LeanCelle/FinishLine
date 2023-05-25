// JAVASCRIPT
/*
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
    }else if (eleccion === "Todos los productos" || eleccion === "4"){
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

*/

class constructorProd {
    constructor(nombre, marca, precio) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }
}
 
// Productos

let productos = [
    {nombre: "Camperon adidas Argentina Condivo 2022", marca: "Adidas", precio: 45000, talle: "M", prenda: "Campera"},
    {nombre: "Camiseta Argentina Campeones Titular", marca: "Adidas", precio: 24490, talle: "S", prenda: "Remera"},
    {nombre: "Short De Baño Puma Length Swim De Hombre", marca: "Puma", precio: 5499, talle: "S", prenda: "Pantalon"},
    {nombre: "Remera Running Nike Dri-Fit Miler Hombre", marca: "Nike", precio: 14499, talle: "L", prenda: "Remera"},
    {nombre: "Zapatillas Under Armour Hovr Sonic 5", marca: "Under Armour", precio: 49999, talle: "42", prenda: "Zapatillas"},
]

// Elección

function eleccion() {
    let nombre = prompt("Ingrese el nombre del producto");
    let marca = prompt("Ingrese la marca del producto");
    let precio = parseInt(prompt("Ingrese el precio del producto"));
    const newEleccion = new constructorProd(nombre, marca, precio);
    carrito.push(newEleccion);
    alert("Producto añadido al carrito");
}


// Ver carrito

function verCarrito() {
    carrito.map((p) => {
        alert(
            `Has seleccionado ${p.nombre} ${p.marca} a $${p.precio}`
        );
    });
}

// Oferta

function ofertas() {
    const ofertas = productos.filter((p)=> p.precio >= 5499 && p.precio <= 14499 )
    for (const oferta of ofertas) {
        alert(`La oferta del dia es: ${oferta.nombre} ${oferta.marca} a $${oferta.precio}`)
    }
}

// Finalizar compra

function finalizarCompra() {
    let descuento = prompt("Ingrese su código de descuento")

    const totalProd = carrito.reduce((acc, el) => acc + el.precio, 0);
    const totalEnvio = carrito.reduce((acc, el) => acc + el.precio, 999);
    const totalDescuentoProd = carrito.reduce((acc, el) => (acc + el.precio) * 0.8, 0)
    const totalDescuentoEnvio = carrito.reduce((acc, el) => (acc + el.precio) * 0.8, 999)

    if (descuento === "SOYLEAN" && totalEnvio <= 29999) {
        alert(`Productos: $${totalProd} \n Envio: $999 \n TOTAL: ${totalDescuentoEnvio}`)
    } else if (descuento === "SOYLEAN" && totalEnvio > 29999) {
        alert(`Productos: $${totalProd} \n Envio: $0 \n TOTAL: ${totalDescuentoProd}`)
    } else if (descuento != "SOYLEAN" && totalEnvio <= 29999) {
        alert(`Productos: $${totalProd} \n Envio: $999 \n TOTAL: ${totalEnvio}`)
    } else if(descuento != "SOYLEAN" && totalEnvio > 29999) {
        alert(`Productos: $${totalProd} \n Envio: $0 \n TOTAL: ${totalProd}`)
    }
}


let carrito = [];


let ciclo = prompt("Seleccione una opción: \n 1- Productos \n 2- Ver ofertas \n 3- Ver carrito \n 4- Finalizar compra \n 5- Salir")

while (ciclo !== "5") {
    if (ciclo === "1") {
        eleccion(carrito);
    }if (ciclo === "2") {
        ofertas();
    }if (ciclo === "3") {
        verCarrito();
    }if (ciclo === "4") {
        finalizarCompra()
        break
    }
    ciclo = prompt("Vuelva a ingresar una opción: \n 1- Seguir comprando \n 2- Ver ofertas \n 3- Ver carrito \n 4- Finalizar compra \n 5- Salir");
}



// Filtrar

const filtroMarca = productos.filter((p)=> p.marca === "Adidas")
console.log(filtroMarca);

const filtroTalle = productos.filter((p) => p.talle === "S" )
console.log(filtroTalle);

const filtroPrenda = productos.filter((p) => p.prenda === "Remera")
console.log(filtroPrenda);

// Map

productos.map((element, indice)=> {
    console.log(element);
})

// Find
const findMiCarrito = productos.find((p)=> p.nombre = "Camperon adidas Argentina Condivo 2022")
console.log(findMiCarrito)




