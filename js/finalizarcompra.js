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
    productosFiltrados = productos.filter((producto, indice) => indice >= 48);
    
  } catch (error) {
    console.error(error);
  }
}

obtenerDatos();

// Crear tarjeta
function crearTarjeta(producto, indice) {
  if (!producto || producto.seccion !== "clubes") {
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
    
// Actualizar el precio total de la compra
function actualizarTotal() {
    const descuentoInput = document.querySelector("#descuento");
    const descuento = descuentoInput.value;
    let totalCompra = carritoCompras.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
  
    if (totalCompra <= 29999) {
      totalCompra += 999;
    }
  
    if (totalCompra === 999) {
      totalCompra = 0;
    }
  
    if (descuento === "SOYLEAN") {
      const descuentoAplicado = totalCompra * 0.15;
      totalCompra -= descuentoAplicado;
    }
  
    const precioTotal = document.querySelector("#totalCompra");
    precioTotal.textContent = `TOTAL: $${totalCompra}`;
    precioTotal.style.fontWeight = "bold";
}
  
// Evento para actualizar el total cuando el campo de descuento cambie
const descuentoInput = document.querySelector("#descuento");
descuentoInput.addEventListener("input", actualizarTotal);
  
  
  
    
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
              color: "black",
              //background: "rgba(17, 255, 0, 0.441)",
              background: "rgba(0, 0, 0, 0.068)",
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
    const carrito = document.querySelector("#compraFinalizada");
    carrito.style.width = "100%"
    carrito.innerHTML = "";
  
    carritoCompras.forEach((producto, index) => {
      const item = document.createElement("div");
      item.className = "divProdAgregados";
      item.innerHTML = `
        <img src="${producto.imagen}" class="imgProdAgregados" alt="...">  ${producto.nombre} - $${producto.precio} (Cantidad: ${producto.cantidad})
      `;
      carrito.appendChild(item);
    });
  
    actualizarTotal();
  }


  // Formulario

  const sectionform = document.querySelector("#sectionForm")
  sectionform.style.display = "flex"
  sectionform.style.width = "100%"
  sectionform.style.justifyContent = "center"
  sectionform.style.marginTop = "6rem"

  const form = document.querySelector("#form")
  form.style.display = "flex"
  form.style.flexDirection = "column"
  form.style.alignItems = "center"
  form.style.width = "100%"
  form.style.gap = "3rem"

  form.innerHTML = 
  `
  <input class="inputform" type="text" id="nombre" placeholder="NOMBRE(S) *" required>
  <input class="inputform" type="text" id="apellido" placeholder="APELLIDO *" required>
  <input class="inputform" type="text" id="calle" placeholder="CALLE *" required>
  <input class="inputform" type="text" id="numero" placeholder="NÚMERO *" required>
  <input class="inputform" type="text" id="piso" placeholder="PISO" required>
  <input class="inputform" type="text" id="departamento" placeholder="DEPARTAMENTO" required>
  <input class="inputform" type="text" id="codigoPostal" placeholder="CÓDIGO POSTAL *" required>
  <input class="inputform" type="text" id="correo" placeholder="CORREO ELECTRÓNICO *" required>
  <input class="inputform" type="text" id="correotwo" placeholder="INGRESE NUEVAMENTE SU CORREO ELECTRÓNICO *" required>
  `


// Finalizar Compra

const inputNombre = document.querySelector("#nombre")

inputNombre.addEventListener("input", (e) => {
    if (e.target.value === "") {
        inputNombre.style.border = "0.1rem solid red"
    }else {
        inputNombre.style.border = "0.1rem solid rgb(0, 192, 16)"
    }
})

const inputApellido = document.querySelector("#apellido")

inputApellido.addEventListener("input", (e) => {
    if (e.target.value === "") {
        inputApellido.style.border = "0.1rem solid red"
    }else {
        inputApellido.style.border = "0.1rem solid rgb(0, 192, 16)"
    }
})

const inputCalle = document.querySelector("#calle")

inputCalle.addEventListener("input", (e) => {
    if (e.target.value === "") {
        inputCalle.style.border = "0.1rem solid red"
    }else {
        inputCalle.style.border = "0.1rem solid rgb(0, 192, 16)"
    }
})

const inputNumero = document.querySelector("#numero")

inputNumero.addEventListener("input", (e) => {
    if (e.target.value === "") {
        inputNumero.style.border = "0.1rem solid red"
    }else {
        inputNumero.style.border = "0.1rem solid rgb(0, 192, 16)"
    }
})

const inputCodigoPostal = document.querySelector("#codigoPostal")

inputCodigoPostal.addEventListener("input", (e) => {
    if (e.target.value === "") {
        inputCodigoPostal.style.border = "0.1rem solid red"
    }else {
        inputCodigoPostal.style.border = "0.1rem solid rgb(0, 192, 16)"
    }
})

const inputCorreo = document.querySelector("#correo")

inputCorreo.addEventListener("input", (e) => {
    if (e.target.value === "") {
        inputCorreo.style.border = "0.1rem solid red"
    }else {
        inputCorreo.style.border = "0.1rem solid rgb(0, 192, 16)"
    }
})

const inputCorreoTwo = document.querySelector("#correotwo")

inputCorreoTwo.addEventListener("input", (e) => {
    if (e.target.value === "") {
        inputCorreoTwo.style.border = "0.1rem solid red"
    }else {
        inputCorreoTwo.style.border = "0.1rem solid rgb(0, 192, 16)"
    }
})

const terminoCompra = document.querySelector("#terminoCompra");

const cardNumber = document.querySelector("#card-number")
const cardNumberOne = document.querySelector("#card-number-1")
const cardNumberTwo = document.querySelector("#card-number-2")
const cardNumberThree = document.querySelector("#card-number-3")
const cardHolder = document.querySelector("#card-holder")
const cardExpirationMonth = document.querySelector("#card-expiration-month")
const cardExpirationYear = document.querySelector("#card-expiration-year")
const cardCcv = document.querySelector("#card-ccv")


terminoCompra.addEventListener("click", () => {
  if (
    inputNombre.value === "" || inputApellido.value === "" || inputCalle.value === "" || inputNumero.value === "" || inputCodigoPostal.value === "" || inputCorreo.value === "" || inputCorreoTwo.value === "" || cardNumber.value === "" || cardNumberOne.value === "" || cardNumberTwo.value === "" || cardNumberThree.value === "" || cardHolder.value === "" || cardExpirationMonth.value === "" || cardExpirationYear.value === "" || cardCcv.value === "") {
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Complete todos los campos requeridos.',
          })
  } else {
    Swal.fire(
      'Compra finalizada!',
      'Recibirá su producto dentro de las 72hs hábiles!',
      'success'
    );
    // Vaciar el carrito
    carritoCompras = [];
    guardarCarritoEnLocalStorage();
    actualizarCarritoEnPantalla();
    setTimeout(()=>{
      window.location.href = "../index.html";
    }, 4000)
  }
});





