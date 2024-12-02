import { UsuarioLogueado } from "./UsuarioLogueado";
import { UsuarioNoLogueado } from "./UsuarioNoLogueado";

export const DashboardApp = ({ isLogged }) => {
  return isLogged ? <UsuarioLogueado /> : <UsuarioNoLogueado />;
};
