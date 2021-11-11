import { useContext } from "react";
import { ConfraternizacaoContext } from "../../Providers/confraternizacao";

function Confraternizacao() {
  const { confraternizacao, setConfraternizacao } = useContext(
    ConfraternizacaoContext
  );
  const handleDeleteItem = (IDitem) => {
    setConfraternizacao(confraternizacao.filter((item) => item.id !== IDitem));
  };

  return (
    <div>
      {confraternizacao &&
        confraternizacao.map((item, index) => (
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
export default Confraternizacao;
