let usuario = prompt("Ingrese su nombre de usuario")
let nombreDeUsuario = "LeanCelle"
let ingresecontra = prompt("Ingrese su contraseña")
let contrasena = "12345"
let edad = prompt("Ingrese su edad")
let bienvenido = alert("Bienvenido " + usuario + "!")

if (ingresecontra === "12345" && edad >= 18 && usuario === "LeanCelle") {
    console.log("Acceso permitido")
}else if (ingresecontra === "12345" && edad <18 && usuario === "LeanCelle"){
    console.log("Acceso denegado (no cumple con la edad mínima)")
}else if (ingresecontra !== "12345" && edad >= 18 && usuario !== "LeanCelle") {
    console.log("Usuario o contraseña incorrectos, acceso denegado")
}else if (ingresecontra !== "12345" && edad >= 18 && usuario === "LeanCelle") {
    console.log("Usuario o contraseña incorrectos, acceso denegado")
}else if (ingresecontra === "12345" && edad >= 18 && usuario != "LeanCelle") {
    console.log("Usuario o contraseña incorrectos, acceso denegado")
}else {
    console.log("Usuario o contraseña incorrectos, acceso denegado")
}