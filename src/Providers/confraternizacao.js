import { createContext, useState } from "react";

export const ConfraternizacaoContext = createContext([]);

export function ConfraternizacaoProvider({ children }) {
  const [confraternizacao, setConfraternizacao] = useState([]);

  return (
    <ConfraternizacaoContext.Provider
      value={{ confraternizacao, setConfraternizacao }}
    >
      {children}
    </ConfraternizacaoContext.Provider>
  );
}

export default ConfraternizacaoProvider;
