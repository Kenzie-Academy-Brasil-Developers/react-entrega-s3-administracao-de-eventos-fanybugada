import "./App.css";
import { useContext } from "react";
import Header from "./Components/Header";
import { CasamentoProvider } from "./Providers/casamento";
import { BebidasProvider } from "./Providers/bebidas";
import { ConfraternizacaoProvider } from "./Providers/confraternizacao";
import { FormaturaProvider } from "./Providers/formatura";
import Routes from "./Routes";

function App() {
  const cardapio = useContext(BebidasProvider);

  return (
    <div className="App">
      <BebidasProvider>
        <CasamentoProvider>
          <ConfraternizacaoProvider>
            <FormaturaProvider>
              <Header />
              <Routes />
            </FormaturaProvider>
          </ConfraternizacaoProvider>
        </CasamentoProvider>
      </BebidasProvider>
    </div>
  );
}

export default App;
