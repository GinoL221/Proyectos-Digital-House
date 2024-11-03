const action = () => {
  setTimeout(() => {
    console.log("Esta acción es la del botón");
  }, 2000);
};

const action2 = () => {
  const interval = setInterval(() => {
    console.log("Esta acción es la del botón");
  }, 2000);

  setTimeout(() => {
    console.log("Limpiamos el intervalo");
    clearInterval(interval);
  }, 5000);

  //clearTimeout(timeout);
};
