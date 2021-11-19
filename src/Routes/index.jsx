import { Route, Switch } from "react-router-dom";
import Casamento from "../Pages/Casamento";
import Confraternizacao from "../Pages/Confraternização";
import Formatura from "../Pages/Formatura";
import HomePage from "../Pages/HomePage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/casamento">
        <Casamento />
      </Route>

      <Route exact path="/confraternizacao">
        <Confraternizacao />
      </Route>

      <Route exact path="/formatura">
        <Formatura />
      </Route>
    </Switch>
  );
}
export default Routes;
