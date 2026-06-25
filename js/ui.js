export const actualizarContador = (carrito) => {
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    contador.textContent = carrito.length;
  }
};

//Funcion que puede servir si agrego librerias
export const mostrarMensaje = (texto) => {
  alert(texto);
};