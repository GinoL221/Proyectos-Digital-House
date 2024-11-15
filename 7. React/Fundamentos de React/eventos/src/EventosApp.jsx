export const EventosApp = () => {
  // evento que se dispara cuando se presiona un botón
  const handleClick = (event) => {
    if (event.ctrlKey) {
      console.log("Ctrl + click");
    } else {
      console.log("Click");
    }
    console.log(event);
  };

  // Evento que se dispara cuando se presiona una tecla
  const handleKeyUP = (event) => {
    if (event.shiftKey) {
      console.log(event.key);
    }
  };

  return (
    <>
      <button onClick={handleClick}>Soy un botón</button>
      <br />
      <input
        type="text"
        onKeyUp={handleKeyUP}
        placeholder="Presiona una tecla"
      />
    </>
  );
};
