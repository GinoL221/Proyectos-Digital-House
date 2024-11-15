import PropTypes from "prop-types";

const Button = ({ titulo = "Soy un botón" }) => {
  return <button>{titulo}</button>;
};

Button.propTypes = {
  titulo: PropTypes.string,
};

export const VariablesApp = ({ titulo, subtitulo }) => {
  return (
    <>
      <h1>{titulo}</h1>
      <h3>{subtitulo}</h3>
      <Button />
    </>
  );
};

VariablesApp.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
};

VariablesApp.defaultProps = {
  titulo: "Curso de React",
  subtitulo: "Seccion de Propiedades",
};
