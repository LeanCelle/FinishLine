// JAVASCRIPT
/*

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

// Bienvenido

const usuario = prompt("Ingrese su nombre de usuario")
const contrasena =  prompt("Ingrese su contraseña")
const edad = prompt("Ingrese su edad")
const bienvenido = alert(`Bienvenido ${usuario}! Comienza a buscar tus productos favoritos en FinishLine.`)

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




// Constructor 

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
    {nombre: "Conjunto Adidas Essential Negro", marca: "Adidas", precio: 21299, talle: "L", prenda: "Remera"},
    {nombre: "Botines De Fútbol Adidas Predator Unisex Negro", marca: "Adidas", precio: 39999, talle: "42", prenda: "Zapatillas"},
    {nombre: "Short De Baño Puma Length Swim De Hombre", marca: "Puma", precio: 5499, talle: "S", prenda: "Pantalon"},
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

    if (descuento === "SOYLEAN" && totalEnvio <= 29999) {
        alert(`Productos: $${totalProd} \n Envio: $999 \n DESCUENTO: 20% \n TOTAL: $${totalEnvio * 0.8}`)
    } else if (descuento === "SOYLEAN" && totalEnvio > 29999) {
        alert(`Productos: $${totalProd} \n Envio: $0 \n DESCUENTO: 20% \n TOTAL: $${totalProd * 0.8}`)
    } else if (descuento != "SOYLEAN" && totalEnvio <= 29999) {
        alert(`Productos: $${totalProd} \n Envio: $999 \n TOTAL: $${totalEnvio}`)
    } else if(descuento != "SOYLEAN" && totalEnvio > 29999) {
        alert(`Productos: $${totalProd} \n Envio: $0 \n TOTAL: $${totalProd}`)
    }
}


// Carrito

let carrito = [];


let ciclo = prompt("Bienvenido al sistema de compra rápida de FinishLine! \n \n Por favor seleccione una opción: \n \n 1- Productos \n 2- Ver ofertas \n 3- Ver carrito \n 4- Finalizar compra \n 5- Ingresar al sitio")

while (ciclo !== "5") {

    if (ciclo === "1") {
        eleccion(carrito);
    }if (ciclo === "2") {
        ofertas();
    }if (ciclo === "3") {
        verCarrito();
    }if (ciclo === "4") {
        finalizarCompra()
        console.log("Procesando su pago...")
        alert("Gracias por comprar en FinishLine!")
        break
    }

    ciclo = prompt("Vuelva a ingresar una opción: \n 1- Seguir comprando \n 2- Ver ofertas \n 3- Ver carrito \n 4- Finalizar compra \n 5- Salir");
}



// Filtrar

const filtroMarca = productos.filter((p)=> p.marca === "Adidas")
console.table(filtroMarca);

const filtroTalle = productos.filter((p) => p.talle === "S" )
console.table(filtroTalle);

const filtroPrenda = productos.filter((p) => p.prenda === "Remera")
console.table(filtroPrenda);

// Map

productos.map((element, indice)=> {
    console.table(element);
})

// Find
const findMiCarrito = productos.find((p)=> p.nombre = "Camperon adidas Argentina Condivo 2022")
console.table(findMiCarrito)

// Sort 

// let numeros = [4, 6, 1, 9, 2]
/*
function ordenarProductos(a, b) {
    return a - b;
}

const filtroPrecio = productos.filter((p) => p.precio !== 1 )

filtroPrecio.sort(ordenarProductos)

console.log(filtroPrecio)*/



const adidasFilter = document.querySelector(".adidas")

adidasFilter.addEventListener("click", () => {

    const filtroMarca = productos.filter((p)=> p.marca === "Adidas")
    const filtroMarca1 = JSON.stringify(filtroMarca)
    localStorage.setItem("productos", filtroMarca1)

    console.log(filtroMarca1);
}) 

const btnCero = document.querySelector("#cero")

btnCero.addEventListener("click", () => {
    const prod0 = JSON.stringify(productos[0])
    localStorage.setItem("productos", prod0)

    carrito.push(prod0)


    console.log(prod0);
}) 


const btnOne = document.querySelector("#one")

btnOne.addEventListener("click", () => {
    const prod1 = JSON.stringify(productos[1])
    localStorage.setItem("productos", prod1)


    carrito.push(prod1)

    console.log(prod1);
}) 


const btnTwo = document.querySelector("#two")

btnTwo.addEventListener("click", () => {
    const prod2 = JSON.stringify(productos[2])
    localStorage.setItem("productos", prod2)

    carrito.push(prod2)


    console.log(prod2);
}) 

const btnThree = document.querySelector("#three")

btnThree.addEventListener("click", () => {
    const prod3 = JSON.stringify(productos[3])
    localStorage.setItem("productos", prod3)

    carrito.push(prod3)

    console.log(prod3);
}) 

console.log(carrito);



for (producto of productos) {

    // SECTION

const section = document.querySelector("#productos")
section.style.display = "flex"
section.style.flexDirection = "column"
section.style.justifyContent = "center"
section.style.gap = "10rem"
section.style.width = "100%"
section.style.marginBottom = "15rem"




// DIV-1

let divIdOne = document.createElement("div")
divIdOne.id = "divIdOne"
divIdOne.style.display = "flex"
divIdOne.style.flexDirection = "row"
divIdOne.style.flexWrap = "wrap"
divIdOne.style.justifyContent = "center"
divIdOne.style.gap = "5rem"
divIdOne.style.width = "100%"

// 1
const divProdOne = document.createElement("div")
divProdOne.id = "divProdOne"
divProdOne.style.width = "30rem"
divProdOne.style.display = "flex"
divProdOne.style.flexDirection = "column"
divProdOne.style.padding = "1rem"
divProdOne.style.boxShadow = "0rem 0rem 0.5rem 0.5rem rgba(0, 0, 0, 0.097)"
divProdOne.style.justifyContent = "center"

const imgOne = document.createElement("img")
imgOne.id = "imgIdOne"
imgOne.src = "../img/camperon-argentina-adidas.jpg"
imgOne.style.width = "100%"

const h3One = document.createElement("h3")
let one = productos[0]
h3One.textContent = one.nombre
h3One.style.padding = "1rem 0rem 0rem 0rem"
h3One.style.fontSize = "1.8rem"

const h4One = document.createElement("h4")
h4One.textContent = "$83.599" 
h4One.style.padding = "2rem 0rem 0rem 0rem"
h4One.style.fontSize = "1.2rem"

const btn1 = document.createElement("button")
btn1.id = "btnId1"
btn1.textContent = "Agregar al carrito"
btn1.style.backgroundColor = "black"
btn1.style.color = "white"
btn1.style.borderColor = "white"
btn1.style.margin = "1rem 6rem"
btn1.style.padding = "1rem"
btn1.style.fontSize = "1.5rem"
btn1.style.display = "flex"
btn1.style.justifyContent = "center"
btn1.style.alignItems = "center"


// 2
const divProdTwo = document.createElement("div")
divProdTwo.id = "divProdTwo"
divProdTwo.style.width = "30rem"
divProdTwo.style.display = "flex"
divProdTwo.style.flexDirection = "column"
divProdTwo.style.padding = "1rem"
divProdTwo.style.boxShadow = "0rem 0rem 0.5rem 0.5rem rgba(0, 0, 0, 0.097)"
divProdTwo.style.justifyContent = "center"

const imgTwo = document.createElement("img")
imgTwo.id = "imgIdTwo"
imgTwo.src = "../img/camiseta-argentina.jpg"
imgTwo.style.width = "100%"

const h3Two = document.createElement("h3")
let two = productos[1]
h3Two.textContent = two.nombre 
h3Two.style.padding = "1rem 0rem 0rem 0rem"
h3Two.style.fontSize = "1.8rem"

const h4Two = document.createElement("h4")
h4Two.textContent = "$24.490"
h4Two.style.padding = "2rem 0rem 0rem 0rem"
h4Two.style.fontSize = "1.2rem"

const btn2 = document.createElement("button")
btn2.id = "btnId2"
btn2.textContent = "Agregar al carrito"
btn2.style.backgroundColor = "black"
btn2.style.color = "white"
btn2.style.borderColor = "white"
btn2.style.margin = "1rem 6rem"
btn2.style.padding = "1rem"
btn2.style.fontSize = "1.5rem"
btn2.style.display = "flex"
btn2.style.justifyContent = "center"
btn2.style.alignItems = "center"

// DIV-2

let divIdTwo = document.createElement("div")
divIdTwo.id = "divIdTwo"
divIdTwo.style.display = "flex"
divIdOne.style.flexDirection = "row"
divIdOne.style.flexWrap = "wrap"
divIdTwo.style.justifyContent = "center"
divIdTwo.style.gap = "5rem"
divIdTwo.style.width = "100%"

// 3
const divProdThree = document.createElement("div")
divProdThree.id = "divProdThree"
divProdThree.style.width = "30rem"
divProdThree.style.display = "flex"
divProdThree.style.flexDirection = "column"
divProdThree.style.padding = "1rem"
divProdThree.style.boxShadow = "0rem 0rem 0.5rem 0.5rem rgba(0, 0, 0, 0.097)"
divProdThree.style.justifyContent = "center"

const imgThree = document.createElement("img")
imgThree.id = "imgIdThree"
imgThree.src = "../img/campera-adidas.jpg"
imgThree.style.width = "100%"

const h3Three = document.createElement("h3")
let three = productos[2]
h3Three.textContent = three.nombre 
h3Three.style.padding = "1rem 0rem 0rem 0rem"
h3Three.style.fontSize = "1.8rem"

const h4Three = document.createElement("h4")
h4Three.textContent = "$21.299"
h4Three.style.padding = "2rem 0rem 0rem 0rem"
h4Three.style.fontSize = "1.2rem"

const btn3 = document.createElement("button")
btn3.id = "btnId3"
btn3.textContent = "Agregar al carrito"
btn3.style.backgroundColor = "black"
btn3.style.color = "white"
btn3.style.borderColor = "white"
btn3.style.margin = "1rem 6rem"
btn3.style.padding = "1rem"
btn3.style.fontSize = "1.5rem"
btn3.style.display = "flex"
btn3.style.justifyContent = "center"
btn3.style.alignItems = "center"

// 4
const divProdFour = document.createElement("div")
divProdFour.id = "divProdFour"
divProdFour.style.width = "30rem"
divProdFour.style.display = "flex"
divProdFour.style.flexDirection = "column"
divProdFour.style.padding = "1rem"
divProdFour.style.boxShadow = "0rem 0rem 0.5rem 0.5rem rgba(0, 0, 0, 0.097)"
divProdFour.style.justifyContent = "center"

const imgFour = document.createElement("img")
imgFour.id = "imgIdFour"
imgFour.src = "../img/botines-violeta.jpg"
imgFour.style.width = "100%"

const h3Four = document.createElement("h3")
let four = productos[3]
h3Four.textContent = four.nombre 
h3Four.style.padding = "1rem 0rem 0rem 0rem"
h3Four.style.fontSize = "1.8rem"


const h4Four = document.createElement("h4")
h4Four.textContent = "$39.999" 
h4Four.style.padding = "2rem 0rem 0rem 0rem"
h4Four.style.fontSize = "1.2rem"

const btn4 = document.createElement("button")
btn4.id = "btnId4"
btn4.textContent = "Agregar al carrito"
btn4.style.backgroundColor = "black"
btn4.style.color = "white"
btn4.style.borderColor = "white"
btn4.style.margin = "1rem 6rem"
btn4.style.padding = "1rem"
btn4.style.fontSize = "1.5rem"
btn4.style.display = "flex"
btn4.style.justifyContent = "center"
btn4.style.alignItems = "center"


// DECLARO 

section.appendChild(divIdOne)
section.appendChild(divIdTwo)


divIdOne.appendChild(divProdOne)
divProdOne.appendChild(imgOne)
divProdOne.appendChild(h3One)
divProdOne.appendChild(h4One)
divProdOne.appendChild(btn1)


divIdOne.appendChild(divProdTwo)
divProdTwo.appendChild(imgTwo)
divProdTwo.appendChild(h3Two)
divProdTwo.appendChild(h4Two)
divProdTwo.appendChild(btn2)

divIdTwo.appendChild(divProdThree)
divProdThree.appendChild(imgThree)
divProdThree.appendChild(h3Three)
divProdThree.appendChild(h4Three)
divProdThree.appendChild(btn3)

divIdTwo.appendChild(divProdFour)
divProdFour.appendChild(imgFour)
divProdFour.appendChild(h3Four)
divProdFour.appendChild(h4Four)
divProdFour.appendChild(btn4)


document.body(section)
}