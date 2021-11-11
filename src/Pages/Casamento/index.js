import { useContext } from "react";
import { CasamentoContext } from "../../Providers/casamento";

function Casamento() {
  const { casamento, setCasamento } = useContext(CasamentoContext);
  const handleDeleteItem = (IDitem) => {
    setCasamento(casamento.filter((item) => item.id !== IDitem));
  };

  return (
    <div>
      {casamento &&
        casamento.map((item, index) => (
          <div key={index}>
            <h4>{item.name}</h4>
            <img src={item.image_url} alt="" />
            <h5>{item.tagline}</h5>
            <h5>Since: {item.first_brewed} </h5>
            <button onClick={() => handleDeleteItem(item.id)}>
              Remover item
            </button>
          </div>
        ))}
    </div>
  );
}

export default Casamento;
