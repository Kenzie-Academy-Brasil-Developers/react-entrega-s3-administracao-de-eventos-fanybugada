import { useContext, useState } from "react";
import { CasamentoContext } from "../../Providers/casamento";
import { BebidasContext } from "../../Providers/bebidas";
import { ConfraternizacaoContext } from "../../Providers/confraternizacao";
import { FormaturaContext } from "../../Providers/formatura";
import CardItem from "../../Components/CardItem";

function HomePage() {
  const { bebidas, setBebidas } = useContext(BebidasContext);

  const { casamento, setCasamento } = useContext(CasamentoContext);

  const { confraternizacao, setConfraternizacao } = useContext(
    ConfraternizacaoContext
  );

  const { formatura, setFormatura } = useContext(FormaturaContext);

  const [selection, setSelection] = useState(false);

  const handleButtonEvent = (item) => {
    setSelection(true);
    setBebidas(item);
  };

  const handleCasamento = () => {
    setSelection(false);
    setCasamento([...casamento, bebidas]);
  };

  const handleConfraternicao = () => {
    setSelection(false);
    setConfraternizacao([...confraternizacao, bebidas]);
  };

  const handleFormatura = () => {
    setSelection(false);
    setFormatura([...formatura, bebidas]);
  };

  return (
    <>
      <main>
        <CardItem handleButtonEvent={handleButtonEvent} />

        <div>
          {selection && (
            <section>
              <h4>Escolha o evento para adicionar a bebida:</h4>
              <button onClick={() => handleCasamento}>
                Adicionar a Casamento
              </button>

              <button onClick={() => handleConfraternicao}>
                Adicionar a Confraternização
              </button>

              <button onClick={() => handleFormatura}>
                Adicionar a Formatura
              </button>
            </section>
          )}
        </div>
      </main>
    </>
  );
}
export default HomePage;
