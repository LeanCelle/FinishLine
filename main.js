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
let carritoCompras = [];
  
// Crear tarjeta
function crearTarjeta(producto, indice) {
    const card = document.createElement("div");
    card.className = "card col-sm-12 col-lg-3 divProductos-1";
    card.innerHTML = `
      <img src="${producto.imagen}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title h5Prod">${producto.nombre}</h5>
        <p class="card-text pProd">$${producto.precio}</p>
        <a class="btn btn-dark boton" onClick="agregarAlCarrito(${indice})">Agregar al carrito</a>
      </div>
    `;
    return card;
}

// Contenedor
const contenedor = document.getElementById("container");

productos.forEach((producto, indice) => {
  const card = crearTarjeta(producto, indice);
  contenedor.appendChild(card);
});

  
// Filtrar productos por marca
function filtrarPorMarca(marca) {
    const contenedor = document.getElementById("container");
    contenedor.innerHTML = "";
    
    const filtroMarca = productos.filter((p) => p.marca === marca);
    filtroMarca.forEach((producto, indice) => {
      const card = crearTarjeta(producto, indice);
      contenedor.appendChild(card);
    });
}
  
// Agrego eventos de click a los elementos <h5> de los filtros
const filtroNike = document.getElementById("filtro-nike");
const filtroAdidas = document.getElementById("filtro-adidas");
const filtroPuma = document.getElementById("filtro-puma");
const filtroCanterbury = document.getElementById("filtro-canterbury");
const filtroUnderArmour = document.getElementById("filtro-underArmour");

  
filtroNike.addEventListener("click", () => filtrarPorMarca("Nike"));
filtroAdidas.addEventListener("click", () => filtrarPorMarca("Adidas"));
filtroPuma.addEventListener("click", () => filtrarPorMarca("Puma"));
filtroCanterbury.addEventListener("click", () => filtrarPorMarca("Canterbury"));
filtroUnderArmour.addEventListener("click", () => filtrarPorMarca("Under Armour"));

  
// Mostrar todos los productos
function mostrarTodos() {
    const contenedor = document.getElementById("container");
    contenedor.innerHTML = "";
    
    productos.forEach((producto, indice) => {
      const card = crearTarjeta(producto, indice);
      contenedor.appendChild(card);
    });
}
  
// Agregar evento de clic al elemento <h5> del botón de eliminar filtros
const eliminarFiltros = document.getElementById("eliminar-filtros");
eliminarFiltros.addEventListener("click", mostrarTodos);
  
// Mostrar todos los productos al cargar la página
window.addEventListener("load", mostrarTodos);
  
// Actualizar el precio total de la compra
function actualizarTotal() {
    const totalCompra = carritoCompras.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    const precioTotal = document.querySelector("#totalCompra");
    precioTotal.textContent = `TOTAL: $${totalCompra}`;
    precioTotal.style.color = "black"
}
  
// Agregar producto al carrito
function agregarAlCarrito(indice) {
    const producto = productos[indice];
    const productoExistente = carritoCompras.find((item) => item.id === producto.id);
  
    if (productoExistente) {
      productoExistente.cantidad++;
    } else {
      producto.cantidad = 1;
      carritoCompras.push(producto);
    }

    Toastify({
        text: "Producto añadido al carrito",
        duration: 2000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            color: "white",
            background: "rgba(17, 255, 0, 0.441)",
            fontSize: "1.5rem",
        },
        onClick: function(){} // Callback after click
      }).showToast();
  
    guardarCarritoEnLocalStorage();
    actualizarCarritoEnPantalla();
}
  
// Guardar carrito en el almacenamiento local
function guardarCarritoEnLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(carritoCompras));
}
  
// Cargar carrito del almacenamiento local al cargar la página
window.addEventListener("load", () => {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
      carritoCompras = JSON.parse(carritoGuardado);
      actualizarCarritoEnPantalla();
    }
});
  
// Actualizar la vista del carrito
function actualizarCarritoEnPantalla() {
    const carrito = document.querySelector(".carritoAgregado");
    carrito.innerHTML = "";
  
    carritoCompras.forEach((producto, index) => {
      const item = document.createElement("div");
      item.className = "divProdAgregados"
      item.innerHTML = `
        <img src="${producto.imagen}" class="imgProdAgregados" alt="...">  ${producto.nombre} - $${producto.precio} (Cantidad: ${producto.cantidad})
        <button class="btn btn-outline-danger btn-sm" onClick="eliminarDelCarrito(${index})">Eliminar</button>
      `;
      carrito.appendChild(item);
    });
  
    actualizarTotal();
}
  
// Eliminar producto del carrito
function eliminarDelCarrito(indice) {
    const producto = carritoCompras[indice];
  
    if (producto.cantidad > 1) {
      producto.cantidad--;
    } else {
      carritoCompras.splice(indice, 1);
    }
  
    guardarCarritoEnLocalStorage();
    actualizarCarritoEnPantalla();
}

// Finalizar Compra

const finalizarCompra = document.querySelector("#finalizarCompra")

finalizarCompra.addEventListener("click", () => {
    Swal.fire(
        'Compra finalizada!',
        'Recibirá su producto dentro de las 72hs hábiles!',
        'success'
      )
})



//



  
  
  






  
  
  
  



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










