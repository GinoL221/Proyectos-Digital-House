import { useMemo, useState } from "react";

export const CalculoPesadoApp = () => {
  const [show, setShow] = useState(true);
  const [numList, setNumList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const getCalculo = (numList) => {
    console.log("Calculando...");
    return numList.reduce((a, b) => a * b);
  };

  const addNumber = () => {
    setNumList([...numList, numList[numList.length - 1] + 1]);
  };

  const memorizedCalculo = useMemo(() => getCalculo(numList), [numList]);

  return (
    <>
      <h2>Calculos: </h2>
      <h4>El calculo es: {memorizedCalculo}</h4>
      {show && <h6>Los números base son: {numList}</h6>}

      <button className="btn btn-info" onClick={() => setShow(!show)}>
        {show ? "Ocultar Calculo" : "Mostrar Calculo"}
      </button>
      <br />
      <button className="btn btn-danger" onClick={() => addNumber()}>
        Agregar más números
      </button>
    </>
  );
};
