const form = document.querySelector("#inicio-sesion")

const pOne = document.createElement("p")
pOne.className = "pOne"
pOne.textContent = "Correo electrónico"

const inputOne = document.createElement("input")
inputOne.className = "inputOne"
inputOne.placeholder = "Ingrese su correo electrónico"
inputOne.type = "email"

const pTwo = document.createElement("p")
pTwo.className = "pTwo"
pTwo.textContent = "Contraseña"


const inputTwo = document.createElement("input")
inputTwo.className = "inputTwo"
inputTwo.placeholder = "Ingrese su contraseña"
inputTwo.type = "password"

const button = document.createElement("button")
button.className = "button-inicio-sesion"
button.textContent = "Iniciar sesión"


form.appendChild(pOne)
form.appendChild(inputOne)
form.appendChild(pTwo)
form.appendChild(inputTwo)
form.appendChild(button)

button.addEventListener("click", () => {
    if (inputOne.value === "" || inputTwo.value === "") {
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: 'Ingrese correctamente su correo electrónico y contraseña',
      });
    } else if (!isValidEmail(inputOne.value)) {
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: 'Ingrese un correo electrónico válido',
      });
    } else {
      localStorage.setItem("usuario", JSON.stringify(inputOne.value));
      localStorage.setItem("contraseña", JSON.stringify(inputTwo.value));
      window.location.href = "../index.html";
    }
});
  
// Función para validar el formato de un correo electrónico
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

  