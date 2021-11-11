import { useContext } from "react";
import { FormaturaContext } from "../../Providers/formatura";

function Formatura() {
  const { formatura, setformatura } = useContext(FormaturaContext);
  const handleDeleteItem = (IDitem) => {
    setformatura(formatura.filter((item) => item.id !== IDitem));
  };

  return (
    <div>
      {formatura &&
        formatura.map((item, index) => (
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

export default Formatura;
