// Inicio de sesion o registrate

const usuario = localStorage.getItem("usuario");
const nombreUsuario = usuario ? JSON.parse(usuario) : null;

const inputIndex = document.querySelector("p.inicio-sesion");

if (!nombreUsuario) {
  inputIndex.innerHTML = `<p class="usuarioIndex">INGRESA O REGISTRATE</p>`;
} else {
  inputIndex.innerHTML = `<p class="usuarioIndex">${nombreUsuario}</p>`;

}