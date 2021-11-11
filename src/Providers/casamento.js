import { createContext, useState } from "react";

export const CasamentoContext = createContext([]);

export function CasamentoProvider({ children }) {
  const [casamento, setCasamento] = useState([]);

  return (
    <CasamentoContext.Provider value={{ casamento, setCasamento }}>
      {children}
    </CasamentoContext.Provider>
  );
}

export default CasamentoProvider;
