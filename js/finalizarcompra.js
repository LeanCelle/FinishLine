// Productos
let productos = [
    {id: 1, nombre: "Camperon adidas Argentina Condivo 2022", marca: "Adidas", precio: 45000, talle: "M", prenda: "Campera", imagen: "../img/camperon-argentina-adidas.jpg", seccion: "hombre"},
    {id: 2, nombre: "Camiseta Argentina Campeones Titular", marca: "Adidas", precio: 24490, talle: "S", prenda: "Remera", imagen: "../img/camiseta-argentina.jpg", seccion: "hombre"},
    {id: 3, nombre: "Conjunto Adidas Essential Negro", marca: "Adidas", precio: 21299, talle: "L", prenda: "Remera", imagen: "../img/campera-adidas.jpg", seccion: "hombre"}, 
    {id: 4, nombre: "Botines De Fútbol Adidas Predator Unisex Negro", marca: "Adidas", precio: 39999, talle: "42", prenda: "Zapatillas", imagen: "../img/botines-violeta.jpg", seccion: "hombre"},
    {id: 5, nombre: "Short De Baño Puma Length Swim De Hombre", marca: "Puma", precio: 5499, talle: "S", prenda: "Pantalon", imagen: "../img/short-puma-negro.webp", seccion: "hombre"},
    {id: 6, nombre: "Campera Adidas Tiro Pride", marca: "Adidas", precio: 27999, talle: "M", prenda: "Campera", imagen: "../img/campera-adidas-mangas.jpg", seccion: "hombre"},
    {id: 7, nombre: "Campera adidas Varilite", marca: "Adidas", precio: 60099, talle: "L", prenda: "Campera", imagen: "../img/campera-adidas-facha.jpg", seccion: "hombre"},
    {id: 8, nombre: "Campera adidas Marathon", marca: "Adidas", precio: 39999, talle: "L", prenda: "Campera", imagen: "../img/campera-adidas-camuflada-negra.jpg", seccion: "hombre"},
    {id: 9, nombre: "Remera Nike Sportswear", marca: "Nike", precio: 7999, talle: "S", prenda: "Remera", imagen: "../img/remera-nike-pipa-roja.jpg", seccion: "hombre"},
    {id: 10, nombre: "Remera Running Nike Dri-Fit Miler Hombre", marca: "Nike", precio: 14499, talle: "S", prenda: "Remera", imagen: "../img/remera-nike-blanca.jpg", seccion: "hombre"},
    {id: 11, nombre: "Remera Canterbury Ccc Logo", marca: "Canterbury", precio: 6999, talle: "S", prenda: "Remera", imagen: "../img/remera-canterbury.jpg", seccion: "hombre"},
    {id: 12, nombre: "Remera Under Armour Challenger Top", marca: "Under Armour", precio: 12499, talle: "M", prenda: "Remera", imagen: "../img/remera-under-negra.jpg", seccion: "hombre"},
    {id: 13, nombre: "Zapatillas Urbanas adidas Breaknet", marca: "Adidas", precio: 25999, talle: "41", prenda: "Zapatillas", imagen: "../img/zapatillas-adidas-urbana.jpg", seccion: "hombre"},
    {id: 14, nombre: "Zapatillas Running Nike Air Zoom Vomero 16", marca: "Nike", precio: 35499, talle: "43", prenda: "Zapatillas", imagen: "../img/zapatillas-nike-blancas.jpg", seccion: "hombre"},
    {id: 15, nombre: "Zapatillas Under Armour Hovr Sonic 5", marca: "Under Armour", precio: 49999, talle: "43", prenda: "Zapatillas", imagen: "../img/zapatillas-under-fluo.jpg", seccion: "hombre"},
    {id: 16, nombre: "Zapatillas adidas Response Super 3.0", marca: "Adidas", precio: 41999, talle: "41", prenda: "Zapatillas", imagen: "../img/zapatillas-adidas-rojas.jpg", seccion: "hombre"},
    {id: 17, nombre: "Zapatillas adidas Run 70s De Mujer", marca: "Adidas", precio: 30999, talle: "38", prenda: "Zapatillas", imagen: "../img/zapatillas-adidas-leopardo.webp", seccion: "mujer"},
    {id: 18, nombre: "Conjunto adidas Sportswear Teamsport De Mujer", marca: "Adidas", precio: 25499, talle: "S", prenda: "Campera", imagen: "../img/conjunto-adidas-mujer.webp", seccion: "mujer"},
    {id: 19, nombre: "Zapatillas adidas Runfalcon de Mujer", marca: "Adidas", precio: 19199, talle: "38", prenda: "Zapatillas", imagen: "../img/zapatillas-adidas-blancas.webp", seccion: "mujer"},
    {id: 20, nombre: "Campera adidas Essentials Full-Zip", marca: "Adidas", precio: 25999, talle: "M", prenda: "Campera", imagen: "../img/campera-adidas-negra.jpg", seccion: "mujer"},
    {id: 21, nombre: "Campera Nike Swoosh Run", marca: "Nike", precio: 33099, talle: "S", prenda: "Campera", imagen: "../img/campera-nike-violeta.jpg", seccion: "mujer"},
    {id: 22, nombre: "Campera Nike Sportswear Essential", marca: "Nike", precio: 49999, talle: "M", prenda: "Campera", imagen: "../img/campera-nike-negra.jpg", seccion: "mujer"},
    {id: 23, nombre: "Campera Topper Br Puffer II", marca: "Topper", precio: 36219, talle: "L", prenda: "Campera", imagen: "../img/campera-topper-marron.jpg", seccion: "mujer"},
    {id: 24, nombre: "Pantalón adidas Essentials", marca: "Adidas", precio: 14899, talle: "S", prenda: "Pantalon", imagen: "../img/pantalon-adidas-gris.jpg", seccion: "mujer"},
    {id: 25, nombre: "Campera Puma Favorite Full Zip", marca: "Puma", precio: 16999, talle: "S", prenda: "Campera", imagen: "../img/campera-puma-violeta.jpg", seccion: "mujer"},
    {id: 26, nombre: "Pantalón Nike Sportswear Essential", marca: "Nike", precio: 21199, talle: "L", prenda: "Pantalon", imagen: "../img/calza-adidas-negra.jpg", seccion: "mujer"},
    {id: 27, nombre: "Remera adidas Floral Superher", marca: "Adidas", precio: 9799, talle: "S", prenda: "Remera", imagen: "../img/remera-adidas-azul.jpg", seccion: "mujer"},
    {id: 28, nombre: "Remera Lotto Pride", marca: "Lotto", precio: 4999, talle: "L", prenda: "Remera", imagen: "../img/remera-lotto-pride.jpg", seccion: "mujer"},
    {id: 29, nombre: "Pollera Tenis Fila Basic Mujer", marca: "Fila", precio: 11999, talle: "S", prenda: "Pollera", imagen: "../img/pollera-fila-blanca.jpg", seccion: "mujer"},
    {id: 30, nombre: "Pollera adidas Club Tennis", marca: "Adidas", precio: 17999, talle: "M", prenda: "Pollera", imagen: "../img/pollera-adidas-negra.jpg", seccion: "mujer"},
    {id: 31, nombre: "../img/zapatillas-nike-pipa-rosa.jpg", marca: "Nike", precio: 33999, talle: "39", prenda: "Zapatillas", imagen: "../img/zapatillas-adidas-leopardo.webp", seccion: "mujer"},
    {id: 32, nombre: "Zapatillas Adidas Streetcheck Cloudfoam", marca: "Adidas", precio: 32999, talle: "38", prenda: "Zapatillas", imagen: "../img/zapatillas-adidas-floreadas.jpg" , seccion: "mujer"},
    {id: 33, nombre: "Zapatillas adidas Run 70s De Mujer", marca: "Adidas", precio: 30999, talle: "38", prenda: "Zapatillas", imagen: "../img/zapatillas-adidas-leopardo.webp", seccion: "mujer"},
    {id: 34, nombre: "Zapatillas adidas Run 70s De Mujer", marca: "Adidas", precio: 30999, talle: "38", prenda: "Zapatillas", imagen: "../img/zapatillas-adidas-leopardo.webp", seccion: "mujer"},
  ]
    
  // Carrito
  let carritoCompras = [];
    
  // Crear tarjeta
  /*function crearTarjeta(producto, indice) {
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
});*/
  
    
  // Mostrar todos los productos
  /*function mostrarTodos() {
      const contenedor = document.getElementById("container");
      contenedor.innerHTML = "";
  
      const productosMostrados = productos.filter((producto) => producto.seccion === "hombre");
  
      
      productosMostrados.forEach((producto, indice) => {
        const card = crearTarjeta(producto, indice);
        contenedor.appendChild(card);
      });
  }
    
  // Mostrar todos los productos al cargar la página
  window.addEventListener("load", mostrarTodos);*/
    
  // Actualizar el precio total de la compra
  function actualizarTotal() {
      const totalCompra = carritoCompras.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
      const precioTotal = document.querySelector("#totalCompra");
      precioTotal.textContent = `TOTAL: $${totalCompra}`;
      precioTotal.style.fontWeight = "bold"
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
  <h4 class="form-h">Ingrese sus datos!</h4>
  <input class="inputform" type="text"  id="nombre" placeholder="Ingrese su nombre" required>
  <input class="inputform" type="text"  id="apellido" placeholder="Ingrese su apellido" required>
  <input class="inputform" type="text"  id="direccion" placeholder="Ingrese su dirección de envio" required>
  <input class="inputform" type="text" id="correo" placeholder="Ingrese su correo electrónico" required>
  <input class="inputform" type="text" id="correotwo" placeholder="Ingrese nuevamente su correo electrónico" required>
  `



// Finalizar Compra

const inputNombre = document.querySelector("#nombre")

inputNombre.addEventListener("input", (e) => {
    if (e.target.value === "") {
        inputNombre.style.boxShadow = "0rem 0rem 0.1rem 0.1rem rgb(255, 0, 0)"
    }else {
        inputNombre.style.boxShadow = "0rem 0rem 0.1rem 0.1rem rgb(0, 192, 16)"
    }
})

const inputApellido = document.querySelector("#apellido")

inputApellido.addEventListener("input", (e) => {
    if (e.target.value === "") {
        inputApellido.style.boxShadow = "0rem 0rem 0.2rem 0.2rem rgb(255, 0, 0)"
    }else {
        inputApellido.style.boxShadow = "0rem 0rem 0.1rem 0.1rem rgb(0, 192, 16)"
    }
})

const inputDireccion = document.querySelector("#direccion")

inputDireccion.addEventListener("input", (e) => {
    if (e.target.value === "") {
        inputDireccion.style.boxShadow = "0rem 0rem 0.2rem 0.2rem rgb(255, 0, 0)"
    }else {
        inputDireccion.style.boxShadow = "0rem 0rem 0.1rem 0.1rem rgb(0, 192, 16)"
    }
})

const inputCorreo = document.querySelector("#correo")

inputCorreo.addEventListener("input", (e) => {
    if (e.target.value === "") {
        inputCorreo.style.boxShadow = "0rem 0rem 0.2rem 0.2rem rgb(255, 0, 0)"
    }else {
        inputCorreo.style.boxShadow = "0rem 0rem 0.1rem 0.1rem rgb(0, 192, 16)"
    }
})

const inputCorreoTwo = document.querySelector("#correotwo")

inputCorreoTwo.addEventListener("input", (e) => {
    if (e.target.value === "") {
        inputCorreoTwo.style.boxShadow = "0rem 0rem 0.2rem 0.2rem rgb(255, 0, 0)"
    }else {
        inputCorreoTwo.style.boxShadow = "0rem 0rem 0.1rem 0.1rem rgb(0, 192, 16)"
    }
})

const terminoCompra = document.querySelector("#terminoCompra");

terminoCompra.addEventListener("click", () => {
  if (
    inputNombre.value === "" || inputApellido.value === "" || inputDireccion.value === "" || inputCorreo.value === "" || inputCorreoTwo.value === "") {
    console.log("Debes completar todos los campos del formulario.");
  } else {
    Swal.fire(
      'Compra finalizada!',
      'Recibirá su producto dentro de las 72hs hábiles!',
      'success'
    );
  }
});






const tarjeta = document.querySelector("#tarjeta")
tarjeta.style.width = "100%"

  
  //