import { useHistory } from "react-router";

function Header() {
  const history = useHistory();
  const redirectTo = (address) => history.push(address);

  return (
    <header>
      <div>
        <button onClick={() => redirectTo("/")}> Página inicial </button>
        <button onClick={() => redirectTo("/casamento")}> Casamento </button>
        <button onClick={() => redirectTo("/confraternizacao")}>
          Confraternização
        </button>
        <button onClick={() => redirectTo("/formatura")}> Formatura </button>
      </div>
    </header>
  );
}

export default Header;
