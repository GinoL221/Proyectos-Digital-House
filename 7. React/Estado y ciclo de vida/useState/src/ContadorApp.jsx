import { useState } from "react";

export const ContadorApp = ({ init }) => {
  const [counter, setCounter] = useState(init);

  const handleClick = () => {
    setCounter((count) => (count += 1));
  };
  console.log(counter);
  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={handleClick}> Agregar 1 </button>
    </>
  );
};
