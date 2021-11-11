import { createContext, useState } from "react";

export const FormaturaContext = createContext([]);

export function FormaturaProvider({ children }) {
  const [formatura, setFormatura] = useState([]);

  return (
    <FormaturaContext.Provider value={{ formatura, setFormatura }}>
      {children}
    </FormaturaContext.Provider>
  );
}
export default FormaturaProvider;
