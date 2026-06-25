const KEY = "carrito";

export const guardarCarrito = (carrito) => {
  //casteo a json antes de guardar con stringify
  localStorage.setItem(KEY, JSON.stringify(carrito));
};

export const obtenerCarrito = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const vaciarCarritoStorage = () => {
  localStorage.removeItem(KEY);
};