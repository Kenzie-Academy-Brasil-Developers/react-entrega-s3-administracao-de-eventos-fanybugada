import { useContext } from "react";
import { BebidasContext } from "../../Providers/bebidas";
import { ContainerDiv } from "./style";

function CardItem({ handleButtonEvent }) {
  const { cardapio } = useContext(BebidasContext);

  return (
    <ContainerDiv>
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
    </ContainerDiv>
  );
}

export default CardItem;
