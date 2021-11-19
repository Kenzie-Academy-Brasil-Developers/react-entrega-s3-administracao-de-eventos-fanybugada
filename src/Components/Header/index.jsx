import { useHistory } from "react-router-dom";
import { HeaderContainer } from "./style";

function Header() {
  const history = useHistory();
  const redirectTo = (address) => history.push(address);

  return (
    <HeaderContainer>
      <div>
        <button onClick={() => redirectTo("/")}> Página inicial </button>
        <button onClick={() => redirectTo("/casamento")}> Casamento </button>
        <button onClick={() => redirectTo("/confraternizacao")}>
          Confraternização
        </button>
        <button onClick={() => redirectTo("/formatura")}> Formatura </button>
      </div>
    </HeaderContainer>
  );
}

export default Header;
