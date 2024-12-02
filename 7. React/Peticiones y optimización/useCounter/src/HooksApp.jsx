import { CalculoPesadoComponent } from "./components/CalculoPesadoComponent";
import { FetchComponent } from "./components/FetchComponent";
import { FormsComponent } from "./components/FormsComponent";
import { CounterComponent } from "./components/CounterComponent";

export const HooksApp = () => {
  return (
    <>
      <h1>Aplicación de Hooks</h1>
      <hr />
      <CalculoPesadoComponent />
      <hr />
      <FetchComponent />
      <hr />
      <FormsComponent />
      <hr />
      <CounterComponent />
    </>
  );
};
