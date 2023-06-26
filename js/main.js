let productos = [];
let productosFiltrados = [];

// Carrito
let carritoCompras = [];

// Contenedor
const contenedor = document.getElementById("container");

// Cargar productos desde el archivo JSON
async function obtenerDatos() {
  try {
    const res = await fetch("../data.json");
    const data = await res.json();
    
    productos = data;
    productosFiltrados = productos.filter((producto, indice) => indice >= 0);
    
    mostrarTodos();
  } catch (error) {
    console.error(error);
  }
}

obtenerDatos();

// Crear tarjeta
function crearTarjeta(producto, indice) {
  if (!producto || producto.seccion !== "hombre") {
    return null;
  }

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

  
// Filtro productos por marca
function filtrarPorMarca(marca) {
  const contenedor = document.getElementById("container");
  contenedor.innerHTML = "";

  const filtroMarca = productos.filter((p) => p.marca === marca && p.seccion === "hombre");
  filtroMarca.forEach((producto) => {
    const indice = productos.indexOf(producto);
    const card = crearTarjeta(producto, indice);
    contenedor.appendChild(card);
  });
}

  
// Agrego eventos de click a los filtros
const filtroNike = document.querySelector("#filtro-nike");
const filtroAdidas = document.querySelector("#filtro-adidas");
const filtroPuma = document.querySelector("#filtro-puma");
const filtroCanterbury = document.querySelector("#filtro-canterbury");
const filtroUnderArmour = document.querySelector("#filtro-underArmour");

  
filtroNike.addEventListener("click", () => filtrarPorMarca("Nike"));
filtroAdidas.addEventListener("click", () => filtrarPorMarca("Adidas"));
filtroPuma.addEventListener("click", () => filtrarPorMarca("Puma"));
filtroCanterbury.addEventListener("click", () => filtrarPorMarca("Canterbury"));
filtroUnderArmour.addEventListener("click", () => filtrarPorMarca("Under Armour"));

  
// Mostrar todos los productos
function mostrarTodos() {
    const contenedor = document.getElementById("container");
    contenedor.innerHTML = "";

    const productosMostrados = productos.filter((producto) => producto.seccion === "hombre");

    
    productosMostrados.forEach((producto, indice) => {
      const card = crearTarjeta(producto, indice);
      contenedor.appendChild(card);
    });
}

  
// Agrego evento de click al botón eliminar filtros
const eliminarFiltros = document.getElementById("eliminar-filtros");
eliminarFiltros.addEventListener("click", mostrarTodos);


// Mostrar todos los productos al cargar la página
window.addEventListener("load", mostrarTodos);


// Actualizar el precio total de la compra
function actualizarTotal() {
  const envio = document.querySelector("#envio");
  let totalCompra = carritoCompras.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  if (totalCompra <= 29999) {
    envio.innerHTML = `<p class="p-envio"><em>Envío: $999</em></p>`;
    totalCompra += 999;
  } else {
    envio.innerHTML = ``;
  }

  if (totalCompra === 999) {
    envio.innerHTML = ``
    totalCompra = 0;
  }

  const precioTotal = document.querySelector("#totalCompra");
  precioTotal.textContent = `TOTAL: $${totalCompra}`;
  precioTotal.style.fontWeight = "bold";
}



// Contador carrito
function actualizarContadorCarrito() {
  const contador = document.getElementById("contadorCarrito");
  const totalProductos = carritoCompras.reduce((acc, producto) => acc + producto.cantidad, 0);
  contador.textContent = totalProductos;
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
            //background: "rgba(0, 0, 0, 0.232)",
            background: "rgba(0, 0, 0, 0.621)",
            //background: "rgba(17, 255, 0, 0.441)",
            //background: "rgba(0, 0, 0, 0.068)",
            fontSize: "1.5rem",
        },
        onClick: function(){} // Callback after click
      }).showToast();
  
    guardarCarritoEnLocalStorage();
    actualizarCarritoEnPantalla();
    actualizarContadorCarrito(); 
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
      actualizarContadorCarrito();
    }
});
  
// Actualizar la vista del carrito
function actualizarCarritoEnPantalla() {
  const carrito = document.querySelector(".carritoAgregado");
  carrito.innerHTML = "";

  if (carritoCompras.length === 0) {
    const carritoVacio = document.createElement("p");
    carritoVacio.className = "carritoVacio"
    carritoVacio.textContent = "Carrito vacío";
    carrito.appendChild(carritoVacio);
  } else {
    carritoCompras.forEach((producto, index) => {
      const item = document.createElement("div");
      item.className = "divProdAgregados";
      item.innerHTML = `
        <img src="${producto.imagen}" class="imgProdAgregados" alt="...">  ${producto.nombre} - $${producto.precio} (Cantidad: ${producto.cantidad})
        <button class="btn btn-outline-danger btn-sm" onClick="eliminarDelCarrito(${index})">Eliminar</button>
      `;
      carrito.appendChild(item);
    });
    actualizarTotal();
  }
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
    actualizarContadorCarrito()
}


// Filtro barra de búsqueda
const barraBusqueda = document.querySelector("#barraBusqueda");

function busqueda(prenda) {
  const contenedor = document.getElementById("container");
  contenedor.innerHTML = "";
  
  const filtroPrenda = productos.filter((p) => p.prenda === prenda && p.seccion === "hombre");

  filtroPrenda.forEach((producto) => {
    const indice = productos.indexOf(producto)
    const card = crearTarjeta(producto, indice);
    contenedor.appendChild(card);
  });
}

barraBusqueda.addEventListener("input", () => {
  const valor = barraBusqueda.value.toLowerCase();
  if (valor === "remera") {
    busqueda("Remera");
  } else if (valor === "pantalon") {
    busqueda("Pantalon");
  } else if (valor === "campera") {
    busqueda("Campera");
  } else if (valor === "zapatillas") {
    busqueda("Zapatillas");
  }
});

// Inicio de sesion o registrate

const usuario = localStorage.getItem("usuario");
const nombreUsuario = usuario ? JSON.parse(usuario) : null;

const inputIndex = document.querySelector("p.inicio-sesion");

if (!nombreUsuario) {
  inputIndex.innerHTML = `<p class="usuarioIndex">INGRESA O REGISTRATE</p>`;
} else {
  inputIndex.innerHTML = `<p class="usuarioIndex">${nombreUsuario}</p>`;

}
