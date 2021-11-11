import { useContext } from "react";
import { BebidasContext } from "../../Providers/bebidas";

function CardItem({ handleButtonEvent }) {
  const { cardapio } = useContext(BebidasContext);

  return (
    <div>
      {cardapio &&
        cardapio.map((item, index) => (
          <div key={index}>
            <h4> {item.name} </h4>
            <img src={item.image_url} alt="" />
            <h5>{item.tagline}</h5>
            <h5> Since: {item.first_brewe} </h5>
            <button onClick={() => handleButtonEvent(item)}>
              Adicionar a um evento
            </button>
          </div>
        ))}
    </div>
  );
}

export default CardItem;
