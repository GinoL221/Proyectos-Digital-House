import { useEffect, useState } from "react";

export const FetchList = ({ endpoint }) => {
  const urlBase = `https://jsonplaceholder.typicode.com/${endpoint}`;

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const res = await fetch(urlBase);
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    //se ejecuta como consecuencia
    fetchItems();

    /*
          return () => {
              //se ejecuta cuando se desmonta
            second
          }
          */
  }, [endpoint]); //dependencias

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}> {item.name} </li>
        ))}
      </ul>
    </>
  );
};
