// Productos
let productos = [
    {id: 1, nombre: "Camperon adidas Argentina Condivo 2022", marca: "Adidas", precio: 45000, talle: "M", prenda: "Campera", imagen: "../img/camperon-argentina-adidas.jpg"},
    {id: 2, nombre: "Camiseta Argentina Campeones Titular", marca: "Adidas", precio: 24490, talle: "S", prenda: "Remera", imagen: "../img/camiseta-argentina.jpg"},
    {id: 3, nombre: "Conjunto Adidas Essential Negro", marca: "Adidas", precio: 21299, talle: "L", prenda: "Remera", imagen: "../img/campera-adidas.jpg"}, 
    {id: 4, nombre: "Botines De Fútbol Adidas Predator Unisex Negro", marca: "Adidas", precio: 39999, talle: "42", prenda: "Zapatillas", imagen: "../img/botines-violeta.jpg"},
    {id: 5, nombre: "Short De Baño Puma Length Swim De Hombre", marca: "Puma", precio: 5499, talle: "S", prenda: "Pantalon", imagen: "../img/short-puma-negro.webp"},
    {id: 6, nombre: "Campera Adidas Tiro Pride", marca: "Adidas", precio: 27999, talle: "M", prenda: "Campera", imagen: "../img/campera-adidas-mangas.jpg"},
    {id: 7, nombre: "Campera adidas Varilite", marca: "Adidas", precio: 60099, talle: "L", prenda: "Campera", imagen: "../img/campera-adidas-facha.jpg"},
    {id: 8, nombre: "Campera adidas Marathon", marca: "Adidas", precio: 39999, talle: "L", prenda: "Campera", imagen: "../img/campera-adidas-camuflada-negra.jpg"},
    {id: 9, nombre: "Remera Nike Sportswear", marca: "Nike", precio: 7999, talle: "S", prenda: "Remera", imagen: "../img/remera-nike-pipa-roja.jpg"},
    {id: 10, nombre: "Remera Running Nike Dri-Fit Miler Hombre", marca: "Nike", precio: 14499, talle: "S", prenda: "Remera", imagen: "../img/remera-nike-blanca.jpg"},
    {id: 11, nombre: "Remera Canterbury Ccc Logo", marca: "Canterbury", precio: 6999, talle: "S", prenda: "Remera", imagen: "../img/remera-canterbury.jpg"},
    {id: 12, nombre: "Remera Under Armour Challenger Top", marca: "Under Armour", precio: 12499, talle: "M", prenda: "Remera", imagen: "../img/remera-under-negra.jpg"},
    {id: 13, nombre: "Zapatillas Urbanas adidas Breaknet", marca: "Adidas", precio: 25999, talle: "41", prenda: "Zapatillas", imagen: "../img/zapatillas-adidas-urbana.jpg"},
    {id: 14, nombre: "Zapatillas Running Nike Air Zoom Vomero 16", marca: "Nike", precio: 35499, talle: "43", prenda: "Zapatillas", imagen: "../img/zapatillas-nike-blancas.jpg"},
    {id: 15, nombre: "Zapatillas Under Armour Hovr Sonic 5", marca: "Under Armour", precio: 49999, talle: "43", prenda: "Zapatillas", imagen: "../img/zapatillas-under-fluo.jpg"},
    {id: 16, nombre: "Zapatillas adidas Response Super 3.0", marca: "Adidas", precio: 41999, talle: "41", prenda: "Zapatillas", imagen: "../img/zapatillas-adidas-rojas.jpg"},


]

// Carrito
let carritoCompras = []

// Creo cards
function crearTarjeta(producto, indice) {
    const card = document.createElement("div");
    card.classList.add("card", "col-sm-12", "col-lg-3");
    card.innerHTML = `
      <img src="${producto.imagen}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">$${producto.precio}</p>
        <a href="#cart" class="btn btn-danger" onClick="agregarAlCarrito(${indice})">Agregar al carrito</a>
      </div>
    `;
    return card;
}

// Filtro

function adidasFiltro() {
    const contenedor = document.getElementById("container");
    contenedor.innerHTML = "";
  
    const filtroMarca = productos.filter((p) => p.marca === "Adidas");
    filtroMarca.forEach((producto, indice) => {
      const card = crearTarjeta(producto, indice);
      contenedor.appendChild(card);
    });
}
  
function nikeFiltro() {
    const contenedor = document.getElementById("container");
    contenedor.innerHTML = "";
  
    const filtroMarca = productos.filter((p) => p.marca === "Nike");
    filtroMarca.forEach((producto, indice) => {
      const card = crearTarjeta(producto, indice);
      contenedor.appendChild(card);
    });
}
  
// Agrega eventos de clic a los elementos <h5> de los filtros
const filtroNike = document.getElementById("filtro-nike");
const filtroAdidas = document.getElementById("filtro-adidas");
  
filtroNike.addEventListener("click", nikeFiltro);
filtroAdidas.addEventListener("click", adidasFiltro);

// Elimino filtros
function mostrarTodos() {
    const contenedor = document.getElementById("container");
    contenedor.innerHTML = "";
    
    productos.forEach((producto, indice) => {
      const card = crearTarjeta(producto, indice);
      contenedor.appendChild(card);
    });
}
  
// Agrega evento de clic al elemento <h5> del botón de eliminar filtros
const eliminarFiltros = document.getElementById("eliminar-filtros");
eliminarFiltros.addEventListener("click", mostrarTodos);
  
  


// Contenedor
  
const contenedor = document.getElementById("container");
contenedor.style.display = "flex";
contenedor.style.flexWrap = "wrap";
contenedor.style.gap = "2rem";
contenedor.style.justifyContent = "center";
  
productos.forEach((producto, indice) => {
    const card = crearTarjeta(producto, indice);
    contenedor.appendChild(card);
});


// Precio TOTAL de la compra
function actualizarTotal() {
    const totalCompra = carritoCompras.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    const precioTotal = document.querySelector("#totalCompra");
    precioTotal.textContent = `TOTAL: $${totalCompra}`;
}
  
function agregarAlCarrito(indice) {
    const producto = productos[indice];
  
    // Verificar si el producto ya está en el carrito
    const productoExistente = carritoCompras.find((item) => item.id === producto.id);
  
    if (productoExistente) {
      // Si el producto ya está en el carrito, incrementar el contador
      productoExistente.cantidad++;
    } else {
      // Si el producto no está en el carrito, agregarlo con un contador inicial de 1
      producto.cantidad = 1;
      carritoCompras.push(producto);
    }
  
    // Guardar carrito en el local storage
    guardarCarritoEnLocalStorage();
  
    // Actualizar la vista del carrito
    actualizarCarritoEnPantalla();
}

function guardarCarritoEnLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(carritoCompras));
}
  
  

window.addEventListener("load", () => {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
      carritoCompras = JSON.parse(carritoGuardado);
      actualizarCarritoEnPantalla();
    }
});
  

function actualizarCarritoEnPantalla() {
    const carrito = document.getElementById("cart");
    carrito.innerHTML = "";
  
    carritoCompras.forEach((producto, index) => {
      const item = document.createElement("div");
      item.innerHTML = `
        <img src="${producto.imagen}" class="" alt="..."> - ${producto.nombre} - $${producto.precio} (Cantidad: ${producto.cantidad})
        <button class="btn btn-outline-danger btn-sm" onClick="eliminarDelCarrito(${index})">Eliminar</button>
      `;
      carrito.appendChild(item);
    });
  
    actualizarTotal();
}

  
  
function eliminarDelCarrito(indice) {
    const producto = carritoCompras[indice];
  
    if (producto.cantidad > 1) {
      // Si hay más de un producto, decrementar el contador
      producto.cantidad--;
    } else {
      // Si solo hay un producto, eliminarlo del carrito
      carritoCompras.splice(indice, 1);
    }
  
    // Guardar carrito en el local storage
    guardarCarritoEnLocalStorage();
  
    // Actualizar la vista del carrito
    actualizarCarritoEnPantalla();
}
  
  






  
  
  
  



//


// CARRITO

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


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


/*const adidasFilter = document.querySelector(".adidas")

adidasFilter.addEventListener("click", () => {

    const filtroMarca = productos.filter((p)=> p.marca === "Adidas")
    const filtroMarca1 = JSON.stringify(filtroMarca)
    localStorage.setItem("productos", filtroMarca1)

    console.log(filtroMarca1);
})*/ 




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

// 5
const divProdFive = document.createElement("div")
divProdFive.id = "divProdFive"
divProdFive.style.width = "30rem"
divProdFive.style.display = "flex"
divProdFive.style.flexDirection = "column"
divProdFive.style.padding = "1rem"
divProdFive.style.boxShadow = "0rem 0rem 0.5rem 0.5rem rgba(0, 0, 0, 0.097)"
divProdFive.style.justifyContent = "center"

const imgFive = document.createElement("img")
imgFive.id = "imgIdFive"
imgFive.src = "../img/short-puma-negro.webp"
imgFive.style.width = "100%"

const h3Five = document.createElement("h3")
let five = productos[4]
h3Five.textContent = five.nombre 
h3Five.style.padding = "1rem 0rem 0rem 0rem"
h3Five.style.fontSize = "1.8rem"


const h4Five = document.createElement("h4")
h4Five.textContent = "$5.499" 
h4Five.style.padding = "2rem 0rem 0rem 0rem"
h4Five.style.fontSize = "1.2rem"

const btn5 = document.createElement("button")
btn5.id = "btnId5"
btn5.textContent = "Agregar al carrito"
btn5.style.backgroundColor = "black"
btn5.style.color = "white"
btn5.style.borderColor = "white"
btn5.style.margin = "1rem 6rem"
btn5.style.padding = "1rem"
btn5.style.fontSize = "1.5rem"
btn5.style.display = "flex"
btn5.style.justifyContent = "center"
btn5.style.alignItems = "center"

// 6
const divProdSix = document.createElement("div")
divProdSix.id = "divProdSix"
divProdSix.style.width = "30rem"
divProdSix.style.display = "flex"
divProdSix.style.flexDirection = "column"
divProdSix.style.padding = "1rem"
divProdSix.style.boxShadow = "0rem 0rem 0.5rem 0.5rem rgba(0, 0, 0, 0.097)"
divProdSix.style.justifyContent = "center"

const imgSix = document.createElement("img")
imgSix.id = "imgIdSix"
imgSix.src = "../img/campera-adidas-mangas.jpg"
imgSix.style.width = "100%"

const h3Six = document.createElement("h3")
let six = productos[5]
h3Six.textContent = six.nombre 
h3Six.style.padding = "1rem 0rem 0rem 0rem"
h3Six.style.fontSize = "1.8rem"


const h4Six = document.createElement("h4")
h4Six.textContent = "$27.999" 
h4Six.style.padding = "2rem 0rem 0rem 0rem"
h4Six.style.fontSize = "1.2rem"

const btn6 = document.createElement("button")
btn6.id = "btnId6"
btn6.textContent = "Agregar al carrito"
btn6.style.backgroundColor = "black"
btn6.style.color = "white"
btn6.style.borderColor = "white"
btn6.style.margin = "1rem 6rem"
btn6.style.padding = "1rem"
btn6.style.fontSize = "1.5rem"
btn6.style.display = "flex"
btn6.style.justifyContent = "center"
btn6.style.alignItems = "center"


// DECLARO 

section.appendChild(divIdOne)


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

divIdOne.appendChild(divProdThree)
divProdThree.appendChild(imgThree)
divProdThree.appendChild(h3Three)
divProdThree.appendChild(h4Three)
divProdThree.appendChild(btn3)

divIdOne.appendChild(divProdFour)
divProdFour.appendChild(imgFour)
divProdFour.appendChild(h3Four)
divProdFour.appendChild(h4Four)
divProdFour.appendChild(btn4)

divIdOne.appendChild(divProdFive)
divProdFive.appendChild(imgFive)
divProdFive.appendChild(h3Five)
divProdFive.appendChild(h4Five)
divProdFive.appendChild(btn5)

divIdOne.appendChild(divProdSix)
divProdSix.appendChild(imgSix)
divProdSix.appendChild(h3Six)
divProdSix.appendChild(h4Six)
divProdSix.appendChild(btn6)


// EVENTOS BUTTON

const button0 = document.querySelector("#btnId1")

button0.addEventListener("click", () => {
    carrito.push(productos[0])
    localStorage.setItem("carrito", JSON.stringify(carrito))
    console.log(carrito);
    alert("Has agregado correctamente tu producto al carrito")
})


const button1 = document.querySelector("#btnId2")

button1.addEventListener("click", () => {
    carrito.push(productos[1])
    localStorage.setItem("carrito", JSON.stringify(carrito))
    console.log(carrito);
    alert("Has agregado correctamente tu producto al carrito")
})

const button2 = document.querySelector("#btnId3")

button2.addEventListener("click", () => {
    carrito.push(productos[2])
    localStorage.setItem("carrito", JSON.stringify(carrito))
    console.log(carrito);
    alert("Has agregado correctamente tu producto al carrito")
})

const button3 = document.querySelector("#btnId4")

button3.addEventListener("click", () => {
    carrito.push(productos[3])
    localStorage.setItem("carrito", JSON.stringify(carrito))
    console.log(carrito);
    alert("Has agregado correctamente tu producto al carrito")
})



// RECUPERO CARRITO


const totalEnvio = carrito.reduce((acc, el) => acc + el.precio, 999);
        
carrito.forEach(element => {
    let carrito1 = document.querySelector("#carrito")
    let divCarrito = document.createElement("div")
        divCarrito.className = "carritoAgregado"
        divCarrito.style.display = "flex"
        divCarrito.style.justifyContent = "center"
        divCarrito.style.fontSize = "2rem"
        divCarrito.textContent = "Nombre: " + element.nombre + " Precio: " + element.precio
        
    let total = document.querySelector("#total")
    let h5Total = document.createElement("h5")
        h5Total.className = "totalCompra"
        h5Total.textContent = "Total: " + totalCompra
        
    total.appendChild(h5Total)
            
    carrito1.appendChild(divCarrito)

});

    // FILTER

    const adidas = document.querySelector("#filter")
    adidas.style.display = "flex"

    const h3Filter = document.createElement("h3")
    h3Filter.id = "h3Filter"
    h3Filter.textContent = "Adidas"

    adidas.appendChild(h3Filter)

    adidas.addEventListener("click", () => {
        divProdFive.style.display = "none"
    })
    
document.body(section)
}










