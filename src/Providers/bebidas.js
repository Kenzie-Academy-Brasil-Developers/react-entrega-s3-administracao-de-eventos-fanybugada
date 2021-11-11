import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const BebidasContext = createContext([]);

export function BebidasProvider({ children }) {
  const [bebidas, setBebidas] = useState("");
  const [cardapio, setCardapio] = useState([]);

  const api = () => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setCardapio(response.data));
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <BebidasContext.Provider value={{ cardapio, setBebidas, bebidas }}>
      {children}
    </BebidasContext.Provider>
  );
}

export default BebidasProvider;
