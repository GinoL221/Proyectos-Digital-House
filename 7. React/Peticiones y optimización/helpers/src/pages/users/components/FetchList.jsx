import { useFetchData } from "../../../hooks/useFetchData";

export const FetchList = ({ endpoint }) => {
  const { data, isLoading } = useFetchData({ endpoint });

  return (
    <>
      <ul>
        {isLoading && data ? (
          <p>Cargando...</p>
        ) : endpoint == "users" ? (
          data.map((item) => <li key={item.id}> {item.name} </li>)
        ) : (
          data.map((item) => <li key={item.id}> {item.body} </li>)
        )}
      </ul>
    </>
  );
};
