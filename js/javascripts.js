// Ejemplo de cómo cambiar el contenido de un elemento
const mensaje = document.getElementById("mensaje"); // Suponiendo que tienes un elemento con id="mensaje"
mensaje.innerHTML = "Este es un mensaje dinámico.";

// Ejemplo de cómo manejar un evento de clic
const boton = document.getElementById("boton"); // Suponiendo que tienes un botón con id="boton"
boton.addEventListener("click", function() {
    alert("¡Has hecho clic en el botón!");
});

// Ejemplo de cómo crear un carrusel de imágenes
const imagenes = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"]; // Array de URLs de imágenes
let indiceImagen = 0;
const carrusel = document.getElementById("carrusel"); // Suponiendo que tienes un elemento con id="carrusel"

function mostrarImagen() {
    carrusel.innerHTML = `<img src="${imagenes[indiceImagen]}" alt="Imagen del carrusel">`;
    indiceImagen = (indiceImagen + 1) % imagenes.length; // Ciclo para cambiar la imagen
}

setInterval(mostrarImagen, 3000); // Muestra una nueva imagen cada 3 segundos

// Ejemplo de cómo validar un formulario
const formulario = document.getElementById("formulario"); // Suponiendo que tienes un formulario con id="formulario"
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    if (nombre === "" || email === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        alert("¡Formulario enviado correctamente!");
        // Aquí puedes enviar el formulario a un servidor
    }
});
