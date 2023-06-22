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
  {id: 31, nombre: "Zapatillas Nike Pipa rosa", marca: "Nike", precio: 33999, talle: "39", prenda: "Zapatillas", imagen: "../img/zapatillas-nike-pipa-rosa.jpg", seccion: "mujer"},
  {id: 32, nombre: "Zapatillas Adidas Streetcheck Cloudfoam", marca: "Adidas", precio: 32999, talle: "38", prenda: "Zapatillas", imagen: "../img/zapatillas-adidas-floreadas.jpg" , seccion: "mujer"},
  {id: 33, nombre: "Zapatillas Topper X Forcer", marca: "Topper", precio: 14599, talle: "21", prenda: "Zapatillas", imagen: "../img/zapatillas-topper-blancas.jpg", seccion: "niños"},
  {id: 34, nombre: "Zapatillas Atomik Beta Pro", marca: "Atomik ", precio: 8299, talle: "21", prenda: "Zapatillas", imagen: "../img/zapatillas-atomik.jpg", seccion: "niños"},
  {id: 35, nombre: "Campera Nike Sportswear Icon Clash Windrunner Nena", marca: "Nike", precio: 28999, talle: "L", prenda: "Campera", imagen: "../img/campera-azul-dibujos.jpg", seccion: "niños"}, 
  {id: 36, nombre: "Campera Topper Br Puffer II", marca: "Topper", precio: 28979, talle: "L", prenda: "Campera", imagen: "../img/campera-canelones-ninos.jpg", seccion: "niños"},
  {id: 37, nombre: "Remera adidas B Club 3 Tiras", marca: "Adidas", precio: 33099, talle: "S", prenda: "Remera", imagen: "../img/remera-adidas-ninos.jpg", seccion: "niños"},
  {id: 38, nombre: "Remera Gilbert Térmica Infantil", marca: "Under Armour", precio: 8999, talle: "M", prenda: "Remera", imagen: "../img/termica-blanca-ninos.jpg", seccion: "niños"},
  {id: 39, nombre: "Remera Fila Animal", marca: "Fila", precio: 5350, talle: "M", prenda: "Remera", imagen: "../img/remera-fila-ninos.jpg", seccion: "niños"},
  {id: 40, nombre: "Bermuda Topper Rtc", marca: "Topper", precio: 7199, talle: "L", prenda: "Bermuda", imagen: "../img/bermuda-topper-rosa.jpg", seccion: "niños"},
  {id: 41, nombre: "Bikini Hydro Painting", marca: "Hydro", precio: 7599, talle: "S", prenda: "Malla", imagen: "../img/malla-ninos.jpg", seccion: "niños"},
  {id: 42, nombre: "Pantalón Nike Sportswear Club Fleece", marca: "Nike", precio: 12499, talle: "L", prenda: "Pantalon", imagen: "../img/pantalon-nike-ninos.jpg", seccion: "niños"},
  {id: 43, nombre: "Pantalón adidas X Disney Pixar Monsters", marca: "Adidas", precio: 9999, talle: "M", prenda: "Pantalon", imagen: "../img/pantalon-adidas-ninos.jpg", seccion: "niños"},
  {id: 44, nombre: "Calza adidas Designed To Move", marca: "Adidas", precio: 5499, talle: "M", prenda: "Calza", imagen: "../img/calza-ninos.jpg", seccion: "niños"},
  {id: 45, nombre: "Calza adidas Marimekko Believe", marca: "Adidas", precio: 15999, talle: "S", prenda: "Calza", imagen: "../img/calza-floreada-ninos.jpg", seccion: "niños"},
  {id: 46, nombre: "Zapatillas Puma Rebound Layup", marca: "Puma", precio: 26199, talle: "22", prenda: "Zapatillas", imagen: "../img/zapatillas-puma-ninos.jpg", seccion: "niños"},
  {id: 47, nombre: "Zapatillas Puma Wired Run", marca: "Puma", precio: 13199, talle: "23", prenda: "Zapatillas", imagen: "../img/zapatillas-puma-azul-ninos.jpg", seccion: "niños"},
  {id: 48, nombre: "Zapatillas de Running Nike Star Runner 3 Mujer", marca: "Nike", precio: 26999, talle: "23", prenda: "Zapatillas", imagen: "../img/zapatillas-nike-celestes-ninos.jpg", seccion: "niños"},
]
    
  // Carrito
  let carritoCompras = [];
    
// Actualizar el precio total de la compra
function actualizarTotal() {
    const descuentoInput = document.querySelector("#descuento");
    const descuento = descuentoInput.value;
    let totalCompra = carritoCompras.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
  
    if (totalCompra <= 29999) {
      totalCompra += 999;
    }
  
    if (descuento === "SOYLEANDRO") {
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
  }
});




